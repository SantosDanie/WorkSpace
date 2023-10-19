<template>
	<Dashboard>
		<div class="row pt-3">
			<div class="col-12">
				<div class="d-flex justify-content-between align-items-center">
					<h2>Team</h2>
				</div>

				<ul class="nav nav-tabs card-header-tabs border-bottom mt-4">
					<li class="nav-item">
						<a class="nav-link link-secondary" @click="openTab('members')" :class="tab == 'members' ? 'active' : ''" aria-current="true" href="#">Members</a>
					</li>
					<li class="nav-item">
						<a class="nav-link link-secondary" @click="openTab('groups')" :class="tab == 'groups' ? 'active' : ''" href="#">Groups</a>
					</li>
					<li class="nav-item">
						<a class="nav-link link-secondary" @click="openTab('user')" :class="tab == 'user' ? 'active' : ''" aria-disabled="true">User</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="row pt-5">
			<div class="col-12" v-if="tab == 'members'">
				<div class="tab-header mt-3 mb-4 d-flex align-items-center justify-content-between flex-wrap">
					<button @click="modalOpen == false ? modalOpen = true: modalOpen = false" class="btn btn-primary btn-sm m-0">
						<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
							<path fill="#fff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
						</svg>
						Add Member
					</button>
					<form style="max-width: 350px;">
						<div class="input-group">
							<input type="text" class="form-control" placeholder="Search By Name or Email..." aria-label="Search By Name or Email..." aria-describedby="basic-addon2">
							<button class="input-group-text" id="basic-addon2">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
									<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
								</svg>
							</button>
						</div>
					</form>
				</div>

				<table class="table table-sm">
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Projects</th>
							<th scope="col">Access Level</th>
							<th scope="col">More</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(member, index) in TeamObject.members" :key="index">
							<td class="d-flex align-items-center">
								<img class="border rounded-circle me-2" width="40" height="40" src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg">
								<div class="d-block">
									<span class="fw-bold">{{ member.name }}</span><br>
									<span class="text-sm text-secondary">{{ member.email }}</span>
								</div>
							</td>
							<td class="align-middle">{{ member.projects }} Project{{ member.projects > 1 ? "s": '' }}</td>
							<td class="align-middle">{{ member.status }}</td>
							<td class="align-middle">
								<button class="btn btn-sm btn-light">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
										<path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
									</svg>
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="col-12" v-else-if="tab == 'groups'">
				<div class="tab-header mt-3 mb-4 d-flex align-items-center justify-content-between flex-wrap">
					<button class="btn btn-primary btn-sm m-0">
						<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
							<path fill="#fff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
						</svg>
						Add Group
					</button>
					<form style="max-width: 350px;">
						<div class="input-group">
							<input type="text" class="form-control" placeholder="Search By Name or Email..." aria-label="Search By Name or Email..." aria-describedby="basic-addon2">
							<button class="input-group-text" id="basic-addon2">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
									<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
								</svg>
							</button>
						</div>
					</form>
				</div>

				<table class="table table-sm">
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Projects</th>
							<th scope="col">Members</th>
							<th scope="col">More</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(group, index) in TeamObject.groups" :key="index">
							<td class="align-middle">{{ group.name }}</td>
							<td class="align-middle">{{ group.projects }} Project{{ group.projects > 1 ? "s": '' }}</td>
							<td class="align-middle">{{ group.members.length }}</td>
							<td class="align-middle">
								<button class="btn btn-sm btn-light">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
										<path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
									</svg>
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		
		<!-- Modal -->
		<div class="modal fade" :class="modalOpen == true ? 'modal-open': ''" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="exampleModalLabel">Add Member</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="modalOpen = false"></button>
					</div>
					<div class="modal-body">
						<form>
							<div class="input-group mb-3">
								<input type="text" class="form-control" aria-label="Text input with dropdown button">
								<button class="btn btn-outline-secondary dropdown-toggle" @click="dropdown == false ? dropdown = true: dropdown = false;" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									{{ status }}
								</button>
								<ul class="dropdown-menu dropdown-menu-end" :class="dropdown == true ? 'dropdownActive': ''">
									<li><a class="dropdown-item" href="#" @click="status = 'admin'; dropdown = false;">Admin</a></li>
									<li><a class="dropdown-item" href="#" @click="status = 'manager'; dropdown = false;">Manager</a></li>
									<li><a class="dropdown-item" href="#" @click="status = 'worker'; dropdown = false;">worker</a></li>
									<li><a class="dropdown-item" href="#" @click="status = 'view'; dropdown = false;">View</a></li>
								</ul>
							</div>
							<button class="btn btn-primary">Send invitation</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</Dashboard>
</template>

<script setup lang="ts">
	import Dashboard	from '@/components/Dashboard.vue'
	import { ref }		from 'vue'

	const tab			= ref<string>('members')
	const dropdown		= ref<boolean>(false)
	const status		= ref<string>('');
	const modalOpen		= ref<boolean>(false)
	const TeamObject	= ref<object>({
		members: [
			{
				name: 'Santos',
				email: 'example@gmail.com',
				status: 'Manager',
				projects: 1,
			},
			{	
				name: 'Daniel',
				email: 'example1@gmail.com',
				status: 'Viewer',
				projects: 3,
			}
		],
		groups: [
			{
				name: 'Group 1',
				projects: 1,
				members: [
					{
						name: 'Santos',
						email: 'example@gmail.com',
						status: 'Manager',
						projects: 1,
					},
					{	
						name: 'Daniel',
						email: 'example1@gmail.com',
						status: 'Viewer',
						projects: 3,
					}
				],
			},
			{
				name: 'Group 2',
				projects: 1,
				members: [
					{
						name: 'Santos',
						email: 'example@gmail.com',
						status: 'Manager',
						projects: 1,
					},
					{	
						name: 'Daniel',
						email: 'example1@gmail.com',
						status: 'Viewer',
						projects: 3,
					}
				],
			}
		]
	})

	if(status.value == '') status.value = 'Default Status'

	function openTab(text: string): void {
		tab.value = text;
	}
</script>

<style lang="scss">
	.dropdownActive {
		display: block !important;
		right: 0;
		left: auto !important;
	}

	.modal-open {
		display: block !important;
		opacity: 1 !important;
	}
</style>