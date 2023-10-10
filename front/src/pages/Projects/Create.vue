<template>
	<Dashboard>
		<div class="row pt-3">
			<div class="col-9">
				<div class="px-5">
					<Lotion :page="page" :readonly="readonly" />
				</div>
			</div>
			<div class="col-3">
				<div class="card mt-5 p-3">
					<label for="date">Date of delivery</label>
					<input type="date" class="form-control">
				</div>
				<div class="card mt-3 p-3">
					<p>Plugin or framework to use</p>
					<ul class="p-0">
						<li class="d-flex justify-content-between item-requirement" v-for="(item, index) in plugins" :key="index">
							<p class="mb-1 text-sm">{{ item.label }}</p>
							<span class="delete" @click="deleteRequirement(index, 'plugin')">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16">
									<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
									<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
								</svg>
							</span>
						</li>
					</ul>
					<div class="input-group mb-3">
						<form class="input-group">
							<input type="text" class="form-control" ref="newPlugin" placeholder="Write Here...">
							<button class="input-group-text" @click="addNewPlugins">Add</button>
						</form>
					</div>
				</div>
				<div class="card mt-3 p-3">
					<p>Other requirements</p>
					<ul class="p-0">
						<li class="d-flex justify-content-between item-requirement" v-for="(item, index) in requirement" :key="index">
							<p class="mb-1 text-sm">{{ item.label }}</p>
							<span class="delete" @click="deleteRequirement(index, 'requirements')">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16">
									<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
									<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
								</svg>
							</span>
						</li>
					</ul>
					<div class="input-group mb-3">
						<form class="input-group">
							<input type="text" class="form-control" ref="newRequirement" placeholder="Write Here...">
							<button class="input-group-text" @click="addNewRequirement">Add</button>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="d-none">
			<div class="row  mb-5 pt-5">
				<div class="col-12 col-md-8">
					<h2 class="mb-4">Project Name</h2>
					
					<div class="d-flex">
						<div class="total-changes me-5 d-flex align-items-center">
							<span class="ml-1 p-2 rounded-circle d-inline-block bg-warning-subtle border me-2"></span>
							<h6 class="text-sm"><span class="fw-bold">0</span> <br>In Progress</h6>
						</div>
						<div class="total-changes me-5 d-flex align-items-center">
							<span class="ml-1 p-2 rounded-circle d-inline-block bg-info-subtle border me-2"></span>
							<h6 class="text-sm"><span class="fw-bold">0</span> <br>Done</h6>
						</div>
						<div class="total-changes me-5 d-flex align-items-center">
							<span class="ml-1 p-2 rounded-circle d-inline-block bg-success-subtle border me-2"></span>
							<h6 class="text-sm"><span class="fw-bold">0</span> <br>Approved</h6>
						</div>
						<div class="total-changes me-5 d-flex align-items-center">
							<span class="ml-1 p-2 rounded-circle d-inline-block bg-secondary-subtle border me-2"></span>
							<h6 class="text-sm"><span class="fw-bold">0</span> <br>Total Changes</h6>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-4">
					<p class="d-flex align-items-center justify-content-end">
						<span class="ml-1 p-2 rounded-circle d-inline-block bg-success border me-2"></span>
						Finish date <br>
						12/12/2023
					</p>
					<div class="d-flex justify-content-end">
						<button class="btn btn-light border btn-sm me-2">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
							</svg>
						</button>
						<button class="btn btn-light border btn-sm">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16">
								<path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<div class="card py-2 px-3">
						<input type="date" class="form-control">
					</div>
				</div>
			</div>
		</div>
	</Dashboard>
</template>

<script setup lang="ts">
	import { ref }			from 'vue'
	import { v4 as uuidv4 }	from 'uuid'
	import { BlockType }	from '@/utils/types'
	import Dashboard		from '@/components/Dashboard.vue'
	import Lotion			from '@/components/Lotion.vue'

	const readonly			= ref(false)
	const newPlugin			= ref<HTMLBodyElement|null>()
	const newRequirement	= ref<HTMLBodyElement|null>()
	const requirement		= ref<object>([]);
	const plugins			= ref<object>([]);
	const page				= ref({
		type: 'project',
		requirement: requirement.value,
		plugins: plugins.value,
		name: '',
		blocks: [{
			id:		uuidv4(),
			type:	BlockType.Text,
			details: { value: 'Get Started' },
		}]
	});
	
	function deleteRequirement(index: number, objectType: string): void {
		if(objectType == 'plugin') {
			plugins.value.splice(index, 1);
		}

		if(objectType == 'requirements') {
			requirement.value.splice(index, 1);
		}
	}

	function addNewPlugins(e: { preventDefault: () => void }): void {
		e.preventDefault();
		plugins.value.push({label: newPlugin.value.value });
		newPlugin.value.value = '';
	}

	function addNewRequirement(e: { preventDefault: () => void }): void {
		e.preventDefault();
		requirement.value.push({label: newRequirement.value.value });
		newRequirement.value.value = '';
	}

 	// function savePage(): void {

	// }
</script>

<style lang="scss">
	.item-requirement .delete { opacity: 0; }
	.item-requirement .delete { cursor: pointer; }
	.item-requirement:hover .delete { opacity: 1; }
</style>