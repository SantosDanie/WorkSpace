<template>
	<Dashboard>
		<div class="px-4">
			<div class="row pb-3 pt-5">
				<div class="col-12">
					<div class="header-project d-flex align-items-center">
						<h2 class="mb-0 pr-3">WorkPage</h2>
						<button class="btn btn-primary btn-sm" @click="createNewPage">Create Page</button>
					</div>
					<div class="filters-search mt-5 d-flex w-100 justify-content-end">
						<form class="form w-100" style="max-width: 400px;">
							<div class="input-group">
								<input type="text" @keyup="searchPage" class="form-control" placeholder="Search by title" aria-label="Recipient's username" aria-describedby="basic-addon2">
								<span class="input-group-text" id="basic-addon2">Search</span>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div class="rows">
				<div class="col-12">
					<table class="table table-sm table-hover">
						<thead>
							<tr class="text-sm">
								<th>Name</th>
								<th>Comments</th>
								<th>Date</th>
								<th>Last edited time</th>
								<td style="width: 25px;"></td>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item, index) in pagesResult" :key="index">
								<td class="fw-bold text-dark">
									<router-link :to="{name: 'workPage', params: { id: item._id }}">{{ item.title ? item.title : 'Untitled' }}</router-link>
									<span class="text-xs bg-primary-subtle border p-1 ml-2 rounded-2">Privates</span>
								</td>
								<td>0</td>
								<td class="text-sm text-dark">{{ formateDate(item.createdAt) }}</td>
								<td class="text-sm text-dark">{{ formateDate(item.updatedAt) }}</td>
								<td class="td-hover" @click="getWorkPage(item._id)">
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
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-header">
							<h2 class="modal-title fs-6" id="staticBackdropLabel">Preview Page</h2>
							<button type="button" class="btn-close btn-sm" data-bs-dismiss="modal" aria-label="Close" @click="previewWorkPageModal=false; preloader='';"></button>
						</div>
						<div class="modal-body">
							<button type="button" class="btn btn-danger btn-sm" title="Working">Delete</button>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary btn-sm" @click="previewWorkPageModal=false; preloader='';">Close</button>
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
	import { v4 as uuidv4 }		from 'uuid';

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
	.td-hover { cursor: pointer; }
	.td-hover path { fill: rgba(black, 0.8); }
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