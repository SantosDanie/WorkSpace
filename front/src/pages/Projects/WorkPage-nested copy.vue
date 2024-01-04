<template>
	<Dash>
		<div class="container-fluid py-2">
			<div class="row">
				<div class="col-12">
					<nested-draggable :tasks="list" :maxLevel="2"/>
				</div>
			</div>
		</div>
	</Dash>
</template>


<script>
	import nestedDraggable from "../../components/Nested/Nested.vue";
	export default {
	name: "nested-example",
	display: "Nested",
	order: 1,
	components: { nestedDraggable },
	data() {
		return {
			list: [
				{
					name: "task 1",
					tasks: [
						{
							name: "task 2",
							tasks: []
						}
					]
				},
				{
					name: "task 3",
					tasks: [
						{
							name: "task 4",
							tasks: []
						}
					]
				},
				{
					name: "task 5",
					tasks: []
				}
			]};
		}
	};
</script>