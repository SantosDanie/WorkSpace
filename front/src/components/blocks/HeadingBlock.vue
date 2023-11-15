<template>
	<div
		ref="content"
		:key="props.block.type"
		:contenteditable="!props.readonly"
		:class="classElement"
		@blur="props.block.details.value=content?.innerText"
		@keydown="props.block.details.value=content?.innerText">
		{{ props.block.details.value }}
	</div>
</template>

<script setup lang="ts">
	import { ref, PropType }	from 'vue'
	import { Block, BlockType }	from '@/utils/types'

	const headingConfig	= ref([
		{
			element: `${[BlockType.H1]}`,
			placeholder: 'Heading 1',
			class: 'fw-bold h1 m-0',
		},
		{
			element: `${[BlockType.H2]}`,
			placeholder: 'Heading 2',
			class: 'fw-bold h2 m-0',
		},
		{
			element: `${[BlockType.H3]}`, 
			placeholder: 'Heading 3',
			class: 'fw-bold h3 m-0',
		},
		{
			element: `${[BlockType.H4]}`,
			placeholder: 'Heading 4',
			class: 'fw-bold h4 m-0',
		},
		{
			element: `${[BlockType.H5]}`, 
			placeholder: 'Heading 5',
			class: 'fw-bold h5 m-0',
		},
		{
			element: `${[BlockType.H6]}`, 
			placeholder: 'Heading 6',
			class: 'fw-bold h6 m-0',
		}
	])
	const props			= defineProps({
		block: {
			type: Object as PropType<Block>,
			required: true,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
	})
	const classElement	= ref<string>('')

	const jsonStringify	= JSON.stringify(getObjetData(props.block.type))
	const jsonParse		= JSON.parse(jsonStringify);
	classElement.value	= jsonParse[0].class;

	const elementTag	= ref<string>(`<${props.block.type} class="${classElement.value}">${props.block.details.value == ''? '&#160;': props.block.details.value}</${props.block.type}>`)
	const content		= ref<HTMLDivElement>()

	function onSet () {
		if (content.value && props.block.details.value) {
			let jsonStringify	= JSON.stringify(getObjetData(props.block.type))
			let jsonParse		= JSON.parse(jsonStringify);
			classElement.value	= jsonParse[0].class;

			content.value.innerText = props.block.details.value
		}
	}

	function getObjetData(keyString: string) {
		return Object.values(headingConfig.value).filter((item) => item.element == keyString);
	}

	defineExpose({ onSet })
</script>