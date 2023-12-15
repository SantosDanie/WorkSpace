<template>
	<div class="button-container">
		<a href="#0">
			<button class="btn-sm btn btn-primary">Go to</button>
		</a>
		<div class="modal-form">
			<div class="border p-2 rounded form">
				<div class="input-group mb-3">
					<input type="text" class="form-control" placeholder="Title">
				</div>
				<div class="input-group mb-3">
					<input type="text" class="form-control" placeholder="Url">
				</div>
				<div class="row">
					<div class="col-6">
						<div class="input-group">
							<select class="form-select form-select-sm mb-3" >
								<option selected>Choice Size</option>
								<option value="btn-sm">Small</option>
								<option value="">Default</option>
								<option value="btn-lg">Large</option>
								<option value="btn-lg">Extra Large</option>
							</select>
						</div>
					</div>
					<div class="col-6">
						<select class="form-select form-select-sm mb-3">
							<option selected>Choice Color</option>
							<option value="btn-lg">Gray</option>
							<option value="">Green</option>
							<option value="btn-sm">Red</option>
							<option value="btn-sm">Yellow</option>
							<option value="btn-sm">Sky Blue</option>
							<option value="btn-sm">Light</option>
						</select>
					</div>
				</div>
				<div class="row">
					<div class="col-6">
						<div class="input-group">
							<select class="form-select form-select-sm mb-3">
								<option selected>Choice Style</option>
								<option value="btn-lg">Outline</option>
								<option value="btn-lg">Outline Full Width</option>
								<option value="btn-lg">Default</option>
								<option value="btn-lg">Default Full Width</option>
							</select>
						</div>
					</div>
					<div class="col-6">
						<select class="form-select form-select-sm mb-3">
							<option selected>Choice Position</option>
							<option value="btn-lg">Left</option>
							<option value="btn-sm">Center</option>
							<option value="btn-sm">Right</option>
						</select>
					</div>
				</div>
				<input type="button" class="btn btn-sm btn-primary" value="Save">
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { PropType, ref }		from "vue";
	import { BlockButton }			from "@/utils/types"
	import { markdownToHtml }		from '@/utils/utils'

	const BtnObject	= ref({
		value:'',
		url: '',
		class: '',
	})
	const props		= defineProps({
		block: {
			type: Object as PropType<BlockButton>,
			required: true,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
	});
</script>

<style lang="scss">
	.button-container {
		position: relative;
		.modal-form {
			background-color: rgba(#000, 0.2);
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 5;
			display: flex;
			justify-content: center;
			align-items: center;
			.form {
				width: 100%;
				max-width: 350px;
				background-color: white;
			}
		}
	}
</style>