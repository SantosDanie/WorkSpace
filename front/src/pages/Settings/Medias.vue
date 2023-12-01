<template>
	<Dashboard>
		<div class="row p-4">
			<div class="col-12">
				<h1 class="fw-semibold">Medias</h1>
				<form action="" style="max-width: 500px;">
					<div class="input-group mb-3">
						<input type="text" class="form-control" placeholder="Search Thumbnail" @keyup="searchMedia">
						<span class="input-group-text">
							<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
						</span>
					</div>
				</form>
			</div>
			<div class="col-12">
				<div class="gallery-medias">
					<div class="card-thumbnail" v-for="(media, i) in mediasResult" :key="i" @click="modalOpen=!modalOpen; mediaData=media">
						<img :src="getImageUrl(media.path)" :alt="media.title">
					</div>
				</div>
			</div>
		</div>

		<div class="modalMedia" v-if="modalOpen">
			<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-centered">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title fw-medium" id="exampleModalLabel">Details</h5>
							<button type="button" class="btn-close btn-sm" data-bs-dismiss="modal" aria-label="Close" @click="modalOpen=false; moreInfo=false;"></button>
						</div>
						<div class="modal-body">
							<div class="row">
								<div class="col-6">
									<div class="thumbnail-container">
										<img :src="getImageUrl(mediaData.path)" alt="">
									</div>
								</div>
								<div class="col-6" v-if="moreInfo==false">
									<p class="text-sm mb-0"><span class="fw-semibold">Title:</span>			{{ mediaData.title }}</p>
									<p class="text-sm mb-0"><span class="fw-semibold">Uploaded on:</span>	{{ formateDate(mediaData.created_at) }}</p>
									<p class="text-sm mb-0"><span class="fw-semibold">Updated on:</span>	{{ formateDate(mediaData.updated_at) }}</p>
									<form class="pt-3">
										<div class="mb-3">
											<label for="floatingInput">Title</label>
											<div class="input-group input-group-sm">
												<input type="text" class="form-control" v-model="mediaData.title">
											</div>
										</div>

										<div class="mb-3">
											<label for="floatingTextarea" style="height: auto;">Description</label>
											<div class="input-group input-group-sm">
												<textarea class="form-control" style="min-height: 100px;" v-model="mediaData.description"></textarea>
											</div>
										</div>
									</form>
									<button type="button" class="btn btn-sm btn-outline-primary" @click="moreInfo=!moreInfo">More...</button>
									<button type="button" class="btn btn-sm btn-outline-danger ms-2" @click="deleteForm=!deleteForm" v-if="deleteForm==false">Delete</button>
									<form class="mt-4" v-if="deleteForm">
										<label for="floatingInput">
											Write the code 
											<span class="bg-danger text-white p-1 px-2 rounded">{{ mediaData._id }}</span>
											 to delete this image.
										</label>
										<div>
											<div class="input-group input-group-sm">
												<input type="text" class="form-control" :class="{'border-danger': errorCode==true}" @keyup="validateCode">
											</div>
										</div>
										<button type="button" class="btn btn-sm btn-danger mt-2" @click="deleteMedia">Delete</button>
										<button type="button" class="btn btn-sm btn-secondary mt-2 ms-2" @click="deleteForm=!deleteForm">Close Form</button>
									</form>
								</div>
								<div class="col-6" v-else>
									<button type="button" class="btn btn-sm btn-outline-primary mb-3" @click="moreInfo=!moreInfo">
										<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
									</button>

									<table class="table table-sm">
										<thead>
											<tr>
												<th>Name</th>
												<th>Used On:</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td class="text-sm">Page Name</td>
												<td><span class="text-sm p-1 px-2 bg-primary rounded text-white">WorkPage</span></td>
												<td class="d-flex justify-content-end">
													<button class="btn btn-sm btn-outline-primary d-flex">
														<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 256 512">
															<path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/>
														</svg>
													</button>
												</td>
											</tr>
											<tr>
												<td class="text-sm">Page Name</td>
												<td><span class="text-sm p-1 px-2 bg-warning rounded text-dark">WorkList</span></td>
												<td class="d-flex justify-content-end">
													<button class="btn btn-sm btn-outline-primary d-flex">
														<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 256 512">
															<path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/>
														</svg>
													</button>
												</td>
											</tr>
											<tr>
												<td class="text-sm">Page Name</td>
												<td><span class="text-sm p-1 px-2 bg-info rounded text-white">Project</span></td>
												<td class="d-flex justify-content-end">
													<button class="btn btn-sm btn-outline-primary d-flex">
														<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 256 512">
															<path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/>
														</svg>
													</button>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-sm btn-secondary" @click="modalOpen=false; moreInfo=false;">Close</button>
							<button type="button" class="btn btn-sm btn-primary">Save</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Dashboard>
