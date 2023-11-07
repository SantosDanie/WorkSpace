<template>
	<div ref="content" :key="props.block.type"
		:contenteditable="!props.readonly"
		@blur="props.block.details.value=content?.innerText"
		:block-type="props.block.type"
		:class="headingConfig[props.block.type]?.class"
		:data-ph="headingConfig[props.block.type]?.placeholder"
		>
		{{ props.block.details.value }}
	</div>
</template>

<script setup lang="ts">
	import { ref, PropType }	from 'vue'
	import { Block, BlockType }	from '@/utils/types'

	const headingConfig = {
		[BlockType.H1]: {
			placeholder: 'Heading 1',
			class: 'fw-bold text-dark h1 m-0',
		},
		[BlockType.H2]: {
			placeholder: 'Heading 2',
			class: 'fw-bold text-dark h2 m-0',
		},
		[BlockType.H3]: {
			placeholder: 'Heading 3',
			class: 'fw-bold text-dark h3 m-0',
		},
		[BlockType.H4]: {
			placeholder: 'Heading 4',
			class: 'fw-bold text-dark h4 m-0',
		},
		[BlockType.H5]: {
			placeholder: 'Heading 5',
			class: 'fw-bold text-dark h5 m-0',
		},
		[BlockType.H6]: {
			placeholder: 'Heading 6',
			class: 'fw-bold text-dark h6 m-0',
		},
		[BlockType.Text]: null,
		[BlockType.Divider]: null,
		[BlockType.Quote]: null,
	}

	const props = defineProps({
		block: {
			type: Object as PropType<Block>,
			required: true,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
	})

	const content = ref<HTMLDivElement>()

	function onSet () {
		if (content.value && props.block.details.value) content.value.innerText = props.block.details.value
	}

	defineExpose({ onSet })
</script>