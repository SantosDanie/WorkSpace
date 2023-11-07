<template>
	<Dashboard>
		<div class="container-fluid pt-5">
			<div class="row">
				<div class="col-12 pt-4">
					<!-- <h1 class="text-center">Search Template</h1> -->
					<h1 class="text-center">Template</h1>
					
					<!-- <form style="max-width: 700px;" class="m-auto pt-5">
						<div class="input-group input-group-lg">
							<input type="text" class="form-control" placeholder="Search Template..." @keydown="searchTemplate" v-model="search">
							<button class="input-group-text" id="inputGroup-sizing-lg">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
									<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
								</svg>
							</button>
						</div>
					</form> -->
				</div>
				<div class="col-12 pt-5">
					<div class="row justify-content-center">
						<div class="col-auto" v-for="(item, index) in resultTemplates" :key="index" >
							<router-link :to="{name: item.option}" class="card mb-4 link-offset-2 link-underline link-underline-opacity-0" style="width: 200px;" :class="item.class">
								<div class="card-body">
									<h5 class="card-title text-center mb-0">{{ item.name }}</h5>
									<!-- <p class="text-sm">Lorem ipsum dolor sit...</p> -->
	
									<!-- <a href="#" class="btn btn-light border btn-sm">View</a>
									<router-link :to="{name: item.option}" class="btn btn-primary btn-sm ml-2">
										Select
									</router-link> -->
								</div>
							</router-link>
						</div>
						<div class="col-auto" v-if="resultTemplates.length == 0">
							<h2>No results found</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Dashboard>
</template>

<script setup lang="ts">
	import Dashboard		from '@/components/Dashboard.vue'
	import { ref }			from 'vue'

	const search			= ref<String>('')
	const templates			= ref<object>([
		{ 
			name:	'Work List',
			option:	'WorkList',
			class:	'bg-warning-subtle'
		},
		{
			name:	'WorkSpace',
			option:	'PageCreate',
			class:	'bg-primary-subtle'
		},
		{
			name:	'Worksheet',
			option:	'PageCreate',
			class:	'bg-info-subtle'
		}
	])
	const resultTemplates	= ref<Object>([])
	resultTemplates.value = templates.value;
	
	function searchTemplate(): void {
		setTimeout(() => {
			if(search.value.toLowerCase() != '') {
				resultTemplates.value = templates.value.filter(item => {
					return item.name.toLowerCase().includes(search.value.toLowerCase())
				});
			}

			if(search.value == '') {
				resultTemplates.value = templates.value;
				console.log('empty')
			}
		}, 50);
	}
</script>