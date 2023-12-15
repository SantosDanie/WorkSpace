<template>
	<Editor v-if="!props.readonly" v-model="props.block.details.value" class="callout-container" />
	<div v-else v-html="markdownToHtml(props.block.details.value as string)" class="callout-container"></div>
</template>

<script setup lang="ts">
	import { PropType }			from "vue";
	import { Block }			from "@/utils/types"
	import { markdownToHtml }	from '@/utils/utils'
	import Editor				from "@/components/elements/Editor.vue"

	const props = defineProps({
		block: {
			type: Object as PropType<Block>,
			required: true,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
	});
</script>