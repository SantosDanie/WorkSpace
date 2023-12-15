<template>
	<editor-content :editor="editor" spellcheck="false"
	@keyup.enter.capture.prevent="() => {}"
	@keydown.enter.capture.prevent="() => {}"/>
</template>

<script setup lang="ts">
	import { computed, watch }					from 'vue'
	import { markdownToHtml, htmlToMarkdown }	from '@/utils/utils'
	import { useEditor, EditorContent }			from '@tiptap/vue-3'
	import Document								from '@tiptap/extension-document'
	import Paragraph							from '@tiptap/extension-paragraph'
	import Text									from '@tiptap/extension-text'
	import Bold									from '@tiptap/extension-bold'
	import Italic								from '@tiptap/extension-italic'
	import History								from '@tiptap/extension-history'
	import Placeholder							from '@tiptap/extension-placeholder'
	import Link									from '@tiptap/extension-link'
	import Heading								from '@tiptap/extension-heading'
	import TextStyle							from '@tiptap/extension-text-style'
	import { Color }							from '@tiptap/extension-color'

	const props = defineProps({
		modelValue: {
			type: String,
			default: '',
		},
	})

	const emit = defineEmits(['update:modelValue'])

	const value = computed({
		get () {
			const mdValue = props.modelValue
			if (mdValue) {
				return markdownToHtml(mdValue)
			} else {
				return '<p></p>'
			}
		},
		set (newValue) {
			emit('update:modelValue', newValue)
		},
	})

	const editor = useEditor({
		extensions: [
			Document,
			Paragraph,
			Text,
			Bold,
			Italic,
			History,
			Link,
			TextStyle,
			Color,
			Heading.configure({levels: [1, 2, 3, 4, 5, 6]}),
			Placeholder.configure({ placeholder: 'Type \'/\' for a menu' })
		],
		editorProps: { handleDrop: () => true },
		content: value.value,
		onUpdate: () => { value.value = htmlToMarkdown(editor.value?.getHTML() || '') },
	})

	watch(() => props.modelValue, value => {
		const isSame = htmlToMarkdown(editor.value?.getHTML() || '') === value
		if (isSame) return
		editor.value?.commands.setContent(markdownToHtml(value), false)
	})
</script>
