<template>
	<div class="editor-workPage lotion mx-auto font-sans text-base" v-if="props.page" ref="editor">
		<Toolbar :ref="el => toolbar = el"/>
		<draggable
			id="blocks" tag="div"
			:list="props.page.blocks"
			handle=".handle" v-bind="dragOptions"
			class=" space-y-2 pb-5 h-100">
			<transition-group type="transition">
				<BlockComponent
					v-for="block, i in props.page.blocks" :key="i"
					:block="block"
					:id="'block-'+block.id"
					:blockTypes="props.blockTypes"
					:readonly="props.readonly"
					:ref="el => blockElements[i] = (el as unknown as typeof Block)"
					@deleteBlock="deleteBlock(i)"
					@newBlock="insertBlock(i)"
					@moveToPrevChar="blockElements[i-1]?.moveToEnd(); scrollIntoView();"
					@moveToNextChar="blockElements[i+1]?.moveToStart(); scrollIntoView();"
					@moveToPrevLine="handleMoveToPrevLine(i)"
					@moveToNextLine="blockElements[i+1]?.moveToFirstLine(); scrollIntoView();"
					@merge="merge(i)"
					@split="split(i)"
					@setBlockType="type => setBlockType(i, type)"
					/>
			</transition-group>
		</draggable>
	</div>
</template>
  
