<template>
	<dashboard>
		<Calendar :pages="pages"/>
	</dashboard>
</template>

<script setup lang="ts">
	import { computed, onMounted, ref }		from 'vue'
	import Dashboard						from '@/components/Dashboard.vue'
	import Calendar							from '@/components/Calendar.vue'
	import { useAuthStore } 				from '@/stores/auth';
	import { usePageStore }					from '@/stores/Page';

	const authStore		= useAuthStore();
	const UserId		= computed(() => authStore.user);
	const id			= UserId.value.id.toString();
	const PageStore		= usePageStore();
	const pages			= ref()

	onMounted(() => getPages());
	async function getPages() {
		await PageStore.getPages(id)
		.then(res	=> pages.value = res.pages)
		.catch(err	=> console.log(err.message));
	}
</script>