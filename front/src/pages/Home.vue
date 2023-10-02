<template>
	<Dashboard>
		<router-link :to="{name: 'create'}" class="card text-center p-5 link-hover">
			<h1 class="m-0">Create a work space</h1>
		</router-link>
	</Dashboard>
</template>

<script setup lang="ts">
	import Dashboard from '../components/Dashboard.vue'
</script>