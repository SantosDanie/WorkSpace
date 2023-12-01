<template>
	<Dashboard>
		<div class="px-4">
			<div class="row pb-3 pt-5 border-bottom">
				<div class="col-12">
					<div class="header-project d-flex justify-content-between align-items-end">
						<h2>WorkPage</h2>
						<button class="btn btn-primary btn-sm" @click="createNewPage">Create Page</button>
					</div>
					<div class="filters-search mt-5 d-flex w-100 justify-content-between">
						<form class="form w-100" style="max-width: 400px;">
							<div class="input-group">
								<input type="text" @keyup="searchPage" class="form-control" placeholder="Search by title" aria-label="Recipient's username" aria-describedby="basic-addon2">
								<span class="input-group-text" id="basic-addon2">Search</span>
							</div>
						</form>

						<div class="container-btn-orders">
							<button class="btn btn-sm btn-primary me-1" @click="viewPages = 'table'" :class="{ 'btn-selected': viewPages == 'table'}">
								<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path fill="#fff" d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
							</button>
							<button class="btn btn-sm btn-primary ms-1" @click="viewPages = 'card'" :class="{ 'btn-selected': viewPages == 'card'}">
								<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path fill="#fff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="row mt-5">
				<div class="col-12" v-if="viewPages !== 'table'">
					<div v-for="(item, index) in pagesResult" :key="index" class="px-3 py-3">
						<div class="d-flex flex-wrap justify-content-between mb-1">
							<h5 class="fw-bold d-flex align-items-center">
								<router-link :to="{name: 'workPage', params: { id: item._id }}">{{ item.title ? item.title : 'Untitled' }}</router-link>
								<span class="text-xs bg-primary-subtle border p-1 rounded-2 ms-2">Private</span>
							</h5>
							<div class="d-block">
								<span class="text-xs d-block text-secondary mb-1">
									<svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 448 512"><path fill="#858796" d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"/></svg>
									Create: {{ formateDate(item.createdAt) }}
								</span>
								<span class="text-xs d-block text-secondary mb-1">
									<svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 448 512"><path fill="#858796"  d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
									Updated: {{ formateDate(item.updatedAt) }}
								</span>
							</div>
						</div>
						<p class="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla distinctio eum modi exercitationem qui ea illum vel excepturi. Delectus nobis consectetur quam possimus velit mollitia ducimus quas explicabo iusto perspiciatis?</p>
						<div class="d-flex">
							<button class="btn btn-xs btn-primary me-1" @click="getWorkPage(item._id)">
								<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path fill="#fff" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
							</button>
							<button class="btn btn-xs btn-primary disabled">
								<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path fill="#fff" d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
							</button>
						</div>
						<hr class="border-1 border-dark mb-0">
					</div>
				</div>
				<div class="col-12" v-else>
					<table  class="table table-sm">
						<thead>
							<tr>
								<th>Name</th>
								<th>Status</th>
								<th>Created</th>
								<th>Updated</th>
								<td style="width: 28px; max-width: 28px;"></td>
								<td style="width: 28px; max-width: 28px;"></td>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item, index) in pagesResult" :key="index">
								<td class="fw-bold text-dark"><router-link :to="{name: 'workPage', params: { id: item._id }}">{{ item.title ? item.title : 'Untitled' }}</router-link></td>
								<td><span class="text-xs bg-primary-subtle border p-1 rounded-2 ms-2">Private</span></td>
								<td class="text-sm text-dark">{{ formateDate(item.createdAt) }}</td>
								<td class="text-sm text-dark">{{ formateDate(item.updatedAt) }}</td>
								<td class="td-hover" @click="getWorkPage(item._id)">
									<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
								</td>
								<td class="td-hover" @click="router.push({ name: 'settingsPage', params: { id: item._id } })">
									<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="bg-modal" v-if="previewWorkPageModal == true">
			<div class="modal d-block" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				<div class="modal-dialog modal-xl">
					<div class="modal-content">
						<div class="modal-header">
							<h2 class="modal-title fs-6" id="staticBackdropLabel">Preview Page</h2>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="previewWorkPageModal=false; preloader='';"></button>
						</div>
						<div class="modal-body">
							<div class="preload-page" v-if="preloader == ''">
								<div class="preloader">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
										<circle fill="#4e88e0" stroke="#4e88e0" stroke-width="15" r="15" cx="40" cy="65">
											<animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
										</circle>
										<circle fill="#4e88e0" stroke="#4e88e0" stroke-width="15" r="15" cx="100" cy="65">
											<animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
										</circle>
										<circle fill="#4e88e0" stroke="#4e88e0" stroke-width="15" r="15" cx="160" cy="65">
											<animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
										</circle>
									</svg>
								</div>
							</div>
							<Lotion :page="page" :readonly="readonly" v-else-if="preloader == 'success'"/>
							<div class="error-load text-center pt-5" v-else-if="preloader == 'error'">
								<svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
								<h4 class="text-secondary fw-bold mt-4">Error loading page</h4>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary btn-sm" @click="previewWorkPageModal=false; preloader='';">Close</button>
							<router-link class="btn btn-primary btn-sm" :to="{name: 'workPage', params: { id: pageSelected }}">Full Page</router-link>
							<button type="button" class="btn btn-danger disabled btn-sm" title="Working">Delete</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Dashboard>
