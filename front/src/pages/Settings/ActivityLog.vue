<template>
	<Dashboard>
		<div class="row p-5">
			<div class="col-12 text-center">
				<h3 class="fw-semibold">Activity Log</h3>
				<form style="max-width: 500px; margin: 0 auto;">
					<div class="input-group mb-3">
						<input type="text" class="form-control" placeholder="Search Activity">
						<span class="input-group-text">
							<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
						</span>
					</div>
				</form>
			</div>
			<div class="col-12 mt-3">
				<div class="notification d-flex border p-3" v-for="(notification, i) in notifications" :key="i">
					<div class="action">
						<button class="btn btn-sm btn-light p-1 d-flex">
							<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
								<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
							</svg>
						</button>
					</div>
					<div class="content px-3">
						<span class="badge text-bg-primary">{{ notification.type }}</span>
						<h6 class="fw-bold mb-1">{{ notification.title }}</h6>
						<p class="text-sm mb-1">{{ notification.description }}</p>
					</div>
					<div class="details ml-auto">
						<span class="text-sm">
							<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
								<path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
							</svg>
							{{ formateDate(notification.created_at) }}
						</span>
					</div>
				</div>
			</div>
		</div>
	</Dashboard>
</template>

<script setup lang="ts">
	import { ref, onMounted, computed }	from 'vue'
	import Dashboard					from '@/components/Dashboard.vue'
	import { useAuthStore } 			from '@/stores/auth'
	import { useNotificationStore }		from '@/stores/Notification'

	const NotificationStore		= useNotificationStore();
	const authStore				= useAuthStore();
	const UserId				= computed(() => authStore.user);
	const id					= UserId.value.id.toString();
	const notifications			= ref()
	const MONTHS				= ref(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])

	onMounted(() => { getNotification() })
	async function getNotification() {
		await NotificationStore.getNotifications(id)
		.then(res => notifications.value=res)
		.catch(err => console.log(err.message));
	}

	function formateDate(timestamp: string) {
		const date		= new Date(timestamp);
		const day		= date.getDate();
		const month		= date.getMonth();
		const year		= date.getFullYear();
		const hours		= date.getHours();
		const minutes	= date.getMinutes();
		const AMPM		= hours >= 12 ? 'PM' : 'AM';

		const formate	= `${day} ${MONTHS.value[month]} ${year} at ${hours}:${minutes} ${AMPM}`;
		return formate; 
	}
</script>

<style lang="scss">
	.callout {
		padding: 1.25rem;
		background-color: #f1f1f1;
		border-left: 5px solid #d6d6d6;
		color: #464646;
		code {
			font-size: .875em;
			color: #e685b5;
			word-wrap: break-word;
		}
	}
	.callout-info {
		color: #032830;
		background-color: rgba(#087990, 0.2);
		border-left-color: #1e778b;
	}
	.callout-danger {
		color: #5a1c21;
		background-color: rgba(#ea868f, 0.3);
		border-left-color: #a8303a;
	}
	.callout-warning {
		color: #997d20;
		background-color: rgba(#ffda6a, 0.2);
		border-left-color: #e9be31;
	}
	.callout-primary {
		color: #4e88e0;
		background-color: rgba(#4e88e0, 0.2);
		border-left-color: #4e88e0;
	}
</style>