<script setup lang="ts">
	import { v4 as uuidv4 }		from 'uuid'
	import BlockComponent		from './Block.vue'
	import { htmlToMarkdown }	from '@/utils/utils'
	import { ref, onBeforeUpdate, PropType } from 'vue'
	import Toolbar				from "./Elements/Toolbar.vue"
	import { VueDraggableNext as draggable } from 'vue-draggable-next'
	import { Block, BlockType, isTextBlock, availableBlockTypes } from '@/utils/types'
	
	const props 			= defineProps({
		page:			{ type: Object as PropType<{ blocks:Block[] }>, required: true },
		blockTypes:		{ type: Object as PropType<null|(string|BlockType)[]>, default: null },
		readonly:		{ type: Boolean, default: false },
		onSetAll:		{ type: Function as PropType<(block:Block) => void>},
		onUnsetAll:		{ type: Function as PropType<(block:Block) => void>},
		onCreateBlock:	{ type: Function as PropType<(block:Block) => void>},
		onDeleteBlock:	{ type: Function as PropType<(block:Block) => void>},
	})
	const emit 				= defineEmits(['save']);
	const editor			= ref<HTMLDivElement|null>(null);
	const blocksElements	= ref<HTMLDivElement|null>(null);

	let waitForElBlocks = function(selector: any, callback: any) {
		if (document.querySelector(selector) != null) {
			callback();
		} else {
			setTimeout(function() {
				waitForElBlocks(selector, callback);
			}, 100);
		}
	}

	waitForElBlocks('#blocks', () => {
		blocksElements.value = document.querySelector('#blocks');
		if(blocksElements.value !== null) {
			blocksElements.value?.addEventListener("click", (event:MouseEvent) => {
				const blocks		= document.querySelector('#blocks');
				const title			= document.querySelector('#title');
				const editorRect	= editor.value?.getClientRects()[0];
				if (!blocks || !editorRect) { return }

				if ((event.clientX < ((editorRect as DOMRect).left || -1)) || (event.clientX > (editorRect?.right || window.innerWidth))) {
					const titleRect = title?.getClientRects()[0]
					if (event.clientY > (titleRect?.top || window.innerHeight) && event.clientY < (titleRect?.bottom || 0)) {
						const rect		= title?.getClientRects()[0];
						const selection	= window.getSelection();
						const range		= document.createRange();
						let moveToStart	= true;
						if (event.x > (rect as DOMRect).right) moveToStart = false 
						range.selectNodeContents(title as Node)
						range.collapse(moveToStart)
						selection?.removeAllRanges()
						selection?.addRange(range)
						return
					}
					const blockRects = Array.from(blocks?.children as HTMLCollection)
					const block = blockRects.find(child => {
						const rect = child.getClientRects()[0]
						return event.clientY > rect.top && event.clientY < rect.bottom
					})
					const blockIdx = blockRects.findIndex(child => {
						const rect = child.getClientRects()[0]
						return event.clientY > rect.top && event.clientY < rect.bottom
					})
					if (block) {
						const rect = block.getClientRects()[0]
						if (event.x < rect.left) {
							blockElements.value[blockIdx].moveToStart()
						} else {
							blockElements.value[blockIdx].moveToEnd()
						}
						return
					}
				}

				const lastBlockRect = blocks?.lastElementChild?.getClientRects()[0];
				if (!lastBlockRect) return
				if (event.clientX > (lastBlockRect as DOMRect).left && event.clientX < (lastBlockRect as DOMRect).right && event.clientY > (lastBlockRect as DOMRect).bottom) {
					const lastBlock				= props.page.blocks[props.page.blocks.length-1];
					const lastBlockComponent	= blockElements.value[props.page.blocks.length-1];

					if (lastBlock.type === BlockType.Text && lastBlockComponent.getTextContent() === '') {
						setTimeout(lastBlockComponent.moveToEnd);
					} else {
						insertBlock(props.page.blocks.length-1);
					}
				}
			});
		}
	});
	
	const dragOptions		= {
		animation: 150,
		group: 'blocks',
		disabled: false,
		ghostClass: 'lotion-ghost',
	}
	onBeforeUpdate(()		=> { blockElements.value = [] })
	const blockElements		= ref<typeof BlockComponent[]>([])
	const toolbar			= ref<any>();
	const title				= ref<HTMLDivElement|null>(null)
	
	function scrollIntoView () {
		const selection = window.getSelection()
		if (!selection || !selection.anchorNode) return
		if (selection?.anchorNode?.nodeType === Node.ELEMENT_NODE) {
			(selection?.anchorNode as HTMLElement).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
		} else {
			(selection?.anchorNode?.parentElement as HTMLElement).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
		}
	}
	
	function handleMoveToPrevLine (blockIdx:number) {
		if (blockIdx === 0) {
			setTimeout(() => {
				if (!title.value) return
				const selection = window.getSelection();
				const range = document.createRange();

				if (title.value.childNodes.length) {
					// range.setStart(title.value.childNodes[0],	props.page.title.length);
					// range.setEnd(title.value.childNodes[0],		props.page.title.length);
				} else {
					range.setStart(title.value, 0);
					range.setEnd(title.value, 0);
				}
				selection?.removeAllRanges();
				selection?.addRange(range);
			})
		}
		else blockElements.value[blockIdx-1]?.moveToLastLine()
		scrollIntoView()
	}
	
	function insertBlock (blockIdx: number) {
		const newBlock = {
			id: uuidv4(),
			type: BlockType.Text,
			details: { value: '', },
		}
		props.page.blocks.splice(blockIdx + 1, 0, newBlock)
		if (props.onCreateBlock) props.onCreateBlock(props.page.blocks[blockIdx+1])
			setTimeout(() => {
			blockElements.value[blockIdx+1].moveToStart()
			scrollIntoView()
		})
	}
	
	function deleteBlock (blockIdx: number) {
		if (props.onDeleteBlock) props.onDeleteBlock(props.page.blocks[blockIdx])
		props.page.blocks.splice(blockIdx, 1)
		if (props.page.blocks.length === 0) {
			insertBlock(0)
		}
	}
	
	async function setBlockType (blockIdx: number, type: BlockType) {
		if (props.onUnsetAll) props.onUnsetAll(props.page.blocks[blockIdx])
		if (blockElements.value[blockIdx].content.onUnset) {
			blockElements.value[blockIdx].content.onUnset()
		}
		props.page.blocks[blockIdx].type = type
		if (type === BlockType.Divider) {
			setTimeout(() => {
				props.page.blocks[blockIdx].details = {}
				insertBlock(blockIdx)
			})
		} else setTimeout(() => {
		if (props.onSetAll) props.onSetAll(props.page.blocks[blockIdx])
			if (blockElements.value[blockIdx].content.onSet) {
				blockElements.value[blockIdx].content.onSet()
			}
			blockElements.value[blockIdx].moveToEnd()
		})
	}
	
	function merge (blockIdx: number) {
		if (props.onDeleteBlock) props.onDeleteBlock(props.page.blocks[blockIdx])

		if([BlockType.H1, BlockType.H2, BlockType.H3, BlockType.Quote]
			.includes(props.page.blocks[blockIdx].type)){
		const prevBlockContent = blockElements.value[blockIdx].getTextContent()    
		setBlockType(blockIdx, BlockType.Text)
		props.page.blocks[blockIdx].details.value = prevBlockContent
		setTimeout(()=>{
			blockElements.value[blockIdx].moveToStart()
		})
		return
		}
	
		if (blockIdx === 0) mergeTitle()
		else mergeBlocks(blockIdx-1, blockIdx)
	}
	
	function mergeBlocks (prefixBlockIdx: number, suffixBlockIdx: number) {
		if (isTextBlock(props.page.blocks[prefixBlockIdx].type)) {
		const prevBlockContentLength = blockElements.value[prefixBlockIdx].getTextContent().length
		let suffix = (props.page.blocks[suffixBlockIdx] as any).details.value
		if ([BlockType.H1, BlockType.H2, BlockType.H3,BlockType.Quote].includes(props.page.blocks[suffixBlockIdx].type)) suffix = blockElements.value[suffixBlockIdx].getTextContent()
		props.page.blocks[prefixBlockIdx].details.value = (props.page.blocks[prefixBlockIdx] as any).details.value + suffix
		props.page.blocks.splice(suffixBlockIdx, 1)
		setTimeout(() => {
			blockElements.value[prefixBlockIdx].setCaretPos(prevBlockContentLength)
		})
		} else if ([BlockType.H1, BlockType.H2, BlockType.H3].includes(props.page.blocks[prefixBlockIdx].type)) {
		const prevBlockContentLength = (props.page.blocks[prefixBlockIdx] as any).details.value.length
		props.page.blocks[prefixBlockIdx].details.value += blockElements.value[suffixBlockIdx].getTextContent()
		props.page.blocks.splice(suffixBlockIdx, 1)
		setTimeout(() => {
			blockElements.value[prefixBlockIdx].setCaretPos(prevBlockContentLength)
		})
		} else {
		if (prefixBlockIdx > 0) mergeBlocks(prefixBlockIdx - 1, suffixBlockIdx)
		else mergeTitle(suffixBlockIdx)
		}
	}
	
	function mergeTitle (blockIdx:number = 0) {
		const titleElement = document.getElementById('title')
		if (!titleElement) return
			// const title = props.page.title
			// props.page.title = title + blockElements.value[blockIdx].getTextContent()
			props.page.blocks.splice(blockIdx, 1)
			setTimeout(() => {
			const selection = window.getSelection()
			const range = document.createRange()
			// range.setStart(titleElement.childNodes[0], title.length)
			// range.setEnd(titleElement.childNodes[0], title.length)
			selection?.removeAllRanges()
			selection?.addRange(range)
		})
	}
	
	function split (blockIdx: number) {
		const caretPos = blockElements.value[blockIdx].getCaretPos()
		insertBlock(blockIdx)
		const blockTypeDetails = availableBlockTypes.find(blockType => blockType.blockType === props.page.blocks[blockIdx].type)
		if (!blockTypeDetails) return
		if (blockTypeDetails.canSplit) {
			let htmlValue = blockElements.value[blockIdx].getHtmlContent()
			htmlValue = htmlValue.replace('<br class="ProseMirror-trailingBreak">', '')
			props.page.blocks[blockIdx+1].details.value	= htmlToMarkdown((caretPos.tag ? `<${caretPos.tag}>` : '') + (htmlValue ? htmlValue?.slice(caretPos.pos) : ''))
			props.page.blocks[blockIdx].details.value	= htmlToMarkdown((htmlValue ? htmlValue?.slice(0, caretPos.pos) : '') + (caretPos.tag ? `</${caretPos.tag}>` : ''))
		}
		setTimeout(() => blockElements.value[blockIdx+1].moveToStart())
	}
	
	// function splitTitle () {
	// 	if (!title.value) return
	// 	const selection = window.getSelection()
	// 	if (!selection) return
	// 	const caretPos = selection.anchorOffset
	// 	insertBlock(-1)
	// 	const titleString = title.value.textContent as string
	// 	props.page.title = titleString.slice(0, caretPos)
	// 	props.page.blocks[0].details.value = titleString.slice(caretPos)
	// }
</script>

<style lang="scss">
	#blocks				{
		height: 100%;
		[block-type=H1],
		[block-type=H2],
		[block-type=H3] ,
		[block-type=H4],
		[block-type=H5],
		[block-type=H6] {
			padding: 2.5px 0;
			color: #464646;
		}
		[block-type=H1] { font-size: 48px; }
		[block-type=H2] { font-size: 44px; }
		[block-type=H3] { font-size: 40px; }
		[block-type=H4] { font-size: 36px; }
		[block-type=H5] { font-size: 32px; }
		[block-type=H6] { font-size: 28px; }
		p { padding: 3px 0; }
	}
	.text-base { line-height: normal !important; }
	.editor-workPage	{
		padding: 0 75px;
		height: calc(100% - 115px);
	}
</style>