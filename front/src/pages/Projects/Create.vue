<template>
	<Dashboard>
		<div class="create-project">
			<div class="d-flex justify-content-between">
				<h4 class="mb-5">Create project</h4>
				<button type="button" class="btn btn-primary h-fit" @click="createProject">Create</button>
			</div>
			<div>
				<input type="text" placeholder="Title Project" class="h4" v-model="project.title">
				<div class="tabs mt-3">
					<div class="project">
						<ul class="nav nav-tabs">
							<li class="nav-item">
								<a class="nav-link" :class="{'active':tab == 'details'}" href="#" @click="tab = 'details'">Details</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" :class="{'active':tab == 'team'}" href="#" @click="tab = 'team'">Members</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" :class="{'active':tab == 'files'}" href="#" @click="tab = 'files'">Files</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" :class="{'active':tab == 'settings'}" href="#" @click="tab = 'settings'">Settings</a>
							</li>
						</ul>

						<div class="tabs-content p-3">
							<div class="tab-content" v-if="tab == 'details'">
								<p>Details</p>
								<div class="editor-details">
									<Editor :page="details"/>
								</div>
							</div>
							<div class="tab-content" v-else-if="tab == 'team'">
								<div class="content-assigned py-5">
									<div class="cards row">
										<div class="col-3">
											<div class="card p-3 bg-light">
												<h5>Has Access</h5>
											</div>
										</div>
										<div class="col-3">
											<div class="card p-3 bg-light">
												<h5>All Members</h5>
											</div>
										</div>
									</div>
									<hr>
									<div class="table-actions">
										<div class="filters">
											<h6>All Members (03)</h6>
											<div class="filter-search">
												<form action="#0" class="search-form">
													<input type="text" name="search" placeholder="Search...">
												</form>
												<button class="btn btn-sm btn-outline-primary">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>
													Filter
												</button>
											</div>
										</div>
									</div>
									<div class="task-list table-responsive-sm">
										<table class="table table-sm">
											<thead>
												<tr>
													<th class="text-sm">Name</th>
													<th class="text-sm">Role</th>
													<th class="text-sm">Mentions</th>
													<th class="text-sm">Enrolled</th>
													<th></th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td class="text-sm">Santos</td>
													<td class="text-sm">Admin</td>
													<td class="text-sm">@santos</td>
													<td class="text-sm">May 12, 2019</td>
													<td class="content-right">
														<button>
															<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
														</button>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>

							</div>
							<div class="tab-content" v-else-if="tab == 'files'">
								<p>Working</p>
							</div>
							<div class="tab-content" v-else-if="tab == 'settings'">
								<p>Setting</p>
								<div class="container-fluid pt-4">
									<div class="row mb-5">
										<div class="col-2">
											<p class="mb-0">Endline</p>
										</div>
										<div class="col-3">
											<div class="dateTimePicker">
												<input type="date" id="date" value="03/07/2018" ref="date" @change="dateTimePicker">
												<span></span>
												<input type="time" id="time" value="08:00" ref="time" @change="dateTimePicker">
											</div>
										</div>
									</div>
									<div class="row mb-4">
										<div class="col-2">
											<p class="mb-0">Active Chat</p>
											<span class="text-sm">You can chat with project members.</span>
										</div>
										<div class="col-10">
											<div class="btn-group">
												<div class="btn-group-horizontal" role="group" aria-label="Horizontal radio toggle button group">
													<input type="radio" class="btn-check" name="active-chat" id="active-chat-no"
													@input="project.settings.chat = false">
													<label class="btn btn-sm btn-outline-primary mb-0 mr-1" for="active-chat-no">No</label>
													<input type="radio" class="btn-check" name="active-chat" id="active-chat-yes"
													@input="project.settings.chat = true">
													<label class="btn btn-sm btn-outline-primary mb-0" for="active-chat-yes">Yes</label>
												</div>
											</div>
										</div>
									</div>
									<div class="row mb-4">
										<div class="col-2">
											<p class="mb-0">Active Comments</p>
											<span class="text-sm">When you activate comments, comment on each task separately and the project as a whole.</span>
										</div>
										<div class="col-10">
											<div class="btn-group">
												<div class="btn-group-horizontal" role="group" aria-label="Horizontal radio toggle button group">
													<input type="radio" class="btn-check" name="active-comments" id="active-comment-no"
													@input="project.settings.comments = false">
													<label class="btn btn-sm btn-outline-primary mb-0 mr-1" for="active-comment-no">No</label>
													<input type="radio" class="btn-check" name="active-comments" id="active-comment-yes"
													@input="project.settings.comments = true">
													<label class="btn btn-sm btn-outline-primary mb-0" for="active-comment-yes">Yes</label>
												</div>
											</div>
										</div>
									</div>
									<div class="row mb-4">
										<div class="col-2">
											<p class="mb-0">Activate progress</p>
										</div>
										<div class="col-10">
											<div class="btn-group">
												<div class="btn-group-horizontal" role="group" aria-label="Horizontal radio toggle button group">
													<input type="radio" class="btn-check" name="active-progress" id="active-progress-no"
													@input="project.settings.progress = false">
													<label class="btn btn-sm btn-outline-primary mb-0 mr-1" for="active-progress-no">No</label>
													<input type="radio" class="btn-check" name="active-progress" id="active-progress-yes"
													@input="project.settings.progress = true">
													<label class="btn btn-sm btn-outline-primary mb-0" for="active-progress-yes">Yes</label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="project-list"></div>
				</div>
			</div>
		</div>
	</Dashboard>
