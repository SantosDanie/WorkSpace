<template>
	<Dashboard>
		<div class="row">
			<div class="col-12">
				<h1
					id="title"
					ref="title"
					:contenteditable="true"
					spellcheck="false"
					data-ph="Untitled"
					class="focus:outline-none focus-visible:outline-none text-5xl font-bold mb-12"
					:class="{'isEmpty': isEmpty == true}"
					@input="writeTitle($event.target.innerText)"
					@blur="page.name=($event.target as HTMLElement).innerText.replace('\n', '')"
					data-placeholder="Name Work Space">
					{{ page.name || '' }}
				</h1>
			</div>
			<div class="col-12">
				<div class="typeWorkSpae">
					<div class="dropdown" @click="isOpenDropdown">
						<p>{{ optionChoose }}</p>
						<div class="dropdown-option" :class="dropdownOpen==true ? `active`: ''">
							<span class="option" @click="optionSelected('option1', 'Only Workspace')" data-option="option1">Only Workspace</span>
							<span class="option" @click="optionSelected('option2', 'Workspace List')" data-option="option2">Workspace List</span>
							<span class="option" @click="optionSelected('option3', 'Workspace Review')" data-option="option3">Workspace Review</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 pt-5">
				<button class="btn btn-primary">Create Workspace</button>
			</div>
		</div>
	</Dashboard>
</template>

<script setup lang="ts">
	import Dashboard	from '@/components/Dashboard.vue'
	import { ref }		from 'vue'

	const title			= ref<string|null>(null);
	const isEmpty		= ref<Boolean>(true);
	const page			= ref({ name: title.value });

	function writeTitle(text: HTMLParagraphElement): void {
		if(text == '') { isEmpty.value = true; }
		if(text != '') { isEmpty.value = false; }
		page.value.name = text;
	}

	const dropdownOpen	= ref<Boolean>(false);
	const optionChoose	= ref<string>('Select Option');
	function isOpenDropdown(): void {
		if(dropdownOpen.value == false)	{
			dropdownOpen.value = true;
		} else {
			dropdownOpen.value = false;
		}
	}

	function optionSelected(option: string, label: string) {
		optionChoose.value = label;
	}
</script>

<style lang="scss">
	.isEmpty		{ color: rgba(gray, 0.5); }
	.isEmpty:after	{ content: attr(data-placeholder) }
	.typeWorkSpae .dropdown {
		padding: 5px 10px;
		background-color: rgba(gray, 0.15);
		border-radius: 5px;
		p { margin-bottom: 0; }
		position: relative;
		z-index: 5;
		cursor: pointer;
		.dropdown-option {
			display: none;
			position: absolute;
			top: 100%;
			background-color: rgb(235, 235, 235);
			width: calc(100% - 20px);
			padding: 15px;
			border-radius: 0 0 5px 5px;
			color: #000;
			span {
				width: 100%;
				display: block;
				border-radius: 3px;
				padding: 3px 5px;
				&:hover { background-color: rgba(gray, 0.2); }
			}
		}
		.dropdown-option.active { display: block; }
	}
</style>