<template>
	<div class="popoverTextBlock" :style="popoverPosition">
		<ul class="text-sm">
			<li class="toolbar_btn" data-toolbar="bold"><span class="fw-bold">B</span></li>
			<li class="toolbar_btn" data-toolbar="italic"><span class="fst-italic">I</span></li>
			<li class="toolbar_btn" data-toolbar="strike"><span class="text-decoration-line-through">S</span></li>
			<li class="toolbar_btn" data-toolbar="code"><span>{{ `</>` }}</span></li>
			<li class="toolbar_btn" data-toolbar="color"><span>Color</span></li>
			<li class="toolbar_btn" data-toolbar="comment"><span>Comment</span></li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import { onMounted, ref }			from 'vue'
	const popoverPosition	= ref();

	const props = defineProps({
		modelValue: { type: String, required: false }
	})

	const emit = defineEmits(['toolbar'])

	document.addEventListener('mouseup', (event) => {
		const blocks = document.getElementById('blocks');
		if (!blocks) { return }
		
		let text = getSelectedText();
		console.log(text);
		if(text !== '' && text !== ' ' && blocks.contains(event.target as HTMLDivElement) == true) {
			let position = getSelectedPosition();
			if(position != null) {
				popoverPosition.value =		`top:	${position.top-45}px;`;
				popoverPosition.value +=	`left:	${position.left-50}px;`;
				popoverPosition.value +=	`display: block;`;
			}
		} else {
			let containerToolbar = document.querySelector('.popoverTextBlock');
			if(containerToolbar != null) {
				if(!containerToolbar.contains(event.target as Node)) {
					popoverPosition.value =		`top: 0px;`;
					popoverPosition.value +=	`left: 0px;`;
					popoverPosition.value +=	`display: none;`;
				}
			}
		}
	})

	function getSelectedText() {
		// if (window.getSelection()) {
		// 	return window.getSelection()?.toString();
		// } else if (document.getSelection) {
		// 	// return document.getSelection.createRange().text;
		// }
		return '';
	}
	
	function getSelectedPosition() {
		let s		= window.getSelection();
		if(s != null) {
			let oRange	= s.getRangeAt(0);
			let oRect	= oRange.getBoundingClientRect();
			return oRect
		}
		return null;
	}

	onMounted(() => {
		let buttons = document.querySelectorAll('.toolbar_btn');
		buttons.forEach(btn => {
			btn.addEventListener('click', () => {
				let type = btn.getAttribute('data-toolbar');
				emit('toolbar', type);
			});
		});
	})
</script>

<style lang="scss">
	.popoverTextBlock { display: none; }
</style>