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
						<router-link class="link-offset-2 link-underline link-underline-opacity-0" :to="{name: 'viewProject', params: {id: project._id}}">
							<div class="card card-project mb-4">
								<div class="card-body">
									<h6>{{ project.title ? project.title : "Undefined" }}</h6>
									<div class="users">
										<div class="user-create">
											<div class="thumbnail"></div>
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
										<span class="text-sm">Files: {{ project.files.length }} Files Attach</span>
										<span class="text-sm">Deadline: {{ validateTime(project.deadline) }}</span>
									</div>
									<div class="container-progress">
										<div class="heading">
											<span class="text-sm">progress</span>
											<span class="text-sm">{{ countdown(project.deadline) }}</span>
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
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</Dashboard>
</template>

<script setup lang="ts">
	import { ref }				from "vue";
	import { useAuthStore }		from '@/stores/auth';
	import { useProjectStore }	from '@/stores/project';
	import Dashboard			from '@/components/Dashboard.vue'; 

	const projects				= ref();
	const authStore 			= useAuthStore();
	const ProjectStore			= useProjectStore();
	const valueUser				= ref();

	createProject();
	async function createProject() {
		await ProjectStore.getProjects()
		.then(res =>	projects.value=res)
		.catch(err =>	console.error(err.message));
	}

	function validateTime(deadline: string) {
		const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		let date	= new Date(deadline);
		let day		= date.getDate();
		let month	= date.getMonth();
		let year	= date.getFullYear();

		let newDate = day + " " + monthNames[month] + " " + year;
		return newDate;
	}

	function countdown(deadline: string) {
		let result			= '';
		let countDownDate	= new Date(deadline).getTime();
		let now				= new Date().getTime();
		let distance		= countDownDate - now;
		let days			= Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours			= Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes			= Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		result				= days + " Days Left";

		if (days < 1) {
			result		= hours + " Hours  Left";
			if(hours < 1 && days < 1) {
				result	= minutes + " Minutes left";
			}
			if(hours <= 0 && days <= 0 && minutes <= 0 ) {
				result	= "Time is done";
			}
		}

		return result;
	}

	// function getUser(userId: string, type: string) {
	// 	if(type == 'name')	{ return valueUser.value; } 
	// 	if(type == 'thumb')	{ return valueUser.value; }
	// }
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
		transition: 300ms;
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

		&:hover { background-color: #b2e6da; }
	}
</style>