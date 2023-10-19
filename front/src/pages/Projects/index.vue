<template>
	<Dashboard>
		<div class="row pb-3 pt-5 border-bottom">
			<div class="col-12">
				<div class="header-project d-flex justify-content-between align-items-end">
					<h2>Project</h2>
					<router-link :to="{name: 'PageCreate'}" class="btn btn-primary btn-sm">
						Create
					</router-link>
				</div>
			</div>
		</div>

		<div class="row mt-5">
			<div class="col-12">
				<table class="table">
					<thead>
						<tr>
							<th scope="col-1">Name</th>
							<th scope="col">Logo</th>
							<th scope="col">Date</th>
							<th scope="col">Deadline</th>
							<th scope="col">Status</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="align-middle fw-bold">Name Project</td>
							<td class="align-middle">
								<img src="https://1000logos.net/wp-content/uploads/2021/10/Batman-Logo.png" width="50" height="50" class="img-thumbnail">
							</td>
							<td class="align-middle"><span class="text-secondary">12/12/2023</span></td>
							<td class="align-middle"><span class="text-secondary">12/12/2023</span></td>
							<td class="align-middle"><span class="p-2 bg-info d-inline-block me-1 rounded-circle"></span>Approved</td>
							<td class="align-middle"><button class="text-sm rounded-1 bg-primary py-1 px-2 text-white">view</button></td>
						</tr>
						<tr>
							<td class="align-middle fw-bold">Name Project</td>
							<td class="align-middle">
								<img src="https://1000logos.net/wp-content/uploads/2021/10/Batman-Logo.png" width="50" height="50" class="img-thumbnail">
							</td>
							<td class="align-middle"><span class="text-secondary">12/12/2023</span></td>
							<td class="align-middle"><span class="text-secondary">12/12/2023</span></td>
							<td class="align-middle"><span class="p-2 bg-success d-inline-block me-1 rounded-circle"></span>Done</td>
							<td class="align-middle"><button class="text-sm rounded-1 bg-primary py-1 px-2 text-white">view</button></td>
						</tr>
						<tr>
							<td class="align-middle fw-bold">Name Project</td>
							<td class="align-middle">
								<img src="https://1000logos.net/wp-content/uploads/2021/10/Batman-Logo.png" width="50" height="50" class="img-thumbnail">
							</td>
							<td class="align-middle"><span class="text-secondary">12/12/2023</span></td>
							<td class="align-middle"><span class="text-secondary">12/12/2023</span></td>
							<td class="align-middle"><span class="p-2 bg-warning d-inline-block me-1 rounded-circle"></span>Working</td>
							<td class="align-middle"><button class="text-sm rounded-1 bg-primary py-1 px-2 text-white">view</button></td>
						</tr>
						<tr>
							<td class="align-middle fw-bold">Name Project</td>
							<td class="align-middle">
								<img src="https://1000logos.net/wp-content/uploads/2021/10/Batman-Logo.png" width="50" height="50" class="img-thumbnail">
							</td>
							<td class="align-middle"><span class="text-secondary">12/12/2023</span></td>
							<td class="align-middle"><span class="text-secondary">12/12/2023</span></td>
							<td class="align-middle"><span class="p-2 bg-secondary d-inline-block me-1 rounded-circle"></span>New</td>
							<td class="align-middle"><button class="text-sm rounded-1 bg-primary py-1 px-2 text-white">view</button></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</Dashboard>
</template>

<script setup lang="ts">
	import Dashboard from '@/components/Dashboard.vue'
</script>

<style lang="scss">
	.card {
		img {
			width: 100%;
			height: 150px;
			object-fit: cover;
			vertical-align: baseline;
		}

		.card-footer {
			position: relative;
			padding-top: 30px;
			.logo {
				width: 50px;
				height: 50px;
				position: absolute;
				top: -25px;
				border: 1px solid gray;
				border-radius: 50%;
				overflow: hidden;
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>