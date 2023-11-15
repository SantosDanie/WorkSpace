<template>
	<div class="calendar p-5">
		<HeaderCalendar
		:calendar="calendar"
		:activities="dateActivities"
		@closeActivities="closeActivities()"
		@nextMonth="nextMonth"
		@prevMonth="prevMonth"/>

		<CalendarGrid
		:calendar="calendar"
		:activities="dateActivities"
		@viewActivities="activities => viewActivities(activities)"/>
	</div>
</template>

<script setup lang="ts">
	import { ref }          from 'vue'
	import HeaderCalendar	from '@/components/Calendar/HeaderCalendar.vue'
	import CalendarGrid		from '@/components/Calendar/calendarGrid.vue'

	const date				= new Date();
	const month 			= date.getMonth();
	const year				= date.getFullYear();
	const dateActivities	= ref<string>('');
	const start				= ref(new Date(year, month, 1).getDay());

	const calendar	= ref({
		year: year,
		month: month,
		days: getDaysMonth(month, year),
		start: start,
	})

	function nextMonth() {
		calendar.value.month++;

		if(calendar.value.month > 11) {
			calendar.value.month = 0;
			calendar.value.year++;
		}

		let days	= getDaysMonth(calendar.value.month, calendar.value.year);
		let startD	= new Date(calendar.value.year, calendar.value.month, 1).getDay();

		calendar.value.days		= days;
		calendar.value.start	= startD;
	}

	function prevMonth() {
		calendar.value.month--;

		if(calendar.value.month < 0) {
			calendar.value.month = 11;
			calendar.value.year--;
		}

		let days	= getDaysMonth(calendar.value.month, calendar.value.year);
		let startD	= new Date(calendar.value.year, calendar.value.month, 1).getDay();

		calendar.value.days		= days;
		calendar.value.start	= startD;
	}

	function getDaysMonth(month: number, year: number) {
		return new Date(year, month, 0).getDate();
	}

	function viewActivities(date: string) {
		dateActivities.value = date;
	}

	function closeActivities() {
		dateActivities.value = '';
	}
</script>

<style scoped lang="scss">
	main{
		width: 500px;
		padding-bottom: 30px;
		border-radius: 5px;
		background-color: azure;
		box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.5);
		@media(max-width: 500px){  width: 90vw; }
	}
</style>