</template>

<script setup lang="ts">
	import { ref, computed }	from "vue";
	import { v4 as uuidv4 }		from 'uuid';
	import { useRouter }		from 'vue-router';
	import { BlockType }		from '@/utils/types';
	import { useAuthStore }		from '@/stores/auth';
	import { useProjectStore }	from '@/stores/project';
	import Dashboard			from "@/components/Dashboard.vue";
	import Editor				from "@/components/Editor/Editor.vue";
	
	const router				= useRouter();
	const authStore 			= useAuthStore();
	const ProjectStore			= useProjectStore();
	const tab					= ref<string>('details');
	const user					= computed(() => authStore.user);
	const date					= ref<HTMLInputElement>();
	const time					= ref<HTMLInputElement>();
	const details				= ref({
		blocks:	[{
			id: uuidv4(),
			type: BlockType.Text,
			details: { value: '' },
		}]
	});
	const project				= ref({
		title:		'',
		progress:	0,
		deadline:	'',
		user:		`${user.value.id}`,
		details:	details.value,
		members:	[],
		files:		[],
		settings:	{
			chat:		true,
			comments:	true,
			progress:	true,
		}
	})

	function dateTimePicker() {
		let deadline = date.value?.value+" "+time.value?.value;
		project.value.deadline = deadline;
	}

	async function createProject() {
		project.value.details = details.value;
		await ProjectStore.createProject(project.value)
		.then(res => {
			router.replace({name: "editProject", params: {id: res.pageId}})
		})
		.catch(err =>	console.log('error'));
	}
</script>

<style lang="scss">
	.create-project {
		padding: 15px;
		input {
			width: 100%;
			padding: 5px 10px;
			border-radius: 5px;
			border: 1px solid rgba(gray, 0.4);
			&:focus { outline: 0; }
		}
		
		.buttons-type {
			display: flex;
			button {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-right: 5px;
				color: #464646;
				svg {
					width: 20px;
					margin-right: 5px;
				}
			}
		}
	}

	.editor-details {
		width: 100%;
		height: 100%;
		display: table;
		min-height: 300px;
		padding: 20px 10px;
		border-radius: 5px;
		box-shadow: 0 0 0 1px #949494;
		.editor-workPage {
			height: 100%;
			padding: 0 60px;
			min-height: 100%;
		}
	}

	.filters {
		display: flex;
		padding-top: 20px;
		padding-bottom: 20px;
		align-items: flex-end;
		justify-content: space-between;
		.view-type {
			padding: 5px;
			display: flex;
			border-radius: 5px;
			button {
				display: flex;
				padding: 5px 10px;
				align-items: center;
				height: fit-content;
				border-radius: 5px;
				line-height: normal;
				font-size: 14px;
				svg { height: 12px; }
				svg { margin-right: 5px; }
			}
		}

		.filter-search {
			display: flex;
			.search-form {
				input {
					font-size: 16px;
					min-width: 250px;
					padding: 4px 13px;
					border-radius: 5px;
					border: 1px solid #b9b9b9;
					&:focus { outline: 0; }
				}
			}
			
			button {
				display: flex;
				font-size: 14px;
				margin-left: 10px;
				padding: 5px 10px;
				border-radius: 5px;
				line-height: normal;
				align-items: center;
				box-shadow: 0 0 2px gray;
				svg { height: 12px; }
				svg { margin-right: 5px; }
			}
		}
	}

	.dateTimePicker {
		border-radius: 8px;
		align-items: center;
		display: inline-flex;
		background-color: #fff;
		border: 1px solid #0d6efd;
		&:focus-within { border-color: #0d6efd; }

		input {
			border: 0;
			outline: none;
			font: inherit;
			color: inherit;
			appearance: none;
			background-color: transparent;
			
			&[type=date] {
				width: 8rem;
				border-right-width: 0;
				padding: .25rem 0 .25rem .5rem;
			}
			
			&[type=time] {
				width: 8rem;
				border-left-width: 0;
				padding: .25rem .5rem .25rem 0;
			}
		}

		span {
			height: 1rem;
			margin-left: .25rem;
			margin-right: .25rem;
			border-right: 1px solid #ddd;
		}
	}
</style>