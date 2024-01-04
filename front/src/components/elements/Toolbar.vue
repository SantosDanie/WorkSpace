<template>
	<div class="popoverTextBlock" id="toolbar" :style="ToolbarPosition">
		<ul class="text-sm">
			<li class="toolbar_btn" data-command="bold" @click="updateText"><span class="fw-bold">B</span></li>
			<li class="toolbar_btn" data-command="italic"><span class="fw-italic">I</span></li>
			<li class="toolbar_btn" data-command="line"><span class="text-decoration-line-through">S</span></li>
			<li class="toolbar_btn" data-command="code"><span>{{ `</>` }}</span></li>
			<li class="toolbar_btn" data-command="color"><span>Color</span></li>
			<li class="toolbar_btn" data-command="comment"><span>Comment</span></li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	const ToolbarPosition	= ref();
	const props				= defineProps({
		blocks: {
			type: Object,
			required: true
		}
	})
	
	document.addEventListener("mouseup", (event) => {
		const blocks = document.getElementById('blocks');
		if (!blocks) { return }

		let text = getSelectedText();
		if(text !== '' && text !== ' ' && blocks.contains(event.target as HTMLDivElement) == true) {
			let position	= getSelectedPosition();
			let toolbar		= document.querySelector('#toolbar');
			let width		= 0;
			if(toolbar	!= null) { width = 150; }
			if(position	!= null) {
				ToolbarPosition.value =		`top:	${position.top-45}px;`;
				ToolbarPosition.value +=	`left:	${position.left-width}px;`;
				ToolbarPosition.value +=	`display: block;`;
			}
		} else {
			let toolbar	= document.querySelector('#toolbar');
			if(toolbar	!= null) {
				if(!toolbar.contains(event.target as Node)) {
					ToolbarPosition.value =		`top: 0px;`;
					ToolbarPosition.value +=	`left: 0px;`;
					ToolbarPosition.value +=	`display: none;`;
				}
			}
		}
	});
	
	function updateText(e: any) {
		if (e.detail > 1) {
			e.preventDefault();
			document.execCommand('bold', false, null);
		}
	}

	function getSelectedText() {
		if (window.getSelection()) {
			return window.getSelection()?.toString();
		} else if (document.getSelection) {
			return document.getSelection.createRange().text;
		}
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

	function selectionToHtml(text: string) {
		document.designMode = 'On';
		document.execCommand(text, false, '');
		document.designMode = 'Off';
	}
</script>

<style lang="scss">
	.popoverTextBlock {
		position: fixed;
		display: none;
		box-shadow: 0 0 2px 0px gray;
		border: 1px solid #b6b6b6;
		padding: 5px;
		border-radius: 3px;
		background-color: white;
		width: fit-content;
		z-index: 6;
		ul {
			padding: 0;
			margin: 0;
			display: flex;
			li {
				display: block;
				margin-left: 2.5px;
				margin-right: 2.5px;
				padding: 5px 10px;
				height: fit-content;
				border-radius: 5px;
				color: #2e2e2e;
				cursor: pointer;
				&:hover { background-color: rgba(#003cff, 0.15); }
				&.selected { background-color: rgba(#003cff, 0.15); }
			}
		}
	}

	.commentsBlock {
		position: fixed;
		// right:15px;
		border:1px solid gray;
		background-color: #fff;
		padding: 10px 15px;
		z-index: 5;
		border-radius: 5px;
	}
</style>