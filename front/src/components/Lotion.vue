<template>
	<div class="editor-page" v-if="props.page" ref="editor" id="editor">
		<div class="popoverTextBlock" :style="popoverPosition">
			<ul class="text-sm">
				<li class="fw-bold"><span>B</span></li>
				<li class="fst-italic"><span>I</span></li>
				<!-- <li @click="createComment"><span>Comment</span></li> -->
			</ul>
		</div>
		<div class="commentsBlock" :style="popoverComments">
			<div class="create-comment">
				<div class="comment-head">
					<p class="mb-0 fw-bold text-sm">Create Comment</p>
				</div>
				<div class="comment-body border">
					<textarea class="p-1" style="width: 250px; min-height: 100px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. </textarea>
				</div>
				<div class="comment-footer mt-1">
					<button class="btn btn-sm btn-primary">Add</button>
				</div>
			</div>
			<div class="comment"></div>
			<div class="comment-replies"></div>
		</div>

		<h1
			id="title"
			ref="title"
			:contenteditable="!props.readonly"
			spellcheck="false" data-ph="Untitled"
			@keydown.enter.prevent="splitTitle"
			@keydown.down="blockElements[0]?.moveToFirstLine(); scrollIntoView();"
			@blur="props.page.title=($event.target as HTMLElement).innerText.replace('\n', '')"
			class="focus:outline-none focus-visible:outline-none text-5xl font-bold mb-4"
			:class="props.page.title ? '' : 'empty'">
			{{ props.page.title || '' }}
		</h1>
		<draggable id="blocks" tag="div" :list="props.page.blocks" handle=".handle" v-bind="dragOptions" class="ml-editor">
			<transition-group type="transition">
				<BlockComponent
					:block="block" v-for="block, i in props.page.blocks"
					:key="i" :id="'block-'+block.id"
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
	import { ref, onBeforeUpdate, PropType }	from 'vue'
	import { VueDraggableNext as draggable }	from 'vue-draggable-next'
	import { v4 as uuidv4 }						from 'uuid'
	import {
		Block,
		BlockType,
		isTextBlock,
		availableBlockTypes
	}											from '@/utils/types'
	import { htmlToMarkdown }					from '@/utils/utils'
	import BlockComponent						from './Block.vue'

	const props				= defineProps({
		page: {
			type: Object as PropType<{ title:string, blocks:Block[] }>,
			required: true,
		},
		comment: {
			type: Object,
			required: false,
		},
		blockTypes: {
			type: Object as PropType<null|(string|BlockType)[]>,
			default: null,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
		onSetAll: {
			type: Function as PropType<(block:Block) => void>,
		},
		onUnsetAll: {
			type: Function as PropType<(block:Block) => void>,
		},
		onCreateBlock: {
			type: Function as PropType<(block:Block) => void>,
		},
		onDeleteBlock: {
			type: Function as PropType<(block:Block) => void>,
		},
	})
	const editor			= ref<HTMLDivElement|null>(null)
	const blockElements		= ref<typeof BlockComponent[]>([])
	const title				= ref<HTMLDivElement|null>(null)
	const popoverPosition	= ref('display:none;');
	const popoverComments	= ref('display:none;');
	const dragOptions		= {
		animation: 150,
		group: 'blocks',
		disabled: false,
		ghostClass: 'lotion-ghost',
	}

	document.addEventListener('mouseup', (event) => {
		const blocks		= document.getElementById('blocks')
		const title			= document.getElementById('title')
		const editorDOM		= document.getElementById('editor')
		const editorRect	= editor.value?.getClientRects()[0]
		if (!blocks || !title || !editorRect) { return }
		if(editorDOM != null && editorDOM.contains(event.target as HTMLDivElement)) {
			const lastBlockRect = blocks?.lastElementChild?.getClientRects()[0]
			if (!lastBlockRect) return
			if(	event.clientX > (lastBlockRect as DOMRect).left &&
				event.clientX < (lastBlockRect as DOMRect).right && 
				event.clientY > (lastBlockRect as DOMRect).bottom &&
				blocks.contains(event.target as HTMLDivElement) == false) {
				const lastBlock = props.page.blocks[props.page.blocks.length-1]
				const lastBlockComponent = blockElements.value[props.page.blocks.length-1]
				if (lastBlock.type === BlockType.Text && lastBlockComponent.getTextContent() === '') {
					setTimeout(lastBlockComponent.moveToEnd)
				} else {
					insertBlock(props.page.blocks.length-1)
				}
			}
		}

		// let text = getSelectedText();
		// if(text !== '' && text !== ' ' && blocks.contains(event.target as HTMLDivElement) == true) {
		// 	popoverPosition.value =		`top: ${getSelectedPosition().y-45}px;`;
		// 	popoverPosition.value +=	`left: ${getSelectedPosition().x-40}px;`;
		// 	popoverPosition.value +=	`display: block;`;
			
		// 	popoverComments.value =		`top: ${getSelectedPosition().y+20}px;`;
		// 	popoverComments.value +=	`left: ${getSelectedPosition().x-40}px;`;
		// 	popoverComments.value +=	`display: none;`;

		// } else {
		// 	popoverPosition.value =		`top: 0px;`;
		// 	popoverPosition.value +=	`left: 0px;`;
		// 	popoverPosition.value +=	`display: none;`;
		// }

		// const commentModal = document.querySelector('commentsBlock');
		// if(commentModal != null && commentModal.contains(event.target as  HTMLDivElement)) {
		// 	popoverComments.value +=	`top: 0;`;
		// 	popoverComments.value +=	`left: 0;`;
		// 	popoverComments.value +=	`display: none;`;
		// }
	})

	// function createComment() {
	// 	popoverComments.value +=	`display: block;`;
	// }

	// function getSelectedText() {
	// 	if (window.getSelection) {
	// 		return window.getSelection().toString();
	// 	} else if (document.selection) {
	// 		return document.selection.createRange().text;
	// 	}
	// 	return '';
	// }

	// function getSelectedPosition() {
	// 	let s		= window.getSelection();
	// 	let oRange	= s.getRangeAt(0);
	// 	let oRect	= oRange.getBoundingClientRect();

	// 	return oRect
	// }

	onBeforeUpdate(() => { blockElements.value = [] })

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
				const selection = window.getSelection()
				const range = document.createRange()
				if (title.value.childNodes.length) {
					range.setStart(title.value.childNodes[0], props.page.title.length)
					range.setEnd(title.value.childNodes[0], props.page.title.length)
				} else {
					range.setStart(title.value, 0)
					range.setEnd(title.value, 0)
				}
				selection?.removeAllRanges()
				selection?.addRange(range)
			})
		}
		else blockElements.value[blockIdx-1]?.moveToLastLine()
		scrollIntoView()
	}

	function insertBlock (blockIdx: number) {
		const newBlock = {
			id: uuidv4(),
			type: BlockType.Text,
			details: {
				value: '',
			},
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
		// Always keep at least one block
		if (props.page.blocks.length === 0) {
			insertBlock(0);
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
				props.page.blocks[blockIdx].details = {value: ''}
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
		if(blockIdx > 0 || [
			BlockType.H1,
			BlockType.H2,
			BlockType.H3,
			BlockType.H4,
			BlockType.H5,
			BlockType.H6,
			BlockType.Quote,
		].includes(props.page.blocks[blockIdx].type)) {
			if (props.onDeleteBlock) props.onDeleteBlock(props.page.blocks[blockIdx])
			if([
				BlockType.H1,
				BlockType.H2,
				BlockType.H3,
				BlockType.H4,
				BlockType.H5,
				BlockType.H6,
				BlockType.Quote,
			].includes(props.page.blocks[blockIdx].type)){
				const prevBlockContent = blockElements.value[blockIdx].getTextContent()    
				setBlockType(blockIdx, BlockType.Text)
				props.page.blocks[blockIdx].details.value = prevBlockContent
				setTimeout(()=>{ blockElements.value[blockIdx].moveToStart() })
				return
			}
	
			if (blockIdx === 0) mergeTitle()
			else mergeBlocks(blockIdx-1, blockIdx)
		}
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
		} else if ([BlockType.H1, BlockType.H2, BlockType.H3, BlockType.H4, BlockType.H5, BlockType.H6].includes(props.page.blocks[prefixBlockIdx].type)) {
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
		const title = props.page.title
		props.page.title = title + blockElements.value[blockIdx].getTextContent()
		props.page.blocks.splice(blockIdx, 1)
		setTimeout(() => {
			const selection = window.getSelection()
			const range = document.createRange()
			range.setStart(titleElement.childNodes[0], title.length)
			range.setEnd(titleElement.childNodes[0], title.length)
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
			props.page.blocks[blockIdx+1].details.value = htmlToMarkdown((caretPos.tag ? `<${caretPos.tag}>` : '') + (htmlValue ? htmlValue?.slice(caretPos.pos) : ''))
			props.page.blocks[blockIdx].details.value = htmlToMarkdown((htmlValue ? htmlValue?.slice(0, caretPos.pos) : '') + (caretPos.tag ? `</${caretPos.tag}>` : ''))
		}
		setTimeout(() => blockElements.value[blockIdx+1].moveToStart())
	}

	function splitTitle () {
		if (!title.value) return
		const selection = window.getSelection()
		if (!selection) return
		const caretPos = selection.anchorOffset
		insertBlock(-1)
		const titleString = title.value.textContent as string
		props.page.title = titleString.slice(0, caretPos)
		props.page.blocks[0].details.value = titleString.slice(caretPos)
	}
</script>

<style lang="scss">
	.editor-page {
		min-height: calc(100vh - 34px);
		padding: 30px 70px;
		padding-bottom: 55px;
		p { margin-bottom: 0; }
		*:focus-visible { outline: 0 ; }
		h1, h2, h3, h4, h5, h6 { margin-bottom: 0; }
	}

	.popoverTextBlock {
		position: fixed;
		box-shadow: 0 0 2px 0px gray;
		border: 1px solid #b6b6b6;
		padding: 5px;
		border-radius: 3px;
		background-color: white;
		z-index: 2;
		ul {
			padding: 0;
			margin: 0;
			display: flex;
			li {
				display: block;
				margin-left: 2.5px;
				margin-right: 2.5px;
				padding: 5px 10px;
				height: fit-content;
				border-radius: 5px;
				color: #2e2e2e;
				cursor: pointer;
				&:hover { background-color: rgba(#003cff, 0.15); }
				&.selected { background-color: rgba(#003cff, 0.15); }
			}
		}
	}

	.commentsBlock {
		position: fixed;
		// right:15px;
		border:1px solid gray;
		background-color: #fff;
		padding: 10px 15px;
		z-index: 5;
		border-radius: 5px;
	}
</style>