<template>
	<div class="header" v-if="props.activities == ''">
		<div class="info">
			<div class="year text-center">
				<h5 class="fw-bold">{{ props.calendar.year }}</h5>
			</div>
		</div>
		<div class="wrapper">
			<div class="left-chev chev" @click="prev">
				<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
			</div>
			<div class="month"><h2>{{ MONTHS[props.calendar.month] }}</h2></div>
			<div class="right-chev chev" @click="next">
				<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
			</div>
		</div>
	</div>
	<div class="header" v-else>
		<div class="info">
			<div class="year text-center">
				<h5 class="fw-bold">{{ props.calendar.year }}</h5>
			</div>
		</div>
		<div class="wrapper">
			<div class="left-chev chev" @click="returnCalendar">
				<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
			</div>
			<div class="month"><h2>{{ viewDate(props.activities) }}</h2></div>
			<div class="right-chev chev"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from "vue";

	const props				= defineProps({
		calendar: {
			type: Object,
			required: true,
		},
		activities: {
			type: String,
			required: true,
		}
	})
	const MONTHS			= ref(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
	const emit			= defineEmits([
		'calendar',
		'nextMonth',
		'prevMonth',
		'activities',
		'closeActivities'
	])

	function next() {
		emit('nextMonth');
	}

	function prev() {
		emit('prevMonth');
	}

	function returnCalendar() {
		emit('activities', '');
		emit('closeActivities')
	}

	function viewDate(formatDate: string) {
		const date		= new Date(formatDate);
		const day		= date.getDate();
		const month		= date.getMonth();
		const year		= date.getFullYear();
		const hours		= date.getHours();
		const formate	= `${day}/${month+1}/${year}`;
		return formate; 
	}
</script>

<style lang="scss">
	.header {
		display: flex;
		flex-direction: column;
		padding: 10px;
		background-color: antiquewhite;
		border-radius: 5px 5px 0 0;
		.wrapper{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20px 0;
			.month{
				h2{
					font-size: 32px;
					font-weight: bolder;
					letter-spacing: 5.5px;
				}
			}
			.chev{
				user-select: none;
				width: 40px;
				height: 40px;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;
				transition: background-color .5s;
				&:hover{
					background-color: rgb(243, 206, 158);
				}
				img{
					width: 100%;
					height: auto;
					transform: translateX(2px);
				}
			}
			.left-chev{
				transform: rotate(180deg);
			}
		}
	}
</style>