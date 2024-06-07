<template>
	<div class="w-100">
		<div class="modal-blockImage" v-if="props.block.details.value == ''">
			<button class="btn btn-outline-primary w-100" @click="openModal=true">Upload Image</button>
			<div class="modal-upload-image" v-if="openModal==true">
				<div class="content-modal p-3">
					<button class="btn-close" @click="openModal=false"></button>
					<div class="modal-heading border-bottom pb-3">
						<button class="btn btn-sm btn-outline-primary mr-2" :class="{'active':modal == 'upload'}" @click="modal = 'upload'">Upload</button>
						<button class="btn btn-sm btn-outline-primary" :class="{'active':modal == 'link'}" @click="modal = 'link'">Embed Link</button>
					</div>
					<hr/>
					<div class="modal-body">
						<div class="content " v-if="modal=='upload'">
							<button class="btn btn-primary w-100">Upload File</button>
						</div>
						<div class="content" v-else-if="modal=='link'">
							<input type="url" placeholder="URL" class="mb-3" ref="inputEmbed">
							<button class="btn btn-sm btn-primary m-auto" @click="EmbedImage">Embed Image</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="blockImage" ref="containerImage" v-else-if="props.block.details.value != ''">
			<img :src="props.block.details.value">
			<div class="resizing-image-right" @mousedown="initDrag"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, PropType }		from "vue";
	import { BlockImage, Block }	from "@/utils/types"
	
	const openModal			= ref<boolean>(false);
	const modal				= ref<string>('upload');
	const containerImage	= ref();
	const inputEmbed		= ref<HTMLInputElement>();
	const imageUrl			= ref<string|undefined>('');
	const props				= defineProps({
		block:		{ type: Object as PropType<BlockImage>, required: true },
		readonly:	{ type: Boolean, default: false },
	});

	setTimeout(() => {
		if(containerImage.value != null) {
			containerImage.value.style.maxWidth = props.block.details.width;
		}
	});

	function EmbedImage(e: any) {
		e.preventDefault();
		if(inputEmbed.value?.value != '') {
			imageUrl.value = inputEmbed.value?.value;
			openModal.value = false;
		}
	}

	// new code
	const startX		= ref<number>(0);
	const startWidth	= ref<number>(0);

	function initDrag(e: any) {
		startX.value = e.clientX;
		if(containerImage.value != null && document.defaultView) {
			startWidth.value = parseInt(document.defaultView.getComputedStyle(containerImage.value).width, 10);
		}
		document.documentElement.addEventListener('mousemove', doDrag, false);
		document.documentElement.addEventListener('mouseup', stopDrag, false);
	}

	function doDrag(e: any) {
		if(containerImage.value != null && document.defaultView && containerImage.value.parentElement) {
			let maxWidth = parseInt(document.defaultView.getComputedStyle(containerImage.value.parentElement).width, 10);
			if((startWidth.value + e.clientX - startX.value) > maxWidth-1) {
				containerImage.value.style.maxWidth = '100%';
			} else if((startWidth.value + e.clientX - startX.value) < 50) {
				containerImage.value.style.maxWidth = '60px';
			} else {
				containerImage.value.style.maxWidth = (startWidth.value + e.clientX - startX.value) + 'px';
			}
		}
	}

	function stopDrag(e: any) {
		document.documentElement.removeEventListener('mousemove', doDrag, false);
		document.documentElement.removeEventListener('mouseup', stopDrag, false);
	}
</script>

<style lang="scss">
	.modal-upload-image {
		top: 50%;
		left: 50%;
		width: 100%;
		z-index: 10;
		height: 100%;
		padding: 10px 0;
		position: fixed;
		background: rgba(#000, 0.3);
		transform: translate(-50%, -50%);
		.content-modal {
			top: 50%;
			left: 50%;
			width: 500px;
			min-height: 200px;
			position: absolute;
			border-radius: 5px;
			background-color: #fff;
			transform: translate(-50%, -50%);
			.btn-close {
				top: 5px;
				right: 5px;
				width: 10px;
				height: 10px;
				position: absolute;
			}

			.content {
				display: flex;
				flex-direction: column;
			}
		}
	}

	.blockImage {
		width: 100%;
		padding: 10px 0;
		position: relative;

		.resizing-image-right {
			top: 50%;
			right: 3px;
			width: 5px;
			opacity: 0;
			height: 100%;
			max-height: 60px;
			transition: 300ms;
			position: absolute;
			border-radius: 5px;
			cursor: col-resize;
			transform: translateY(-50%);
			box-shadow: 0 0 0 1px #fff;
			background-color: rgba(#000, 0.5);
		}

		&:hover .resizing-image-right { opacity: 1; }
	}
</style>