<template>
	<Dashboard>
		<div class="row project-form pb-5">
			<div class="col-12">
				<div class="header-project py-4">
					<div class="logo">
						<img v-if="logo == false" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU" width="100" height="100">
						<div class="hover" >
							<input type="file" accept="image/png, image/gif, image/jpeg, image/jpg">
							<svg xmlns="http://www.w3.org/2000/svg" class="logo-svg" height="50px" viewBox="0 0 512 512"><path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
						</div>
					</div>
					<h2>{{ page.name }}</h2>
				</div>
			</div>
			<div class="col-12 bg-light" title="Title & Description">
				<div class="px-5">
					<LotionFit :page="page" :readonly="readonly" />
				</div>
			</div>
			<div class="col-12 pt-5">
				<div class="requirements">
					<h6 class="fw-bold">Requirements</h6>
					<div class="card mt-3 p-3">
						<p>Requirements</p>
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
							<form class="w-100">
								<input type="text" class="form-control w-100" ref="newPlugin" placeholder="Write Requirement...">
								<button class="btn btn-info mt-3" @click="addNewRequirement">Add Requirement</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 pt-5 d-none">
				<h6 class="fw-bold">Team</h6>
				<p>Project permissions allow you to extend access beyond that already granted via project permissions.</p>
				<div class="card mt-3 p-3">
					<p>Permissions</p>
					<form class="w-100">
						<input type="mail" class="form-control w-100" ref="newPlugin" placeholder="Write Group Or Email">
						<button class="btn btn-primary mt-3" @click="addNewRequirement">Add</button>
					</form>
				</div>

			</div>


			<div class="col-12 py-5 my-5">
				<Calendar/>
			</div>
		</div>
	</Dashboard>
</template>

<script setup lang="ts">
	import { ref }				from 'vue'
	import { v4 as uuidv4 }		from 'uuid'
	import { BlockType }		from '@/utils/types'
	import Dashboard			from '@/components/Dashboard.vue'
	import Calendar			from '@/components/Calendar.vue'
	import LotionFit			from '@/components/LotionFit.vue'
	import { useProjectStore }	from '@/stores/project'
	import { useRouter }		from 'vue-router';

	const readonly			= ref(false)
	const newPlugin			= ref<HTMLBodyElement|null>()
	const newRequirement	= ref<HTMLBodyElement|null>()
	const requirement		= ref<object>([]);
	const plugins			= ref<object>([]);
	const ProjectStore		= useProjectStore();
	const router			= useRouter()
	const page				= ref({
		name: '',
		settings: [{
			requirement: requirement.value,
			plugins: plugins.value
		}],
		blocks: [{
			id:		uuidv4(),
			type:	BlockType.Text,
			details: { value: '' },
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

 	async function savePage() {
		await ProjectStore.createProject(page.value)
		.then(res	=> { router.replace({name: "PageEdit", params: { id: res.pageId }}) })
		.catch(err	=> console.log(err.message));
	}

	// new code
	const logo = ref<Boolean>(false);
</script>

<style lang="scss">
	.item-requirement {
		padding: 5px 10px;
		border-radius: 5px;
		.delete {
			opacity: 0;
			cursor: pointer;
			svg path { fill: red; }
		}
	}

	.item-requirement:hover {
		background-color: rgba(gray, 0.1);
		.delete { opacity: 1; }
	}

	.project-form {
		.logo {
			width: 100px;
			height: 100px;
			border: 1px solid rgb(212, 212, 212);
			border-radius: 5px;
			transition: 500ms;
			cursor: pointer;
			position: relative;
			overflow: hidden;
			.logo-svg path { fill: rgb(199, 199, 199); }
			&:hover .hover { opacity: 1; }
			.hover {
				top: 0;
				left: 0;
				position: absolute;
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: rgba(gray, 0.1);
				opacity: 0;
				transition: 500ms;
				input  {
					position: absolute;
					top: 0;
					left: 0;
					height: 100%;
					width: 100%;
					opacity: 0;
				}
			}
		}
	}

	.deadline {
		@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

* {
  font-family: "Open Sans", sans-serif;
}

:root {
  --base-color: #CE917B;
}

.container {
  margin: auto;
  max-width: 600px;
}

.date {
  width: 70%;
  padding: 10px;
  margin-left: 40px;
}

.date h2 {
  margin: 0;
  padding: 0;
  color: gray;
  font-size: 0.8em;
}

.date h1 {
  font-size: 1.3em;
  margin: 5px auto;
}

.add-task {
  width: 30%;
  padding: 20px 5px;
}

.add-task-btn {
  padding: 10px 30px;
  background: #222;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 4px 2px #ddd;
}

.add-task-btn:hover {
  cursor: pointer;
}

.calendar {
  margin: 5px 10px 10px;
  padding: 0px 10px;
}

.day {
  margin: 5px;
  padding: 8px;
  width: calc(100% / 7);
  text-align: center;
  font-size: 13px;
  font-weight: bold;
}

.weekdays div {
  color: #555;
  font-weight: 400;
}

.next-month {
  color: #aaa;
  font-weight: 400;
}

.current {
  color: var(--base-color) !important;
}

.today {
  position: relative;
  color: var(--base-color);
}

.today:before {
  content: "";
  position: absolute;
  left: 48%;
  right: 48%;
  bottom: -0.1em;
  width: 0.4em;
  height: 0.4em;
  border-radius: 50%;
  background-color: var(--base-color);
}

.timeline {
  margin-top: 30px;
}

.task {
  list-style: none;
  position: relative;
  padding: 0px 15px 15px;
  border-left: 0.2em var(--base-color) solid;
  font-size: 14px;
}

.badge:before {
  content: "";
  position: absolute;
  height: 0.3em;
  width: 0.3em;
  top: 0em;
  left: -0.45em;
  outline: 0.2em solid #fff;
  border: 0.2em solid var(--base-color);
  border-radius: 50%;
  background-color: #fff;
}

.active > .badge:before {
  content: "";
  position: absolute;
  height: 0.8em;
  width: 0.8em;
  top: 0em;
  left: -0.7em;
  border: 0.2em solid var(--base-color);
  border-radius: 50%;
  background-color: #fff;
}

.active > .badge:after {
  content: "";
  position: absolute;
  height: 0.3em;
  width: 0.3em;
  top: 0.25em;
  left: -0.45em;
  border: 0.2em solid var(--base-color);
  border-radius: 50%;
  background-color: var(--base-color);
}

.timeline-body {
  padding: 5px 15px;
  max-width: 300px;
  margin: 0px 5px;
  border-radius: 10px;
}

.title {
  font-weight: bold;
}

.timeline-content {
  color: gray;
  width: 200px;
}

.active > .timeline-body {
  background: var(--base-color);
  box-shadow: 1px 1px 5px 2px #dedede;
}

.row {
  display: flex;
}

.col-left {
  width: 75%;
  padding: 0px 10px;
}

.col-right {
  width: 25%;
}
/*
.checkmark {
  background: #222;
  width: 40px;
  text-align: center;
  padding: 0px;
  border-radius: 10px;
  margin-left: 40px;
  margin-top: 25px;
}

.checkmark i {
  color: #fff;
  font-size: 28px;
}
*/
	}
</style>