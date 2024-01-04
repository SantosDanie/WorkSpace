<template>
	<div class="w-100">
		<div class="w-100">
			<div contenteditable="true" class="w-100 text-editor" v-html="value"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, watch, computed } from 'vue'
	import { markdownToHtml, htmlToMarkdown }	from '@/utils/utils'

	const props = defineProps({
		modelValue: {
			type: String,
			default: '',
		},
		htmlTag: {
			type: String,
			default: ''
		}
	})
	const emit	= defineEmits(['update:modelValue'])
	const value	= computed({
		get () {
			const mdValue = props.modelValue
			if (mdValue) {
				return markdownToHtml(`<p>${mdValue}</p>`)
			} else {
				return '<p></p>'
			}
		},
		set (newValue) { emit('update:modelValue', newValue) },
	})

	// watch(() => props.modelValue, value => {
	// 	// const isSame = htmlToMarkdown(editor.value?.getHTML() || '') === value
	// 	// if (isSame) return
	// 	// editor.value?.commands.setContent(markdownToHtml(value), false)
	// })
</script>

<style lang="scss">
	.text-editor {
		margin-top: 5px;
		p {
			width: 100%;
			display: block;
			height: 100%;
			min-height: 24px;
		}
	}
</style>