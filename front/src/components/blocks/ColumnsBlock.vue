<template>
	<div class="row-column">
		<div class="block-column" :style="columnStyle">
			<p><strong>Lorem ipsum</strong> dolor sit amet consectetur adipisicing elit. Adipisci et harum perspiciatis excepturi doloribus dolore, asperiores quisquam eveniet dolorum nemo debitis veniam recusandae neque molestias praesentium animi quis dolores fugiat!</p>
			<div class="columnSpacer" :style="spacerStyle"></div>	
		</div>
	</div>	
</template>
<script setup lang="ts">
	import { PropType, computed }		from "vue";
	import { BlockCheckList }			from "@/utils/types"

	const baseWidth		= 46;
	const props			= defineProps({
		block: {
			type: Object as PropType<BlockCheckList>,
			required: true,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
	});
	const  columnStyle	= computed(() => {
		const columns		= Number((1/2).toFixed(0));
		const totalWidth	= (columns - 1) * baseWidth;
		return { width: `calc((100% - ${totalWidth}px) * 0.5` }
	})
	const spacerStyle	= computed(() => ({ width: `${baseWidth}px`}));
</script>