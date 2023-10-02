<template>
	<div ref="content" :key="props.block.type"
		:contenteditable="!props.readonly" spellcheck="false"
		@blur="props.block.details.value=content?.innerText"
		class="focus:outline-none focus-visible:outline-none w-50 py-1.5 font-semibold"
		:block-type="props.block.type"
		>
		<!-- :class="headingConfig[props.block.type]?.class"
		:data-ph="headingConfig[props.block.type]?.placeholder" -->
		{{ props.block.details.value }}
	</div>
</template>

<script setup lang="ts">
	import { ref, PropType } from 'vue'
	import { BlockImage, BlockType } from '@/utils/types'

	const headingConfig = {
		[BlockType.Image]: {
			placeholder: 'Image',
			class: 'image',
		},
		
		// Irrelevant BlockTypes
		[BlockType.Text]: null,
		[BlockType.Divider]: null,
		[BlockType.Quote]: null,
	}

	const props = defineProps({
		block: {
			type: Object as PropType<BlockImage>,
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

	defineExpose({ onSet, })
</script>
