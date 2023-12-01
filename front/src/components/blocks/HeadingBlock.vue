<template>
	<editor-content :editor="editor" v-if="editor"/>
</template>

<script setup lang="ts">
	import { PropType }		from 'vue'
	import { Block }					from '@/utils/types'
	import { Editor, EditorContent }	from '@tiptap/vue-3'
	import Document						from '@tiptap/extension-document'
	import Heading						from '@tiptap/extension-heading'
	import Paragraph					from '@tiptap/extension-paragraph'
	import Text							from '@tiptap/extension-text'

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
	let HeadingValue		= props.block.details.value;
	for (let index = 1; index < 7; index++) {
		if(props.block.type == `H${index}`) {
			HeadingValue = `<h${index}>${props.block.details.value}</h${index}>`;
		}
	}

	const editor	= new Editor({
		extensions: [
			Document,
			Paragraph,
			Text,
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