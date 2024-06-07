<template>
	<Editor v-model="props.block.details.value" class="bullet-block py-2"/>
</template>

<script setup lang="ts">
	import { VueDraggableNext as draggable } from 'vue-draggable-next';
	import { PropType }	from 'vue'
	import { Block }	from '@/utils/types'
	import Editor		from "@/components/Editor/Elements/Editor.vue"

	const props = defineProps({
		block:		{ type: Object as PropType<Block>, required: true },
		readonly:	{ type: Boolean, default: false },
	})
</script>

<style lang="scss">
	.bullet-block {
		display: flex;
		&:before {
			top: 6px;
			content: "";
			width: 12px;
			height: 12px;
			display: block;
			min-width: 12px;
			min-height: 12px;
			border-radius: 50%;
			position: relative;
			margin-right: 10px;
			background-color: #464646;
		}
	}
</style>