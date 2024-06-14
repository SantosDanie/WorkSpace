<template>
	<div class="w-100 py-2">
		<div class="modal-blockImage" v-if="props.block.details.value == ''">
			<button class="btn btn-outline-primary w-100" @click="openModal=true">Upload Image</button>
			<div class="modal-upload-image" v-if="openModal==true">
				<div class="content-modal p-3">
					<button class="btn-close" @click="openModal=false"></button>
					<div class="modal-heading border-bottom pb-3">
						<button class="btn btn-sm btn-outline-primary mr-2" :class="{'active':modal == 'upload'}" @click="modal = 'upload'">Upload</button>
						<button class="btn btn-sm btn-outline-primary" :class="{'active':modal == 'embed'}" @click="modal = 'embed'">Embed Link</button>
					</div>
					<hr/>
					<div class="modal-body">
						<div class="content " v-if="modal=='upload'">
							<p>Working...</p>
							<!-- <label for="openFile" class="btn btn-primary w-100">Upload File</label>
							<input type="file" id="openFile" class="d-none" @input="uploadImage"/> -->
						</div>
						<div class="content" v-else-if="modal=='embed'">
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

			<div class="image-dropdown">
				<button class="btn btn-light btn-sm" @click="openImageOption = !openImageOption">
					<svg xmlns="http://www.w3.org/2000/svg" width="5px" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
				</button>
				<div class="content-image-dropdown" :class="{'d-none': openImageOption==false}">
					<ul class="p-0 m-0">
						<li @click="emit('delete')">Delete</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, PropType }		from "vue";
	import { BlockImage }			from "@/utils/types"
	
	const containerImage	= ref();
	const startX			= ref<number>(0);
	const startWidth		= ref<number>(0);
	const openModal			= ref<boolean>(false);
	const modal				= ref<string>('upload');
	const inputEmbed		= ref<HTMLInputElement>();
	const imageUrl			= ref<string|undefined>('');
	const openImageOption	= ref<boolean>(false);
	const props				= defineProps({
		block:		{ type: Object as PropType<BlockImage>, required: true },
		readonly:	{ type: Boolean, default: false },
	});
	const emit				= defineEmits(['delete']);
	

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
			props.block.details.value = inputEmbed.value?.value;
		}
	}

	function uploadImage(event: any) {
		event.preventDefault();
		const imageFile = URL.createObjectURL(event.target.files[0]);
		if (imageFile) {
			openModal.value				= false;
			props.block.details.value	= imageFile;
		}
	}
	
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
				props.block.details.width = '100%';
			} else if((startWidth.value + e.clientX - startX.value) < 50) {
				containerImage.value.style.maxWidth = '60px';
				props.block.details.width = '60px';
			} else {
				containerImage.value.style.maxWidth = (startWidth.value + e.clientX - startX.value) + 'px';
				props.block.details.width = (startWidth.value + e.clientX - startX.value) + 'px';
			}
		}
	}

	function stopDrag(e: any) {
		document.documentElement.removeEventListener('mousemove', doDrag, false);
		document.documentElement.removeEventListener('mouseup', stopDrag, false);
	}

	function checkImage(url: any) {
		let image = new Image();
		image.onload = function() {
			// if (this.width > 0) {}
			console.log("image exists");
			return true;
		}
		image.onerror = function() {
			console.log("image doesn't exist");
			return false;
		}
		image.src = url;
	}

	function onSet() {
		if(checkImage(props.block.details.value) == undefined) { props.block.details.value = ''; }
	}

	defineExpose({ onSet })
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
		&:hover .image-dropdown { opacity: 1; }
		&:hover .resizing-image-right { opacity: 1; }
		img { width: 100%; }

		.image-dropdown {
			top: 5px;
			right: 10px;
			opacity: 0;
			position: absolute;
			transition: 300ms;
			.content-image-dropdown {
				padding: 5px;
				border-radius: 5px;
				position: absolute;
				top: calc(100% + 2px);
				background-color: #fff;
				box-shadow: 0 0 3px 0 gray;
				li {
					display: block;
					cursor: pointer;
				}
			}
		}
	}
</style>