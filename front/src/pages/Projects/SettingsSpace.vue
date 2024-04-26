<template>
	<Dashboard>
		<div class="header-WorkPage">
			<div class="alert-page text-sm" role="alert" v-if="alertOpen == true">
				{{ alertText }} 
			</div>
			<ul class="p-0 m-0 ml-auto d-flex">
				<li class="d-block">
					<button class="btn btn-sm btn-outline-secondary d-flex">
						<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
							<path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
						</svg>
					</button>
				</li>
				<li class="d-block ml-2">
					<router-link class="btn btn-sm btn-outline-secondary" :to="{name: 'settingsPage', params: {id: pageId}}">
						<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
							<path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
						</svg>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="editor-container">
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
			<div class="error-load text-center pt-5" v-else-if="preloader == 'error'">
				<svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
				<h4 class="text-secondary fw-bold mt-4">Error loading page</h4>
			</div>
		</div>
	</Dashboard>
</template>

<script setup lang="ts">
	import { ref, onMounted }	from 'vue'
	import Dashboard			from '@/components/Dashboard.vue'
	import { usePageStore }		from '@/stores/Page'
	import { BlockType }		from '@/utils/types'
	import { v4 as uuidv4 }		from 'uuid'
	import { useRoute }			from 'vue-router'

	const readonly			= ref(false)
	const isSettingsOpen	= ref(false)
	const PageStore			= usePageStore();
	const router			= useRoute();
	const pageId			= ref(router.params.id.toString());
	const preloader			= ref<string>('')
	const alertText			= ref<string>('')
	const alertType			= ref<string>('')
	const alertOpen			= ref<boolean>(false)
	const page				= ref({
		title: '',
		blocks:	[{
			id: uuidv4(),
			type: BlockType.Text,
			details: { value: '' },
		}],
		settings: []
	});
	const comment 			= ref([
		{
			blockId: '976ee59e-08cf-4b3c-82a3-662b867181e7',
			pageId:	'655665b78c8790859156e9c0',
			commentId: '9a339410-1784-4bde-ab01-b7bc60ce6685',
			comment: {
				createdAt: '2023-11-16T18:55:51.442+00:00',
				updatedAt: '2023-11-16T18:55:51.442+00:00',
				value: 'This is the comment',
				author: 'code4guate.santo@gmail.com',
			},
			replies: [
				{
					createdAt: '2023-11-16T18:55:51.442+00:00',
					updatedAt: '2023-11-16T18:55:51.442+00:00',
					value: 'This is the replies comment',
					author: 'code4guate.santo@gmail.com',
				},
				{
					createdAt: '2023-11-16T18:55:51.442+00:00',
					updatedAt: '2023-11-16T18:55:51.442+00:00',
					value: 'This is the replies comment',
					author: 'example.santo@gmail.com',
				}
			]
		},
		{
			blockId: '976ee59e-08cf-4b3c-82a3-662b867181e7',
			pageId:	'655665b78c8790859156e9c0',
			commentId: '4a1c527c-e2f1-4b7a-a84b-7ff5c0f14072',
			comment: {
				createdAt: '2023-11-16T18:55:51.442+00:00',
				updatedAt: '2023-11-16T18:55:51.442+00:00',
				value: 'This is the comment 1',
				author: 'code4guate.santo@gmail.com',
			},
			replies: [
				{
					createdAt: '2023-11-16T18:55:51.442+00:00',
					updatedAt: '2023-11-16T18:55:51.442+00:00',
					value: 'This is the replies comment 1',
					author: 'code4guate.santo@gmail.com',
				},
				{
					createdAt: '2023-11-16T18:55:51.442+00:00',
					updatedAt: '2023-11-16T18:55:51.442+00:00',
					value: 'This is the replies comment 1',
					author: 'example.santo@gmail.com',
				}
			]
		},
	])

	onMounted(() => getWorkPage())

	document.body.addEventListener('keydown', (e) => {
		e = e || window.event;
		let keyCode = e.which || e.keyCode;

		if (e.ctrlKey && keyCode === 83) {
			e.preventDefault();
			e.stopPropagation();
			saveWorkPage();
		}
	});

	async function saveWorkPage() {
		await PageStore.updatePage(pageId.value, page.value)
		.then(res => alertData('Save', 'success'))
		.catch(err => preloader.value = 'error');
	}

	async function getWorkPage() {
		await PageStore.getPage(pageId.value)
		.then(res => {
			page.value = res.page;
			preloader.value = 'success';
		})
		.catch(error => {
			preloader.value = 'error';
		});
	}

	function alertData(text: string, type: string) {
		alertText.value=text;
		alertType.value=type;
		alertOpen.value=true;
		setTimeout(() => {
			alertText.value='';
			alertType.value='';
			alertOpen.value=false;
		}, 1000);
	}
</script>

<style lang="scss">
	.content-dash { position: relative; }

	.preload-page {
		width: 100%;
		min-height: 400px;
		display: flex;
		justify-content: center;
		align-items: center;
		.preloader {width: 100px; }
	}

	.header-WorkPage {
		background-color: #f8f9fc;
		box-shadow: 0 0 2px 0px #808080c7;
		display: flex;
		align-items: center;
		padding: 5px 15px;
		a { display: flex; }
	}
</style>