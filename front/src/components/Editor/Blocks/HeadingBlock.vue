<template>
	<div ref="content" :key="props.block.type"
		:contenteditable="!props.readonly" spellcheck="false"
		@blur="props.block.details.value=content?.innerText"
		class="mb-1 block-heading focus:outline-none focus-visible:outline-none py-0 w-full font-semibold"
		:block-type="props.block.type"
		>
		<!-- :class="headingConfig[props.block.type]?.class"
		:data-ph="headingConfig[props.block.type]?.placeholder" -->
		{{ props.block.details.value }}
	</div>
</template>

<script setup lang="ts">
	import { ref, PropType }	from 'vue'
	import { Block, BlockType }	from '@/utils/types'
	
	const headingConfig = {
		[BlockType.H1]: { placeholder: 'Heading 1', class: 'font-medium' },
		[BlockType.H2]: { placeholder: 'Heading 2', class: 'font-medium' },
		[BlockType.H3]: { placeholder: 'Heading 3', class: 'font-medium' },
		[BlockType.H4]: { placeholder: 'Heading 4', class: 'font-medium' },
		[BlockType.H5]: { placeholder: 'Heading 5', class: 'font-medium' },
		[BlockType.H6]: { placeholder: 'Heading 6', class: 'font-medium' },
		[BlockType.Text]:		null,
		[BlockType.Divider]:	null,
		[BlockType.Quote]:		null,
	}
	
	const props = defineProps({
		block:		{ type: Object as PropType<Block>, required: true },
		readonly:	{ type: Boolean, default: false },
	})
	
	const content = ref<HTMLDivElement>()
	
	function onSet() {
		if (content.value && props.block.details.value) content.value.innerText = props.block.details.value
	}
	
	defineExpose({ onSet })
</script>