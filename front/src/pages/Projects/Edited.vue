<template>
	<Dashboard>
		<div class="create-project">
			<div class="alert alert-success text-sm p-2" ref="messageProject" id="js_alert-success" style="display: none;">
				Change are saved
			</div>
			
			<div class="d-flex justify-content-between">
				<h4 class="mb-5">Update project</h4>
				<button type="button" class="btn btn-sm btn-info h-fit" @click="updateProject">Save</button>
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
									<Editor :page="project.details"/>
								</div>
							</div>
							<div class="tab-content" v-else-if="tab == 'team'">
								<div class="content-assigned py-2">
									<h5>Members</h5>

									<table class="table table-sm mt-5">
										<thead>
											<tr>
												<th scope="col"></th>
												<th scope="col">Name</th>
												<th scope="col">Permission</th>
												<th scope="col">Access level</th>
												<th scope="col" style="max-width: 80px; width: 80px;">Actions</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope="row"></th>
												<td>Sam</td>
												<td>
													<div class="dropdown">
														<button class="btn btn-sm btn-primary">
															Admin
															<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
														</button>
														<div class="option-dropdown">
															<ul>
																<li class="mb-1" data-option="read">
																	<p class="mb-0">Read</p>
																	<span>Can view, and comment project.</span>
																</li>
																<li class="mb-1" data-option="write">
																	<p class="mb-0">Write</p>
																	<span>Can comment, chatting, manage Task project</span>
																</li>
																<li class="mb-1" data-option="editor">
																	<p class="mb-0">Editor</p>
																	<span>Can manage project settings and users, and also inherits all Write Permission.</span>
																</li>
																<li class="mb-1" data-option="admin">
																	<p class="mb-0">Admin</p>
																	<span>Can manage project settings and users, delete project, and also inherits all Write Permission.</span>
																</li>
															</ul>
														</div>
													</div>
												</td>
												<td>All</td>
												<td><a href="#0" class="fw-bold text-sm">Remove</a></td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div class="tab-content" v-else-if="tab == 'files'">
								<div class="d-flex mb-3">
									<button class="btn btn-sm btn-primary mr-2">All</button>
									<button class="btn btn-sm btn-primary mr-2">Use on Details</button>
									<button class="btn btn-sm btn-primary mr-2">Image</button>
									<button class="btn btn-sm btn-primary mr-2">Files</button>
								</div>
								<div class="editor-files">
									
								</div>
							</div>
							<div class="tab-content" v-else-if="tab == 'settings'">
								<p>Setting</p>
								<div class="container-fluid pt-4">
									<div class="row mb-4">
										<div class="col-2">
											<p class="mb-0">Endline</p>
										</div>
										<div class="col-3">
											<div class="dateTimePicker">
												<input type="date" id="date" ref="date" :value="updateTime('date')" @change="dateTimePicker">
												<span></span>
												<input type="time" id="time" ref="time" :value="updateTime('time')" @change="dateTimePicker">
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
													:checked="project.settings.chat==false ? true : false"
													@input="project.settings.chat = false">
													<label class="btn btn-sm btn-outline-primary mb-0 mr-1" for="active-chat-no">No</label>
													<input type="radio" class="btn-check" name="active-chat" id="active-chat-yes"
													:checked="project.settings.chat==true ? true : false"
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
													:checked="project.settings.comments==false ? true : false"
													@input="project.settings.comments = false">
													<label class="btn btn-sm btn-outline-primary mb-0 mr-1" for="active-comment-no">No</label>
													<input type="radio" class="btn-check" name="active-comments" id="active-comment-yes"
													:checked="project.settings.comments==true ? true : false"
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
													:checked="project.settings.progress==false ? true : false"
													@input="project.settings.progress = false">
													<label class="btn btn-sm btn-outline-primary mb-0 mr-1" for="active-progress-no">No</label>
													<input type="radio" class="btn-check" name="active-progress" id="active-progress-yes"
													:checked="project.settings.progress==true ? true : false"
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
	import { ref }				from "vue";
	import { v4 as uuidv4 }		from 'uuid';
	import { useRoute }			from 'vue-router';
	import { BlockType }		from '@/utils/types';
	import { useProjectStore }	from '@/stores/project';
	import Dashboard			from "@/components/Dashboard.vue";
	import Editor				from "@/components/Editor/Editor.vue";
	
	const router				= useRoute();
	const ProjectStore			= useProjectStore();
	const tab					= ref<string>('details');
	const pageId				= ref(router.params.id.toString());
	const date					= ref<HTMLInputElement>();
	const time					= ref<HTMLInputElement>();
	const messageProject		= ref<HTMLDivElement>();
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
		user:		'',
		details:	details.value,
		members:	[],
		files:		[],
		settings:	{
			chat:		true,
			comments:	true,
			progress:	true,
		}
	})
	getProject();

	function dateTimePicker() {
		let deadline = date.value?.value+" "+time.value?.value;
		project.value.deadline = deadline;
	}

	async function getProject() {
		await ProjectStore.getProject(pageId.value)
		.then(res => project.value=res)
		.catch(err => {
			if(messageProject.value) {
				messageProject.value.classList.remove('alert-success');
				messageProject.value.classList.add('alert-danger');
				messageProject.value.innerText		= 'Field to load project';
				messageProject.value.style.display	= 'block';
			}
			setTimeout(() => {
				if(messageProject.value) {
					messageProject.value.classList.remove('alert-success');
					messageProject.value.classList.remove('alert-danger');
					messageProject.value.innerText		= '';
					messageProject.value.style.display	= 'none';
				}
			}, 3000);
		});
	}

	function updateTime(time:string) {
		const updateDate = project.value.deadline.split(' ');
		if(time == 'date') { return updateDate[0] }
		if(time == 'time') { return updateDate[1] }
	}

	async function updateProject() {
		await ProjectStore.updateProject(pageId.value, project.value)
		.then(res => {
			project.value=res.page;
			if(messageProject.value) {
				messageProject.value.innerText		= 'Change are saved';
				messageProject.value.classList.remove('alert-danger');
				messageProject.value.classList.add('alert-success');
				messageProject.value.style.display	= 'block';
			}
			setTimeout(() => {
				if(messageProject.value) {
					messageProject.value.innerText		= '';
					messageProject.value.classList.remove('alert-danger');
					messageProject.value.classList.remove('alert-success');
					messageProject.value.style.display	= 'none';
				}
			}, 3000);
		})
		.catch(err =>	{
			if(messageProject.value) {
				messageProject.value.innerText		= 'Error: Change are not saved';
				messageProject.value.classList.remove('alert-success');
				messageProject.value.classList.add('alert-danger');
				messageProject.value.style.display	= 'block';
			}
			setTimeout(() => {
				if(messageProject.value) {
					messageProject.value.innerText		= '';
					messageProject.value.classList.remove('alert-success');
					messageProject.value.classList.remove('alert-danger');
					messageProject.value.style.display	= 'none';
				}
			}, 3000);
		});
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

	.editor-details, .editor-files {
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
				font-size: 14px;
				padding: 5px 10px;
				border-radius: 5px;
				align-items: center;
				height: fit-content;
				line-height: normal;
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

	.dropdown {
		border-radius: 5px;
		width: fit-content;
		position: relative;
		svg { height: 15px; }
		svg path { fill: #fff; }
		.option-dropdown {
			display: none;
			padding: 5px 5px;
			margin-top: 5px;
			min-width: 300px;
			border-radius: 5px;
			position: absolute;
			background-color: #f0f0f0;
			box-shadow: 0 0 5px 0 rgba(#000, 0.1);
			ul { margin: 0; }
			ul { padding: 0; }
			span { font-size: 12px; }
			li {
				padding: 5px;
				display: flex;
				transition: 300ms;
				border-radius: 5px;
				flex-direction: column;
				p {
					font-size: 14px;
					font-weight: 600;
				}
				&:hover { background-color: #dddddd; }
			}
		}
	}
</style>