<template>
	<Dashboard>
		<div class="container-fluid">
			<div class="row pt-4">
				<div class="col-12">
					<h2 class="fw-bold mb-3">Create WorkList</h2>
					<h5 class="fw-bold">WorkList name</h5>
				</div>
				<div class="col-12 mt-5">
					<button class="btn-sm btn-primary btn" @click="AddRow">Add</button>
					<table class="table table-sm table-bordered mt-1 table-workList">
						<thead v-if="table.thead.length">
							<tr>
								<th style="width: 25px"></th>
								<th v-for="(heading, index) in table.thead"
								:key="index"
								@dblclick="openSettingsColumns($event, index)"
								:data-type="heading.type"
								:style="heading.width > 150 ?  'width:'+ heading.width +'px' : 'width: 150px'">
									{{ heading.value }}
								</th>
								<th><button class="btn-more-column" type="button" title="Add Column" @click="addColumn">+</button></th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(row, index) in table.tbody" :key="index">
								<td>
									<div class="icon-draggable" @mousedown="mouseDown" @mouseup="mouseUp">
										<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
									</div>
								</td>
								<td v-for="(td, i) in row"
									:key="i"
									:class="table.thead[index].sortable == true ? 'text-sortable' : ''"
									:style="table.thead[index].width > 150 ?  'width:'+ table.thead[index].width +'px; max-width:'+table.thead[index].width+'px;' : 'width: 150px; max-width: 150px'"
									contenteditable="true">
									{{ td.value }}
								</td>
								<th>&nbsp;</th>
							</tr>
						</tbody>
						<tfoot v-if="table.tfoot.length">
							<tr>
								<td>&nbsp;</td>
								<td v-for="(foot, index) in table.tfoot" :key="index">
									<input type="text" v-model="table.tfoot[index]" />
								</td>
								<td>&nbsp;</td>
							</tr>
						</tfoot>
					</table>				
				</div>
			</div>
		</div>

		<div class="columnSettings" :class="{'d-none': columnSettingOpen == false}" ref="columnSettings">
			<div class="containerSettings" :id="id">
				<form action="#0">
					<div class="input-group mb-3">
						<input type="text" class="form-control" placeholder="Column Name" v-model="table.thead[columnKey].value">
					</div>

					<div class="dropdown-types">
						<button @click="typesOpen === false ? typesOpen = true: typesOpen = false;" type="button" class="btn btn-sm btn-outline-secondary w-100 text-left border">
							<span v-if="typesOpen == false" class="hover-item text-capitalize">Type: {{ table.thead[columnKey].type }}</span>
							<svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
							</svg>
						</button>
						<ul class="openOptions mt-1" :class="{'d-block': typesOpen}">
							<li
								class="dropdown-item text-capitalize"
								v-for="(type, t) in types"
								:key="t"
								@click="table.thead[columnKey].type = type.type; typesOpen = false;">
								{{ type.type }}
							</li>
						</ul>
					</div>

					<div class="w-100 pt-3 input-group d-flex justify-content-between">
						<label for="isWrap" class="mb-0">Wrap Column</label>
						<input class="border-light" id="isWrap" type="checkbox" v-model="table.thead[columnKey].sortable" aria-label="Checkbox for following text input">
					</div>

					<button type="button" class="btn btn-sm btn-outline-danger text-left mt-3" v-if="columnKey !== 0" @click="removeColumn">
						<span class="hover-item text-capitalize">Delete</span>
					</button>
				</form>
			</div>
		</div>
	</Dashboard>
</template>

<script setup lang="ts">
	import Dashboard		from '@/components/Dashboard.vue'
	import { ref }			from 'vue'
	import { v4 as uuidv4 } from 'uuid'

	const id				= uuidv4()
	const typesOpen			= ref<Boolean>(false)
	const columnSettingOpen	= ref<Boolean>(false)
	const columnSettings	= ref<HTMLDivElement>()

	const types				= ref<object>([{type: 'text'}, {type: 'number'}, {type: 'date'}])
	const columnType		= ref('')
	const columnKey			= ref<Number>(0)
	const rowKey			= ref<Number>(0)
	const table				= ref<Object>({
		thead: [
			{
				type: 'text',
				value: 'Text',
				width: 150,
				sortable: true,
			}
		],
		tbody: [
			[ { value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' } ]
		],
		tfoot: []
	})

	function mouseDown(e: any) {
		e.target.style.cursor = 'grabbing' 
	}

	function mouseUp(e: any) {
		e.target.style.cursor = 'grab' 
	}

	function openSettingsColumns(e: any, columnIndex: number) {
		columnSettingOpen.value = true;
		columnKey.value = columnIndex;
	}

	document.addEventListener('click', (event: Event) => {
		const menu = document.getElementById(id);
		if (!(menu && menu.contains(event.target as Node))) {
			columnSettingOpen.value = false;
		}
	});

	// Add Column
	function addColumn(): void {
		table.value.thead.push({
			type: 'text',
			value: 'Text ' + (table.value.thead.length + 1),
			width: 150,
			sortable: false
		});
	
		for(var i = 0, length = table.value.tbody.length; i < length; i++) {
			table.value.tbody[i].push('R:' + (i + 1) + ' V:' + table.value.thead.length);
		}
		
		// table.value.tfoot.push('Footer ' + table.value.thead.length);
	}

	function AddRow(): void {
		let newRow = [];
		
		for (let i =0, length = table.value.thead.length; i < length; i++) {
			newRow.push('R:' + (table.value.tbody.length + 1) + ' V:' + (i + 1))
		}

		table.value.tbody.push(newRow);
	}

	function removeColumn() {
		table.value.thead.splice(columnKey.value, 1);
		table.value.tbody.splice(columnKey.value, 1);
	}

	function removeRow() {
		
	}

	function changeName(e: any) {
		console.log(e);
	}
</script>

<style lang="scss">
	.icon-draggable {
		cursor: grab;
		opacity: 0;
		svg { fill: gray; }
		&:hover { opacity: 1; }
	}

	.btn-more-column {
		padding: 0 5px;
		border-radius: 3px;
		background-color: transparent;
		&:hover { background-color: #d3d3d3; }
	}

	.columnSettings {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(#000, 0.3);
		.containerSettings {
			min-width: 250px;
			width: 100%;
			max-width: 350px;
			background-color: #fff;
			display: block;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			border-radius: 5px;
			box-shadow: 0 0 5px 0px #c7c7c7;
			border: 1px solid #d3d3d3;
			padding: 25px 15px;
			z-index: 2;
		}

		ul {
			padding: 0;
			margin: 0;
			li {
				display: block;
				.hover-item {
					width: 100%;
					padding: 5px 10px;
					border-radius: 5px;
					display: block;
					cursor: pointer;
				}
				.hover-item:hover {
					background-color: #d3d3d3;
				}
			}
		}
	}

	.inputTable {
		&:focus { outline: 0; }
	}

	.dropdown-types {
		.openOptions { display: none; }
	}

	.table-workList {
		th { cursor: pointer; }
	}

	.text-sortable {
		overflow-x: scroll;
		white-space: nowrap;

		&::-webkit-scrollbar { display: none; }
		-ms-overflow-style: none;  /* IE and Edge */
		scrollbar-width: none;  /* Firefox */
	}
</style>