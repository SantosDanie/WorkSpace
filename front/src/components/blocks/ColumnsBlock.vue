<template>
	<div ref="container" class="row" :key="props.block.type">
		<div class="column-2" v-for="(block, index) in columns" :key="index">
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, PropType } from 'vue'
	import { Block, BlockType } from '@/utils/types'
	import { v4 as uuidv4 } from 'uuid'

	const columns = ref<object>();
	const headingConfig = {
		[BlockType.Columns2]: {
			placeholder: 'Columns 2',
			class: 'column-2',
		},
		[BlockType.Columns3]: {
			placeholder: 'Columns 3',
			class: 'column-3',
		},
		[BlockType.Columns4]: {
			placeholder: 'Columns 4',
			class: 'column-4',
		},
		// Irrelevant BlockTypes
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

	const container = ref<HTMLDivElement>()

	function onSet () {
		if (container.value && props.block.details.value) container.value.innerText = props.block.details.value
	}

	defineExpose({ onSet })

	// New scripts
	const readonly = ref(false)
	const initialBlok = ref({
		blocks:[{
			id: uuidv4(),
			type: BlockType.Text,
			details: {
				value: 'Hello, World!'
			},
		}],
	})

</script>
