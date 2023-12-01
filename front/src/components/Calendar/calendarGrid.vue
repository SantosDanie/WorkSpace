<template>
	<div class="calendar-grid" v-if="props.activities == ''">
		<div class="days-grid">
			<div v-for="day, index in DAYS" :key="index" class="day" :title="day">{{ day }}</div>
		</div>
		<div class="date-grid">
			<div class="date" v-for="num in props.calendar.start" :key="num"></div>
			<div class="date" v-for="day in props.calendar.days" :key="day">
				<div
					class="val"
					:class="[
						{'currentDay':		currentDay == day}
						// {'hasActivities':	currentDay == day+1}
					]"
					@click="viewActivities(day)">
					{{ day }}
				</div>
			</div>
		</div>
		<!-- {{ hasActivities() }} -->
	</div>
	<div class="calendar-grid px-3" v-else>
		<table class="table table-borderless">
			<thead>
				<tr>
					<th>Name</th>
					<th>Create</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Name</td>
					<td>Create</td>
					<td></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	const DAYS				= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const date				= new Date();
	const currentDay		= ref<Number>(0)
	const props				= defineProps({
		calendar: {
			type: Object,
			required: true,
		},
		activities: {
			type: String,
		},
	})

	const emit				= defineEmits([
		'calendar',
		'activities',
		'viewActivities'
	]);

	function validateCurrentDay() {
		let month 	= date.getMonth();
		let year	= date.getFullYear();
		let day		= date.getDate();

		if(month == props.calendar.month && props.calendar.year == year) {
			currentDay.value = day;
		} else {
			currentDay.value = 0;
		}
	}

	validateCurrentDay();
	document.body.addEventListener('click', () => {
		validateCurrentDay();
	})

	function viewActivities(day: number) {
		let d = day;
		let m = props.calendar.month;
		let y = props.calendar.year;

		let dateActivities	= new Date(y, m, d);
		emit('viewActivities', dateActivities)
	}
</script>

<style lang="scss">
	.calendar-grid{
		margin-top: 15px;
		display: grid;
		gap: 20px;
		user-select: none;
		.days-grid {
			display: grid;
			grid-template-columns: repeat(7, 1fr);
			justify-content: space-between;
			align-items: center;
			.day {
				text-align: center;
				font-weight: bold;
				&.today {
					color: blueviolet;
				}
			}
		}

		.date-grid {
			display: grid;
			grid-template-columns: repeat(7, 1fr);
			justify-content: space-between;
			align-items: center;
			row-gap: 20px;
			.date{
				display: flex;
				justify-content: center;
				cursor: pointer;
				.val {
					width: 25px;
					height: 25px;
					text-align: center;
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 20px;
					position: relative;
					background-color: antiquewhite;
					transition: 500sm;
					&:hover {
						background-color:#117263;
						font-weight: bold;
						color: #fff;
					}

					&.currentDay {
						background-color: rgb(215, 248, 250);
						border-radius: 5px !important;
						font-weight: bold;
						color: #000;
					}

					&.hasActivities {
						font-weight: 600;
						color: black;
						position: relative;
						&:after {
							position: absolute;
							content: "";
							width: 13px;
							height: 13px;
							background-color: rgb(215, 248, 250);
							display: block;
							top: 0;
							right: 0;
							border-radius: 50%;
							border: 1px solid rgba(gray, 0.3);
						}
					}
				}
			}
		}
	}
</style>