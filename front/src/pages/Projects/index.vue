<template>
	<Dashboard>
		<div class="index-projects py-3 px-3">
			<div class="header-filter">
				<h3>Projects</h3>
				<div class="filters">
					<router-link class="btn btn-sm btn-primary mr-2 px-2" :to="{name: 'createProject'}">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
						Create Project
					</router-link>
					<button class="btn btn-sm btn-outline-secondary ml-2">All Projects</button>
					<button class="btn btn-sm btn-outline-secondary ml-2">Started</button>
					<button class="btn btn-sm btn-outline-secondary ml-2">Approval</button>
					<button class="btn btn-sm btn-outline-secondary ml-2">Completed</button>
				</div>
			</div>
			<div class="container-fluid mt-4">
				<div class="row">
					<div class="col-4" v-for="project, i in projects" :key="i">
						<div class="card card-project mb-4">
							<div class="card-heading">
								<router-link class="btn btn-sm p-1 btn-outline-secondary ml-2" :to="{name: 'editProject', params: {id: project._id}}">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
								</router-link>
								<button class="btn btn-sm p-1s btn-outline-secondary ml-2">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
								</button>
							</div>
							<div class="card-body">
								<h6>{{ project.title ? project.title : "Undefined" }}</h6>
								<div class="users">
									<div class="user-create">
										<div class="thumbnail">
											<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="">
										</div>
										<p>Santos</p>
									</div>
									<div class="user-assigned">
										<div class="user">
											<div class="thumbnail">
												<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="">
											</div>
										</div>
										<div class="user">
											<div class="thumbnail">
												<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="">
											</div>
										</div>
										<div class="user">
											<div class="thumbnail">
												<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="">
											</div>
										</div>
										<div class="user">
											<div class="thumbnail">
												<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="">
											</div>
										</div>
									</div>
								</div>
								<div class="details">
									<span class="text-sm">Files: 7 Files Attach</span>
									<span class="text-sm">Deadline: 2 April 2023</span>
								</div>
								<div class="container-progress">
									<div class="heading">
										<span class="text-sm">progress</span>
										<span class="text-sm">155 days Left</span>
									</div>
									<div class="progress">
										<div class="bar"
										:class="{
											'bar-danger': project.progress < 50,
											'bar-success': project.progress > 49,
											}"
										:style="project.progress > 0 ? `width: ${50}%;`: ''"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Dashboard>
</template>

<script setup lang="ts">
	import { ref }				from "vue";
	import { useProjectStore }	from '@/stores/project';
	import Dashboard			from '@/components/Dashboard.vue';

	const projects				= ref();
	const ProjectStore			= useProjectStore();

	createProject();
	async function createProject() {
		await ProjectStore.getProjects()
		.then(res =>	projects.value=res)
		.catch(err =>	console.error(err.message));
	}
</script>

<style lang="scss">
	.header-filter {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;	
	}

	.filters {
		display: flex;
		flex-direction: flex-end;
		svg { height: 13px; }
		svg { margin-right: 5px; }
		svg path { fill: #fff; }
	}

	.card-project {
		.card-heading {
			display: flex;
			padding-top: 10px;
			padding-right: 10px;
			justify-content: flex-end;
			button, a {
				display: flex;
				height: fit-content;
				svg {
					height: 15px;
					transition: 300ms;
				}
			}

			button:hover svg { fill: #fff; }
		}
		.card-body {
			.users {
				display: flex;
				justify-content: space-between;
				.user-create {
					display: flex;
					align-items: center;
					.thumbnail {
						width: 30px;
						height: 30px;
						overflow: hidden;
						margin-right: 5px;
						border-radius: 50%;
						border: 1px solid gray;
					}
					p {
						margin-bottom: 0;
						font-weight: 600;
					}
				}

				.user-assigned {
					display: flex;
					padding-right: 15px;
					.user { width: 10px; }
					.thumbnail {
						width: 25px;
						height: 25px;
						overflow: hidden;
						border-radius: 50%;
						background-color: #fff;
						border: 1px solid gray;
					}
				}
			}

			.container-progress {
				padding-top: 5px;
				.heading {
					display: flex;
					margin-bottom: 5px;
					justify-content: space-between;
				}

				.progress {
					width: 100%;
					height: 8px;
					display: flex;
					.bar {
						height: 100%;
						border-radius: 5px;
					}
					.bar-success	{ background-color: #35DDAA; }
					.bar-danger		{ background-color: #FB6D6C; }
				}
			}

			.details {
				display: flex;
				margin-top: 20px;
				justify-content: space-between;
			}
		}
	}
</style>