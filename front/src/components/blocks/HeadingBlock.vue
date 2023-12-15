<template>
	<editor-content
	v-if="!props.readonly"
	:editor="editor"
	@keyup.enter.capture.prevent="() => {}"
	@keydown.enter.capture.prevent="() => {}"
	@keyup="updatePros"
	class="content-block"/>
	<div v-else v-html="markdownToHtml(props.block.details.value as string)" class="content-block"></div>
</template>

<script setup lang="ts">
	import { PropType, watch, computed, ref }	from 'vue'
	import { markdownToHtml, htmlToMarkdown }	from '@/utils/utils'
	import { Block }					from '@/utils/types'
	import { Editor, EditorContent }	from '@tiptap/vue-3'
	import Document						from '@tiptap/extension-document'
	import Heading						from '@tiptap/extension-heading'
	import Paragraph					from '@tiptap/extension-paragraph'
	import Text							from '@tiptap/extension-text'
	import Bold							from '@tiptap/extension-bold'
	import Italic						from '@tiptap/extension-italic'

	const props		= defineProps({
		block: {
			type: Object as PropType<Block>,
			required: true,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
	})

	let HeadingValue		= '';
	for (let index = 1; index < 7; index++) {
		if(props.block.type == `H${index}`) {
			HeadingValue = `<h${index}>${markdownToHtml(props.block.details.value || '')}</h${index}>`;
		}
	}

	function updatePros(e: any) {
		let text = e.target.innerHTML;
		props.block.details.value  = htmlToMarkdown(text);
	}

	const editor	= new Editor({
		extensions: [
			Document,
			Paragraph,
			Text,
			Bold,
			Italic,
			Heading.configure({ levels: [1, 2, 3, 4, 5, 6], }),
		],
		editorProps: { handleDrop: () => true },
		content: HeadingValue,
	})

	function onSet () {
		if(props.block.type == 'H1') {
			editor.chain().setHeading({ level: 1 }).focus().run()
		} else if (props.block.type == 'H2') {
			editor.chain().setHeading({ level: 2 }).focus().run()
		} else if (props.block.type == 'H3') {
			editor.chain().setHeading({ level: 3 }).focus().run()
		} else if (props.block.type == 'H4') {
			editor.chain().setHeading({ level: 4 }).focus().run()
		} else if (props.block.type == 'H5') {
			editor.chain().setHeading({ level: 5 }).focus().run()
		} else if (props.block.type == 'H6') {
			editor.chain().setHeading({ level: 6 }).focus().run()
		}
	}

	defineExpose({ onSet })
</script>