<template>
	<Editor v-model="props.block.details.value"/>
</template>
  
<script setup lang="ts">
	import { PropType }	from 'vue';
	import { Block }	from '@/utils/types';
	import Editor		from "@/components/Editor/Elements/Editor.vue";

	const props = defineProps({
		block:		{ type: Object as PropType<Block>, required: true },
		readonly:	{ type: Boolean, default: false }
	})
</script>