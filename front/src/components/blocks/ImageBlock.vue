<template>
	<div
		ref="content"
		class="imageblock"
		:key="props.block.type"
		:block-type="props.block.type">
		<div class="fileInput" :class="{'hasImage': props.block.details.value}">
			<input type="file" @change="loadImage" accept="image/png, image/gif, image/jpeg, image/jpg">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
				<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
				<path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
			</svg>
			Add Image
		</div>
		<img :src="props.block.details.value">
		<div class="imageSize" draggable="true" @dragstart="dividerDragStart" @drag="lrDividerDrag" :style="[`left:${width};`, lrDividerStyles]"></div>
	</div>
</template>

<script setup lang="ts">
	import { PropType, ref }	from "vue"
	import { Block }			from "@/utils/types"

	const content		= ref<HTMLBodyElement>()
	const width			= ref<number>()
	const right			= ref<number>()
	const left			= ref<number>()
	const lrDividerPos	= ref<number>()
	const props			= defineProps({
		block: {
			type: Object as PropType<Block>,
			required: true,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
	});

	setTimeout(()	=> {
		const rect	= content.value.getBoundingClientRect();
		left.value	= rect.left;
		right.value	= rect.right - 5;
		width.value	= (rect.width >= lrDividerPos.value) ? rect.width : lrDividerPos.value;
	}, 50)

	async function loadImage(event: { target: { files: any[]; }; }) {
		const item = event.target.files[0];
		if(item) {
			const url = URL.createObjectURL(item);
			props.block.details = {
				value: url,
				name: item.name,
				size: item.size,
				type: item.type
			}
		}
	}

	// 
	function dividerDragStart (e: { dataTransfer: { setDragImage: (arg0: HTMLImageElement, arg1: number, arg2: number) => void; }; }) {
		e.dataTransfer.setDragImage(new Image, 0, 0);
	}

	function lrDividerStyles() {
		if (lrDividerPos.value) {
			return { left: convertWidth() + '%' };
		}
		return {};
	}

	function lrDividerDrag (e: { clientX: number; }) {
		if (e.clientX >  left.value && e.clientX <  right.value) {
			lrDividerPos.value = e.clientX - left.value;
		}
	}

	function convertWidth() {
		const rect	= content.value.getBoundingClientRect();
		let newWidth = lrDividerPos.value / rect.width * 100;
		return newWidth.toFixed(2);
	}
</script>

<style lang="scss">
	.imageblock {
		position: relative;
		top: 0;
		left: 0;
		margin-top: 5px;
		.fileInput {
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			input {
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
				opacity: 0;
				cursor: pointer;
			}
		}

		.hasImage {
			padding: 10px;
			color: rgb(197, 197, 197);
			opacity: 0;
			svg { fill: rgb(197, 197, 197); }
		}
		&:hover .hasImage { opacity: 1; }
	}

	.imageSize {
		position: absolute;
		// left: 10px;
		width: 5px;
		top: 2px;
		height: calc(100% - 4px);
		background-color: red;
		border-radius: 50px;
		cursor: col-resize;
	}
</style>