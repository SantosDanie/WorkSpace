<template>
	<editor-content
	:editor="editor" spellcheck="false"
	@keyup.enter.capture.prevent="() => {}"
	@keydown.enter.capture.prevent="() => {}"/>
</template>
  
<script setup lang="ts">
	import Document				from "@tiptap/extension-document";
	import Paragraph			from "@tiptap/extension-paragraph";
	import Text					from "@tiptap/extension-text";
	import Bold					from "@tiptap/extension-bold";
	import Italic				from "@tiptap/extension-italic";
	import Strike				from "@tiptap/extension-strike";
	import Underline			from "@tiptap/extension-underline";
	import History				from "@tiptap/extension-history";
	import Placeholder			from "@tiptap/extension-placeholder";
	import Link					from "@tiptap/extension-link";
	import Code					from "@tiptap/extension-code";
	import Subscript			from "@tiptap/extension-subscript";
	import Superscript			from "@tiptap/extension-superscript";
	// import Comment				from "../Extension/Comments/extension";
	import { computed, watch }	from 'vue';
	import { useEditor, EditorContent }			from "@tiptap/vue-3";
	import { markdownToHtml, htmlToMarkdown }	from '@/utils/utils'
	
	const props		= defineProps({
		modelValue:	{ type: String,		default: [] },
		readonly:	{ type: Boolean,	default: false },
	});
	const emit		= defineEmits(['update:modelValue']);
	const value		= computed({
		get() {
			const mdValue = props.modelValue;
			if (mdValue) {
				return markdownToHtml(`${mdValue}`)
			} else {
				return '<p></p>'
			}
		}, set(newValue) {
			emit('update:modelValue', newValue);
		}
	})
	const editor	= useEditor({
		editable: !props.readonly,
		extensions: [
			Document,
			Paragraph,
			Text,
			Bold,
			Italic,
			Underline,
			Strike,
			History,
			Link,
			Code,
			Subscript,
			Superscript,
			// Comment.configure({ HTMLAttributes: { class: 'comment-text' }} ),
			Placeholder.configure({ placeholder: 'Type \'/\' for a menu' }),
		],
		editorProps: { handleDrop : () => true },
		content: value.value,
		onUpdate: () => {
			value.value = htmlToMarkdown(editor.value?.getHTML() || '')
		}
	})

	watch(() => props.modelValue, value => {
		const isSame = htmlToMarkdown(editor.value?.getHTML() || '') === value
		if (isSame) return
		editor.value?.commands.setContent(markdownToHtml(value), false)
	})
</script>

<style lang="scss">
	.comment-text { background-color: #f6fdb2 !important; }
</style>