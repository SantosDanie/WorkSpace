<template>
	<div class="numberList-container" :data-num="numberBlock">
		<Editor v-if="!props.readonly" v-model="props.block.details.value" @keyup.enter.capture.prevent="() => {}" @keydown.enter.capture.prevent="() => {}"/>
		<div v-else v-html="markdownToHtml(props.block.details.value as string)"></div>
		<span class="num fw-bold">{{ numberBlock }}.</span>
	</div>
</template>

<script setup lang="ts">
	import { PropType, onMounted, ref }	from "vue";
	import { BlockNumList }				from "@/utils/types"
	import { markdownToHtml }			from '@/utils/utils'
	import Editor						from "@/components/elements/Editor.vue"

	const numberBlock = ref<Number>(1);
	const props = defineProps({
		block:		{ type: Object as PropType<BlockNumList>, required: true },
		readonly:	{ type: Boolean, default: false },
	});

	onMounted(() => {
		setInterval(() => {
			const prevElement = document.querySelector(`#block-${props.block.id}`);
			if(prevElement != null) {
				const typePrevBlock = prevElement.previousElementSibling;
				if(typePrevBlock != null) {
					let num = typePrevBlock.querySelector('.numberList-container');
					if(num != null) {
						let number = num.getAttribute('data-num');
						if(number != null) {
							numberBlock.value = parseInt(number) + 1;
							props.block.details.number = parseInt(number) + 1;
						}
					} else {
						numberBlock.value = 1;
						props.block.details.number =  1;
					}
				}
			}
		})
	});
</script>