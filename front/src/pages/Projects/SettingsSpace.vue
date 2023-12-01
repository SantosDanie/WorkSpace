<template>
	<Dashboard>
		<div class="row p-5">
			<div class="col-2">
				<h3 class="fw-bold mb-4">Settings</h3>
				<ul class="p-0 m-0">
					<li class="mb-2 d-flex align-items-center btn-settings" :class="{'btn-active-settings': scrollSpyVar=='notification-settings' && isHelpOpen==false}" @click="scrollSpy('notification-settings')">
						<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>
						<p class="mb-0 ml-2">Notification</p>
					</li>
					<li class="mb-2 d-flex align-items-center btn-settings" :class="{'btn-active-settings': scrollSpyVar=='shared-settings' && isHelpOpen==false}" @click="scrollSpy('shared-settings')">
						<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>
						<p class="mb-0 ml-2">Shared</p>
					</li>
					<li class="mb-2 d-flex align-items-center btn-settings" :class="{'btn-active-settings': scrollSpyVar=='calendar-settings' && isHelpOpen==false}" @click="scrollSpy('calendar-settings')">
						<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
						<p class="mb-0 ml-2">Calendar</p>
					</li>
					<li class="mb-2 d-flex align-items-center btn-settings" :class="{'btn-active-settings': isHelpOpen==true}" @click="isHelpOpen=!isHelpOpen">
						<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
						<p class="mb-0 ml-2">Help</p>
					</li>
				</ul>
			</div>
			<div class="col-10">
				<div id="notification-settings" v-if="isHelpOpen==false">
					<h2 class="fw-bold">Notification</h2>
					<div class="row">
						<div class="col-6">
							<h6 class="fw-bold">Comments</h6>
							<p>These are notification for comments on your WorkPage and replies to your comments</p>
						</div>
						<div class="col-6">
							<label>
								<input class="sr-only" type="checkbox" checked name="my-toggle" id="my-toggle" />
								<div class="slider"></div>
								<span class="label">Email</span>
							</label>
						</div>
					</div>
					<div class="row">
						<div class="col-6">
							<h6 class="fw-bold">WorkPage Changes</h6>
							<p>These are notification for Change on your WorkPage</p>
						</div>
						<div class="col-6">
							<label>
								<input class="sr-only" type="checkbox" checked name="my-toggle" id="my-toggle" />
								<div class="slider"></div>
								<span class="label">Email</span>
							</label>
						</div>
					</div>
					<div class="row">
						<div class="col-6">
							<h6 class="fw-bold">Shared WorkPage</h6>
							<p>People are notified that the work Page has been shared with them</p>
						</div>
						<div class="col-6">
							<label>
								<input class="sr-only" type="checkbox" checked name="my-toggle" id="my-toggle" />
								<div class="slider"></div>
								<span class="label">Email</span>
							</label>
						</div>
					</div>
				</div>
				<div id="shared-settings" v-if="isHelpOpen==false">
					<!-- <h2 class="fw-bold">Shared</h2> -->
				</div>
				<div id="calendar-settings" v-if="isHelpOpen==false">
					<!-- <h3 class="fw-bold">Calendar</h3> -->
				</div>
				<div id="help-settings" v-if="isHelpOpen">
					<h5 class="fw-bold mt-4">How to Save?</h5>
					<p>To save changes to the WorkPage, use the <span class="command">Control+s</span> command.</p>

					<h5 class="fw-bold mt-4">How to Delete?</h5>
					<p>To delete Work Page you must go to <button class="btn btn-sm btn-danger">Remove page</button> and write the page id</p>


					<h5 class="fw-bold mt-4 mb-3">Blocks</h5>
					<h6 class="fw-bold"><v-icon name="bi-text-left" class="w-5 h-5"/>Text</h6> 
					<p>This block allows writing inside an HTML(p) element.</p>

					<h6 class="fw-bold"><v-icon name="oi-heading" class="w-5 h-5"/>Heading (1, 2, 3, 4, 5, 6)</h6>
					<p>This block allows writing inside an HTML element (H1, H2, H3, H4, H5, H6)</p>

					<h6 class="fw-bold"><v-icon name="bi-hr" class="w-5 h-5"/>Divider</h6>
					<p>This block allows you to add a dividing line between one block and another.</p>

					<h6 class="fw-bold"><v-icon name="bi-quote" class="w-5 h-5"/>Quote</h6>
					<p>This block allows writing inside an HTML(p) element, with a border on the left side of the p element.</p>

					<h6 class="fw-bold"><v-icon name="md-image-outlined" class="w-5 h-5"/>Image</h6>
					<p>This block allows adding an image, in the worksheet, the image is added by selecting or pasting the image in the worksheet.</p>
				</div>
			</div>
		</div>
	</Dashboard>
</template>

<script setup lang="ts">
	import { ref }		from 'vue'
	import Dashboard	from '@/components/Dashboard.vue'

	const isHelpOpen	= ref<Boolean>(true)
	const scrollSpyVar	= ref<string>('')

	function scrollSpy(val:  string) {
		scrollSpyVar.value=val;
		isHelpOpen.value = false;
	}
</script>

<style lang="scss">
	.btn-settings {
		padding: 10px;
		border-radius: 10px;
		transition: 300sm;
		cursor: pointer;
		&:hover { background-color: rgba(#c4c4c4, 0.4); }
	}

	.btn-active-settings { background-color: rgba(#c4c4c4, 0.4); }
	.command {
		font-size: 12px;
		background-color: rgba(#000, 0.2);
		padding: 5px;
		border-radius: 5px;
	}

	// Checkbox
	label {
		display: inline-flex !important;
		align-items: center;
		gap: 0.75rem;
		cursor: pointer;

		--slide-distance: 1rem;
		--slider-size: 1rem;
		--slider-padding: 0.2rem;
		--transition-duration: 200ms;

		.slider {
			flex-shrink: 0;
			width: calc(var(--slider-size) + var(--slide-distance) + var(--slider-padding) * 2);
			padding: var(--slider-padding);
			border-radius: 50px;
			background-color: #d1d5db;
			transition: background-color var(--transition-duration);
	
			&::after {
				content: "";
				display: block;
				width: var(--slider-size);
				height: var(--slider-size);
				background-color: #fff;
				border-radius: 50px;
				transition: transform var(--transition-duration);
			}
		}

		input:checked + .slider {
			background-color: hsl(210deg, 100%, 40%);
			&::after { transform: translateX(var(--slide-distance)); }
		}

		input:focus-visible + .slider {
			outline-offset: 2px;
			outline: 2px solid hsl(210deg, 100%, 40%);
		}

		.sr-only {
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			white-space: nowrap;
			border-width: 0;
		}
	}
</style>
