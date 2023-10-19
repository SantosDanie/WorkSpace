<template>
	<div class="row">
		<div class="calendar">
			<div class="calendar_body">
				<div class="header d-flex align-items-center mb-5">
					<span class="btn btn-sm" @click="prevMonth">
						<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
					</span>
					<h1 class="m-name">{{ row.name }} {{ year }}</h1>
					<div class="btn btn-sm" @click="nextMonth">
						<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
					</div>
				</div>
				<div class="days">
					<div v-for="(day, idx) in days" :key="idx" class="day_item">{{ day }}</div>
				</div>
				<div class="dates">
					<div class="date-rows"></div>
					<div ref="blankDay" v-for="space in row.startsOn" :key="space + 100" class="date_item">{{ '' }}</div>
					<div v-for="(date, index) in row.days" :key="index" ref="day" :class="{'date_item':true, 'today': (month == now.getMonth() && year == now.getFullYear() && date == now.getDate())}">
						<div @click="getDayDetails($event, new Date().valueOf())">
							<div class="day-number">
								{{ date }}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="calendar_timeline">
				<h6 class="text-center fw-bold">19/10/2023</h6>
				<div class="timeline">
					<div class="timeline_section">
						<div class="timeline-date">
							<div class="dot bg-primary"></div>
						</div>
						<div class="flex-container py-2">
							<div class="card bg-danger-subtle">
								<div class="card-body">
									<h5 class="text-sm">16:00 PM</h5>
									<p class="text-sm mb-0">OpenCounseling - Client</p>
								</div>
							</div>
						</div>
					</div>
					<div class="timeline_section">
						<div class="timeline-date">
							<div class="dot bg-primary"></div>
						</div>
						<div class="flex-container py-2">
							<div class="card bg-warning-subtle">
								<div class="card-body">
									<h5 class="text-sm">10:00 AM</h5>
									<p class="text-sm mb-0">OpenCounseling - staging</p>
								</div>
							</div>
						</div>
					</div>
					<div class="timeline_section">
						<div class="timeline-date">
							<div class="dot bg-primary"></div>
						</div>
						<div class="flex-container py-2">
							<div class="card bg-primary-subtle">
								<div class="card-body">
									<h5 class="text-sm">16:00 PM</h5>
									<p class="text-sm mb-0">Protagonist - Client</p>
								</div>
							</div>
						</div>
					</div>
					<div class="timeline_section">
						<div class="timeline-date">
							<div class="dot bg-primary"></div>
						</div>
						<div class="flex-container py-2">
							<div class="card bg-primary-subtle">
								<div class="card-body">
									<h5 class="text-sm">09:00 AM</h5>
									<p class="text-sm mb-0">Protagonist - Staging</p>
								</div>
							</div>
						</div>
					</div>
					<div class="timeline_section">
						<div class="timeline-date">
							<div class="dot bg-primary"></div>
						</div>
						<div class="flex-container py-2">
							<div class="card bg-primary-subtle">
								<div class="card-body">
									<h5 class="text-sm">09:00 AM</h5>
									<p class="text-sm mb-0">Protagonist - Staging</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, onMounted } from 'vue'

	const now		= ref<Date>(new Date())
	const month		= ref<Number>(now.value.getMonth())
	const year		= ref<Number>(now.value.getFullYear())
	const row		= ref<object>([])
	const days		= ref<Object>(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"])
	const mos		= ref<object>(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
			
	onMounted(() => { months() })

	function months() {
		let m = {
			name: mos.value[month.value],
			days: new Date(year.value, month.value + 1, 0).getDate(),
			startsOn: getFirstDay(month.value, year.value),
		};
		row.value = m;
	}

	function getFirstDay(month, year) {
		return new Date(year, month, 1).getDay();
	}

	function nextMonth() {
		if (month.value < 11) {
			month.value++;
		} else {
			month.value = 0;
			year.value += 1;
		}
		months()
	}

	function prevMonth() {
		if (month.value > 0) {
			month.value--;
		} else {
			month.value = 11;
			year.value -= 1;
		}
		months()
	}

	function getDayDetails(e: Event, timestamp) {
		e.preventDefault();
		console.log(new Date(timestamp).toLocaleString());
	}
</script>

<style lang="scss">
	.calendar {
		position: relative;
		margin-top: 42px;
		font-family: 'Montserrat', sans-serif;
		display: flex;

		&_body {
			width: 100%;
			height: 100%;
			padding: 1.5em;
			z-index: 1;

			.header {
				display: flex;
				justify-content: space-around;
				margin-bottom: 6px;

				.m-name {
					display: flex;
					justify-content: center;
					line-height: 1em;
					width: 50%;
				}

				.month-nav {
					cursor: pointer;
				}
			}

			.footer {
				position: absolute;
				font-weight: bold;
				bottom: 0;
				width: 100%;
				left: 0;
				text-align: center;
    		    color: #FFF
			}
		}

		&_timeline {
			width: 400px;
			height: fit-content;
			.timeline {
				// overflow-y: scroll;
				max-height: 100%;
			}
			.timeline_section {
				padding-left: 50px;
				position: relative;
				.timeline-date {
					position: absolute;
					top: 0;
					left: 0;
					width: 50px;
					height: 100%;
					&::before {
						content: '';
						width: 5px;
						height: 100%;
						background-color: #b6b6b6;
						display: block;
						position: absolute;
						top: 0;
						left: 10px;
					}
					&::after {
						content: '';
						width: 30px;
						height: 5px;
						background-color: #b6b6b6;
						display: block;
						position: absolute;
						top: 40px;
						left: 10px;
					}

					.dot {
						top: 35px;
						left: 5px;

						border-radius: 50%;
						width: 15px;
						height: 15px;
						z-index: 1;

						position: absolute;
						display: block;
						// background-color: red;
					}
				}
			}
		}
	}

	.days {
		display: flex;
		justify-content: flex-start;
		width: 100%;

		.day_item {
			display: inline-block;
			width: 14.25%;
			height: 100%;
			text-align: center;
			margin-bottom: 0;
			padding: .5em;
			padding-bottom: 0;
			font-weight: bold;
		}
	}

	.dates {
		display: flex;
		justify-content: flex-start;
		flex-flow: row wrap;
		width: 100%;

		.date_item {
			display: inline-flex;
			justify-content: center;
			width: 14.25%;
			text-align: center;
			padding: 0.55em;
			cursor: pointer;
			font-size: 1.2em;
			.day-number {
				line-height: 1;
				font-weight: 700;
				padding: 0.75rem;
				text-align: center;
				cursor: pointer;
				border-radius: 0.25rem;
				&:hover {
					background-color: rgba(gray, 0.1);
				}
			}

			&.today .day-number:hover {
				background-color: #3fdd86;
				color: #ffffff;
			}
		}
	}

	.offset {
		display: flex;
		justify-content: center;
		position: absolute;
		top: -7%;
		left: 50%;
		width: 90%;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	.today .day-number{
		background-color: #3fdd86;
		color: #ffffff;
	}

	.selected-day {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		animation: bounce-button-in 0.45s 0s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
	}
</style>