</template>

<script setup lang="ts">
	import { ref, computed, onMounted}	from "vue"
	import { useMediaStore }			from '@/stores/Medias';
	import { useAuthStore }				from '@/stores/auth';
	import Dashboard					from '@/components/Dashboard.vue'
	import { useNotificationStore }		from '@/stores/Notification'

	const NotificationStore			= useNotificationStore();
	const MageStore				= useMediaStore()
	const medias				= ref()
	const mediasResult			= ref()
	const mediaData				= ref()
	const modalOpen				= ref<Boolean>(false)
	const moreInfo				= ref<Boolean>(false)
	const deleteForm			= ref<Boolean>(false)
	const errorCode				= ref<Boolean>(false)
	const deleteCode			= ref<String>('')
	const authStore				= useAuthStore();
	const UserId				= computed(() => authStore.user);
	const id					= UserId.value.id.toString()

	onMounted(() => getImages())
	async function getImages() {
		await MageStore.getMedias(id)
		.then((res: { imageUrl: any; }) => {
			medias.value = res;
			mediasResult.value = res;
		})
		.catch((err: any) => console.log(err));
	}

	function getImageUrl(image: string) {
		const serverUrl = import.meta.env.VITE_API_URI;
		return `${serverUrl}/${image}`;
	}

	function formateDate(timestamp: string) {
		const date		= new Date(timestamp);
		const day		= date.getDate();
		const month		= date.getMonth();
		const year		= date.getFullYear();
		const hours		= date.getHours();
		const minutes	= date.getMinutes();
		const seconds	= date.getSeconds();
		const AMPM		= hours >= 12 ? 'PM' : 'AM';
		const formate	= `${day}/${month+1}/${year} ${hours}:${minutes}:${seconds} ${AMPM}`;
		return formate; 
	}

	function validateCode(e: any) {
		deleteCode.value = e.target.value;
	}

	async function deleteMedia() {
		if(deleteCode.value == mediaData.value._id) {
			await MageStore.deleteMedia(deleteCode.value.toString())
			errorCode.value = false;
			modalOpen.value = false;
			createNotificationMedia()
		} else {
			errorCode.value = true;
		}
	}

	function searchMedia(e: any) {
		let searchString = e.target.value;
		mediasResult.value = medias.value.filter(function(item: { title: string; }) {
			return item.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
		});
	}

	async function createNotificationMedia() {
		const notification = {
			title: 'The thumbnail is removed',
			type: 'media',
			description: `The thumbnail ${mediaData.value.title} is removed`,
			userID: id
		}

		await NotificationStore.createNotification(notification)
		.then(res => console.log(res))
		.catch(err => console.log(err.message))
	}
</script>

<style lang="scss">
	.gallery-medias {
		display: flex;
		flex-wrap: wrap;
		margin-top: 20px;
		.card-thumbnail {
			width: 100%;
			aspect-ratio: 1/1;
			overflow: hidden;
			border: 1px solid gray;
			border-radius: 5px;
			max-width: 90px;
			margin-bottom: 10px;
			margin-right: 10px;
			cursor: pointer;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}

	.modalMedia {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(#000000, 0.5);		
		.modal {
			display: block !important;
			opacity: 1 !important;
		}

		.thumbnail-container {
			width: 100%;
			height: 100%;
			aspect-ratio: 1/0.7;
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}

		.modal-centered {
			margin: 0;
			transform: translate(0, 0) !important;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			width: 100%;
			max-width: 100%;
			.modal-content {
				margin: 15px;
				width: 100%;
				max-width: 1200px;
			}
		}
	}
</style>