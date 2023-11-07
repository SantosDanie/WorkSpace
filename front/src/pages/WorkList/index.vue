<template>
	<Dashboard>
		<div class="container-fluid">
			<div class="row pt-4">
				<div class="col-12 d-flex align-items-end justify-content-between">
					<h2 class="fw-bold">WorkList</h2>

					<router-link :to="{name: 'WorkListCreate'}" class="btn btn-sm btn-primary">
						Add New
					</router-link>
				</div>
				<div class="col-12 mt-5">
					<div class="card px-3 py-3 mb-3">
						<h5 class="fw-bold d-flex align-items-center">WorkList <span class="text-xs bg-primary-subtle border p-1 rounded-2 ms-2">Private</span></h5>
						<p class="text-sm">Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						<div class="d-flex">
							<span class="text-xs text-secondary">
								<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"/></svg>
								Create:
								10/10/2023
							</span>
							<span class="text-xs text-secondary ms-3">
								<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/></svg>
								<!-- Share with -->
							</span>
							<span class="text-xs text-secondary ms-3">
								<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
								Updated: on Jul 10
							</span>
						</div>
					</div>
					<div class="card px-3 py-3 mb-3">
						<h5 class="fw-bold d-flex align-items-center">
							WorkList
							<span class="text-xs bg-warning-subtle border p-1 rounded-2 ms-2">Public</span>
						</h5>
						<p class="text-sm">Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						<div class="d-flex">
							<span class="text-xs text-secondary">
								<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"/></svg>
								Create:
								10/10/2023
							</span>
							<span class="text-xs text-secondary ms-3">
								<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/></svg>
								<!-- Share with -->
							</span>
							<span class="text-xs text-secondary ms-3">
								<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
								Updated: on Jul 10
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Dashboard>
</template>

<script setup lang="ts">
	import Dashboard from '@/components/Dashboard.vue'
</script>