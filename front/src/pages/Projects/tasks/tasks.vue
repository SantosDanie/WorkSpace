<template>
	<div class="container-tasks">
		<div class="tasks-actions py-4">
			<h3>Tasks</h3>
			<button class="button-sm mr-2">Progress</button>
			<button class="button-sm mr-2">All</button>
		</div>

		<div class="task-project task-list border-none mb-0">
			<table class="table table-borderless mb-0">
				<thead>
					<tr>
						<th>Name</th>
						<th class="column">Assignee</th>
						<th class="column">Due Date</th>
						<td class="column-action"></td>
					</tr>
				</thead>
			</table>
		</div>
		<div class="task-project task-list">
			<h6>
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
				</span>
				To Do
			</h6>
			<table>
				<tbody>
					<tr>
						<td>Name</td>
						<td class="column">Santos</td>
						<td class="column">12/12/2024</td>
						<td class="column-action content-right">
							<div class="dropdown">
								<button class="dropdown-button">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
								</button>
								<div class="dropdown-content">
									<a href="#0">View</a>
									<a href="#0">Review</a>
									<a href="#0">Progress</a>
									<a href="#0">Completed</a>
									<a href="#0">To Do</a>
									<a href="#0">Delete</a>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="task-project task-list">
			<h6>
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
				</span>
				In Progress
			</h6>
			<table>
				<tbody>
					<tr>
						<td>Name</td>
						<td class="column">Santos</td>
						<td class="column">12/12/2024</td>
						<td class="column-action content-right">
							<button>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="task-project task-list">
			<h6>
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
				</span>
				In Review
			</h6>
			<table>
				<tbody>
					<tr>
						<td>Name</td>
						<td class="column">Santos</td>
						<td class="column">12/12/2024</td>
						<td class="column-action content-right">
							<button>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="task-project task-list">
			<h6>
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
				</span>
				Completed
			</h6>
			<table>
				<tbody>
					<tr>
						<td>Name</td>
						<td class="column">Santos</td>
						<td class="column">12/12/2024</td>
						<td class="column-action content-right">
							<button>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script setup lang="ts">
	
</script>