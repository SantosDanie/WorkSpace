<template>
	<div>
		<!-- ref="content"
		class="py-1"
		:key="props.block.type"
		:block-type="props.block.type"
		@click="openModal = true">
		<div class="dragDiv">Image png / jpeg / jpg / webp</div>
		 <img :src="props.block.details.value">
		<div class="openModalImage" v-if="openModal === true">
			<div class="container-modalImage">
				<div class="head-modal d-flex flex-wrap justify-content-center align-items-center">
					<button class="btn btn-primary btn-sm mx-1" @click="changeContent = 'url'">URL</button>
					<button class="btn btn-primary btn-sm mx-1" @click="changeContent = 'uploaded'">Upload</button>
					<button class="btn btn-primary btn-sm mx-1" @click="changeContent = 'gallery'">Gallery</button>
				</div>
				<hr>
				<div class="content-modal" v-if="changeContent == 'url'">
					<div class="image-url">
						<div class="mb-3">
							<label for="basic-url" class="form-label">URL</label>
							<div class="input-group">
								<span class="input-group-text" id="basic-addon3">URL</span>
								<input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
							</div>
						</div>
					</div>
				</div>
				<div class="content-modal" v-else-if="changeContent == 'uploaded'">
					<div class="image-upload">
						<input class="inputFile" type="file" @change="fileSelected" enctype="multipart/form-data" accept="image/png, image/gif, image/jpeg, image/jpg, image/webp">
						Upload Image
					</div>
				</div>
				<div class="content-modal" v-else-if="changeContent == 'gallery'">
					<div class="image-gallery">
						<div
							class="media"
							v-for="media in medias"
							:key="media"
							:class="{'selected': mediaSelect == media._id}"
							@click="selectImage(media._id); openModal = false;">
							<img :src="getImageUrl(media.path)" :alt="media.title">
						</div>
					</div>
				</div>
			</div>
		</div> -->
	</div>
</template>

<script setup lang="ts">
	// import { PropType, ref, computed, onMounted}	from "vue"
	// import { Block }			from "@/utils/types"
	// import { useMediaStore }	from '@/stores/Medias';
	// import { useAuthStore } 	from '@/stores/auth';

	// const content		= ref<HTMLBodyElement>()
	// const openModal		= ref<Boolean>(false)
	// const changeContent	= ref<string>('url')
	// const MageStore		= useMediaStore()
	// const authStore		= useAuthStore();
	// const UserId		= computed(() => authStore.user);
	// const id			= UserId.value.id.toString()
	// const medias		= ref();
	// const mediaSelect	= ref();
	// const props			= defineProps({
	// 	block: {
	// 		type: Object as PropType<Block>,
	// 		required: true,
	// 	},
	// 	readonly: {
	// 		type: Boolean,
	// 		default: false,
	// 	},
	// });

	// // const emit
	// function fileSelected(evt: any) {
	// 	evt.preventDefault()
	// 	let url		= URL.createObjectURL(evt.target.files[0]);
	// 	let name	= evt.target.files[0].name;
	// 	let type	= evt.target.files[0].type;

	// 	let imageFile	= evt.target.files[0];
	// 	let objectMedia = {
	// 		title: name,
	// 		description: '',
	// 		userId: id,
	// 		image: imageFile
	// 	}
	// 	saveImage(objectMedia);
	// }
	
	// async function saveImage(fileImage: any) {
	// 	await MageStore.createMedia(fileImage)
	// 	.then((res: { imageUrl: any; }) => {
	// 		changeContent.value = 'gallery';
	// 		mediaSelect.value = res.media._id;
	// 		getImages();
	// 	})
	// 	.catch((err: any) => console.log(err));
	// }

	// onMounted(() => getImages())
	// async function getImages() {
	// 	await MageStore.getMedias(id)
	// 	.then((res: { imageUrl: any; }) => medias.value = res)
	// 	.catch((err: any) => console.log(err));
	// }

	// function getImageUrl(image: string) {
	// 	const serverUrl = import.meta.env.VITE_API_URI;
	// 	return `${serverUrl}${image}`;
	// }

	// function selectImage(imageId: string) {
	// 	mediaSelect.value = medias.value.filter((item: { _id: string; }) => item._id = imageId);
	// 	props.block.details.value = mediaSelect.value.path;
	// }

	// function onSet () {
	// 	if (content.value && props.block.details.value) {
	// 		content.value.innerText = '';
	// 	}
	// }
	// defineExpose({ onSet })
</script>

<style lang="scss">
	.dragDiv {
		border: 1px solid gray;
		transition-duration: 300ms;
		border-radius:  5px;
		text-align: center;
		cursor: pointer;
		padding: 20px;
		width: 100%;
		position: relative;
		&:hover { background-color: rgba(#000, 0.1); }
	}

	.openModalImage {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(#000000, 0.3);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 15px;
		z-index: 5;
		.container-modalImage {
			padding: 15px;
			width: 100%;
			max-width: 650px;
			background-color: white;
			border-radius: 5px;
		}

		.content-modal {
			.image-upload, .image-url, .image-gallery {
				padding: 20px;
				border: 3px dashed rgb(198, 198, 198);
				border-radius: 5px;
				text-align: center;
				width: 100%;
				max-height: 150px;
				min-height: 200px;
				position: relative;
			}

			.image-gallery {
				border: 1px solid rgb(198, 198, 198);
			}

			.inputFile {
				position: absolute;
				top: 0;
				left: 0;
				opacity: 0;
				width: 100%;
				height: 100%;
				cursor: pointer;
			}
		}
	}

	.image-gallery {
		display: flex;
		padding: 15px !important;
		max-height: 100% !important;
		flex-wrap: wrap;
		.media {
			width: 93px;
			height: 93px;
			margin-right: 5px;
			margin-bottom: 5px;
			box-shadow:0 0 0px 1px #c0c0c0;
			cursor: pointer;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}

			&.selected{
				box-shadow:inset 0 0 0px 1px #3f49cf;
			}
		}
	}
</style>