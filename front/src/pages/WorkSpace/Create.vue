<template>
	<Dashboard>
		<div class="row">
			<div class="col-12">
				
				<div class="flex">
					<div class="sticky top-0 h-screen overflow-y-auto bg-neutral-50">
						<Markdown :page="page" />
					</div>
					<div class="shrink-0 px-24 w-100 mx-auto box-border">
						<Lotion :page="page" :readonly="readonly" />
					</div>
				</div>

			</div>
		</div>
	</Dashboard>
</template>

<script setup lang="ts">
	import Dashboard from '@/components/Dashboard.vue'
	import { ref } from 'vue'
	import { BlockType } from '@/utils/types'
	import Lotion from '@/components/Lotion.vue'
	import Markdown from '@/components/Markdown.vue'
	import { v4 as uuidv4 } from 'uuid'

	const readonly = ref(false)

	const page = ref({
		name: 'Name Workspace',
		blocks: [{
			id: uuidv4(),
			type: BlockType.H1,
			details: { value: 'Get Started' },
		}, {
			id: uuidv4(),
			type: BlockType.Divider,
			details: {},
		}]
	});
</script>