<template>
	<div class="check-container"  :class="{'text-decoration-line-through': isChecked}">
		<Editor
		v-if="!props.readonly"
		v-model="props.block.details.value"
		@keyup.enter.capture.prevent="() => {}"
		@keydown.enter.capture.prevent="() => {}"/>
		
		<div v-else v-html="markdownToHtml(props.block.details.value as string)"></div>
		<label class="checkbox">
			<input type="checkbox" ref="inputElement" @click="validateIsCheck" v-bind="isChecked">
		</label>
	</div>
</template>

<script setup lang="ts">
	import { PropType, ref }	from "vue";
	import { BlockCheckList }	from "@/utils/types"
	import { markdownToHtml }	from '@/utils/utils'
	import Editor				from "@/components/elements/Editor.vue"

	const isChecked		= ref<Boolean>(false)
	const inputElement	= ref<HTMLFormElement>()
	const props			= defineProps({
		block: {
			type: Object as PropType<BlockCheckList>,
			required: true,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
	});

	if(props.block.details.check != undefined) {
		isChecked.value = props.block.details.check;
	}

	function validateIsCheck() {
		if(isChecked.value == false) {
			isChecked.value = true;
			props.block.details.check = true;
		} else {
			isChecked.value = false;
			props.block.details.check = false;
		}
	}
</script>