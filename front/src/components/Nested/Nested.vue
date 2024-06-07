<template>
	<draggable class="dragArea" tag="ul" :list="tasks" :group="{ name: 'g1' }" item-key="name">
		<li v-for="block, index in tasks" :key="index">
			<p>{{ block.name }} = level {{ level }}</p>
			<nested-draggable v-if="level < maxLevel" :tasks="block.tasks" :level="level+1"/>
		</li>
	</draggable>
</template>

<script lang="ts">
	import { VueDraggableNext as draggable } from 'vue-draggable-next'

	export default {
		props: {
			tasks:		{ required: true, type: Array },
			level:		{ default: 1, type: Number },
			maxLevel:	{ default: 0, type: Number },
		},
		components: { draggable },
		name: "nested-draggable"
	};
</script>

<style scoped>
	.dragArea {
		min-height: 50px;
		outline: 1px dashed;
	}
</style>