<!-- <template>
	<editor-content
	:editor="editor" spellcheck="false"
	@keyup.enter.capture.prevent="() => {}"
	@keydown.enter.capture.prevent="() => {}"/>
</template>
  
<script setup lang="ts">
	import Document		from "@tiptap/extension-document";
	import Paragraph	from "@tiptap/extension-paragraph";
	import Text			from "@tiptap/extension-text";
	import Bold			from "@tiptap/extension-bold";
	import Italic		from "@tiptap/extension-italic";
	import Strike		from "@tiptap/extension-strike";
	import Underline	from "@tiptap/extension-underline";
	import History		from "@tiptap/extension-history";
	import Placeholder	from "@tiptap/extension-placeholder";
	import Link			from "@tiptap/extension-link";
	import Code			from "@tiptap/extension-code";
	import Subscript	from "@tiptap/extension-subscript";
	import Superscript	from "@tiptap/extension-superscript";
	import Comment		from "../Extension/Comments/extension";
	import { computed, watch }			from 'vue';
	import { useEditor, EditorContent }	from "@tiptap/vue-3";
	import { markdownToHtml, htmlToMarkdown } from '@/utils/utils'
	
	const props		= defineProps({
		modelValue:	{ type: Object, default: [] }
	});
	const emit		= defineEmits(['update:modelValue']);
	const value		= computed({
		get() {
			const mdValue = props.modelValue.details.value;
			if (mdValue) {
				return markdownToHtml(`${mdValue}`)
			} else {
				return '<p></p>'
			}
		}, set(newValue) {
			// let block =  props.modelValue;
			// block.details.value = newValue;
			// emit('update:modelValue', block);
		}
	})
	const editor	= useEditor({
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
			Comment.configure({ HTMLAttributes: { class: 'comment-text' }} ),
			Placeholder.configure({ placeholder: 'Type \'/\' for a menu' }),
		],
		editorProps: { handleDrop : () => true },
		content: value.value,
		onUpdate: () => {
			value.value = htmlToMarkdown(editor.value?.getHTML() || '')

			// let dataJson = editor.value?.getJSON().content[0].content;
			// let block =  props.modelValue;
			// block.content = dataJson;
			// emit('update:modelValue', block);
		},
		onCreate: () => {
			value.value = htmlToMarkdown(editor.value?.getHTML() || '')

			// let dataJson = editor.value?.getJSON().content[0].content;
			// let block =  props.modelValue;
			// block.content = dataJson;
			// emit('update:modelValue', block);
		}
	})
	
	function generateHTML(data: Object) {
		let string=  '';
		for(let i = 0; i < data.length; i++) {
			let str		= data[i].text;
			let marks	= data[i].marks;
			string		+= marksRaw(str, marks);
		}
		return `<p>${string}</p>`;
	}

	function marksRaw(text: string, marks: object) {
		let html = text;
		if(marks) {
			marks.forEach((item: any) => {
				if(item.type == 'bold')		{ html = `<strong>${html}</strong>`; }
				if(item.type == 'italic')	{ html = `<em>${html}</em>`; }
				if(item.type == 'underline'){ html = `<u>${html}</u>`; }
				if(item.type == 'strike')	{ html = `<s>${html}</s>`; }
				if(item.type == 'link')		{ html = `<a target="${item.attrs.target}" href="${item.attrs.href}" rel="${item.attrs.rel}">${html}</a>`; }
				if(item.type == 'comment')	{ html = `<span class="comment-text" data-comment-id="${item.attrs.attrs.id}">${html}</span>`; }
			});
		}
		return html;
	}

	watch(() => props.modelValue, value => {
		const isSame = htmlToMarkdown(editor.value?.getHTML() || '') === value
		if (isSame) return
		editor.value?.commands.setContent(markdownToHtml(value), false)
	})
</script>

<style lang="scss">
	.comment-text { background-color: #f6fdb2 !important; }
</style> -->