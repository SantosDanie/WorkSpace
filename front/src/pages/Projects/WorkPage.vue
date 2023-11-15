<template>
	<Dashboard>
		<div class="container-settings">
			<div class="settings" v-if="isSettingsOpen">
				<h1>settings</h1>
			</div>
			<div class="cogs">
				<button class="btn_close">
					<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
				</button>
			</div>
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
			<Lotion :page="page" :readonly="readonly" v-else-if="preloader == 'success'"/>
			<div class="error-load text-center pt-5" v-else-if="preloader == 'error'">
				<svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
				<h4 class="text-secondary fw-bold mt-4">Error loading page</h4>
			</div>
			<div class="alert alert-success" role="alert" v-if="alertOpen == true">
				A simple success alert—check it out!
			</div>
		</div>
	</Dashboard>
</template>

<script setup lang="ts">
	import { ref, onMounted }	from 'vue'
	import Dashboard			from '@/components/Dashboard.vue'
	import Lotion				from '@/components/Lotion.vue'
	import { usePageStore }		from '@/stores/Page'
	import { BlockType }		from '@/utils/types'
	import { v4 as uuidv4 }		from 'uuid'
	import { useRoute }			from 'vue-router';

	
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

	.container-settings {
		position: absolute;
		background-color:  rgb(236, 236, 236);
		width: 100%;
		top: 0;
		left: 0;
		.settings {
			display: none;
			padding: 15px 20px;
			background-color: red;
		}

		.cogs {
			position: absolute;
			top: 100%;
			right: 25px;
			.btn_close {
				padding: 7px 20px;
				border-radius: 0 0 10px 10px;
				display: inline-flex;
				background-color: rgb(236, 236, 236);
			}
		}
	}

	.editor-container {
		padding: 30px 70px;
	}

	.preload-page {
		width: 100%;
		min-height: 400px;
		display: flex;
		justify-content: center;
		align-items: center;
		.preloader {width: 100px; }
	}

	.alert {
		position: fixed  !important;
		top: 70px;
		right: 0;
	}
</style>