</template>

<script setup lang="ts">
	import { ref, computed, onMounted }	from 'vue';
	import { useRouter }		from 'vue-router';
	import { usePageStore }		from '@/stores/Page';
	import { useAuthStore } 	from '@/stores/auth';
	import Dashboard			from '@/components/Dashboard.vue';
	import { BlockType }		from '@/utils/types';
	import Lotion				from '@/components/Lotion.vue'
	import { v4 as uuidv4 }		from 'uuid';

	const viewPages		= ref<string>('table')
	const PageStore		= usePageStore();
	const router		= useRouter();
	const authStore		= useAuthStore();
	const UserId		= computed(() => authStore.user);
	const id			= UserId.value.id.toString();
	const pages			= ref()
	const pagesResult	= ref()
	const page			= ref({
		title: '',
		blocks: [
			{
				id: uuidv4(),
				type: BlockType.Text,
				details: { value: '' }
			}
		],
		settings: null,
		userId: id
	});

	const previewPage	= ref(page);
	const readonly		= ref(true);
	const preloader		= ref<string>('');
	const pageSelected	= ref<string>('');
	const previewWorkPageModal=ref<Boolean>(false);
	onMounted(() => getPages());

	async function createNewPage() {
		await PageStore.createPage(page.value)
		.then(res	=> router.replace({name: "workPage", params: { id: res.pageId }}) )
		.catch(err	=> console.log(err.message));
	}
	
	async function getPages() {
		await PageStore.getPages(id)
		.then(res	=> {
			pages.value			= res.pages;
			pagesResult.value	= res.pages;
		})
		.catch(err	=> console.log(err.message));
	}

	async function getWorkPage(pageId: string) {
		previewWorkPageModal.value = true;
		pageSelected.value = pageId;
		await PageStore.getPage(pageId)
		.then(res => {
			preloader.value = 'success';
			previewPage.value = res.page;
		})
		.catch(error => preloader.value = 'error');
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

	function searchPage(e: any) {
		let searchString = e.target.value;
		pagesResult.value = pages.value.filter(function(item: { title: string; }) {
			return item.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
		});
	}
</script>

<style lang="scss">
	.btn-purple { background-color: #190482 !important; }
	.btn-skyblue  { background-color: #40746d !important; }

	.btn-xs {
		display: grid !important;
		font-size: 16px;
		padding: 6px 8px !important;
	}
	
	.btn-selected {
		color: #fff;
		background-color: #2e59d9;
		border-color: #2653d4;
		box-shadow: 0 0 0 0.2rem rgba(105,136,228,.5);
	}

	// table
	.td-hover {
		cursor: pointer;
	}
	.td-hover path {
		fill: rgba(black, 0.8);
	}
	.td-hover:hover {
		background-color: #4e73df;
		border-radius: 5px;
		path { fill: #fff; }
	}
	.bg-modal {
		position: fixed;
		width: 100%;
		height: 100%;
		display: block;
		top: 0;
		left: 0;
		background-color: rgba(#000000, 0.5);
		color: #464646;
		.group .menu-tooltip {
			opacity: 0;
			cursor: default;
		}

		.modal-body {
			max-height: 500px;
			overflow: hidden;
		}
	}
</style>