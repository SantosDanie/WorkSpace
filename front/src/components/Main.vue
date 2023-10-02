<template>
	<div class="flex">
		<div class="sticky top-0 h-screen overflow-y-auto bg-neutral-50">
			<Markdown :page="page" />
		</div>
		<div class="shrink-0 px-24 w-100 mx-auto box-border">
			<Lotion :page="page" :readonly="readonly" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import { BlockType } from '@/utils/types'
	import Lotion from './Lotion.vue'
	import Markdown from './Markdown.vue'
	import { v4 as uuidv4 } from 'uuid'

	const readonly = ref(false)

	const page = ref({
		name: 'First Page - edited',
		blocks: [{
			id: uuidv4(),
			type: BlockType.H1,
			details: { value: 'Get Started' },
		}, {
			id: uuidv4(),
			type: BlockType.Divider,
			details: {},
		}, {
			id: uuidv4(),
			type: BlockType.Text,
			details: { value: '**Lorem Ipsum** *is simply* dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
		}]
	});
</script>
