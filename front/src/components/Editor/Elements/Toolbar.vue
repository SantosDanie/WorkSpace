<template>
	<div class="toolbar-editor" :class="{'d-none': !openToolbar}" ref="toolbarStyle">
		<div class="toolbar-container">
			<button @click="execCommandEditor($event, 'bold')">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 64C0 46.3 14.3 32 32 32H80 96 224c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H96 80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V256 96H32C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64H112V224H224zM112 288V416H256c35.3 0 64-28.7 64-64s-28.7-64-64-64H224 112z"/></svg>
			</button>
			<button @click="execCommandEditor($event, 'italic')">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M128 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H293.3L160 416h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H90.7L224 96H160c-17.7 0-32-14.3-32-32z"/></svg>
			</button>
			<button @click="execCommandEditor($event, 'underline')">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128V224c0 53 43 96 96 96s96-43 96-96V96H304c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V224c0 88.4-71.6 160-160 160s-160-71.6-160-160V96H48C30.3 96 16 81.7 16 64zM0 448c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"/></svg>
			</button>
			<button @click="execCommandEditor($event, 'strike')">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M161.3 144c3.2-17.2 14-30.1 33.7-38.6c21.1-9 51.8-12.3 88.6-6.5c11.9 1.9 48.8 9.1 60.1 12c17.1 4.5 34.6-5.6 39.2-22.7s-5.6-34.6-22.7-39.2c-14.3-3.8-53.6-11.4-66.6-13.4c-44.7-7-88.3-4.2-123.7 10.9c-36.5 15.6-64.4 44.8-71.8 87.3c-.1 .6-.2 1.1-.2 1.7c-2.8 23.9 .5 45.6 10.1 64.6c4.5 9 10.2 16.9 16.7 23.9H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H270.1c-.1 0-.3-.1-.4-.1l-1.1-.3c-36-10.8-65.2-19.6-85.2-33.1c-9.3-6.3-15-12.6-18.2-19.1c-3.1-6.1-5.2-14.6-3.8-27.4zM348.9 337.2c2.7 6.5 4.4 15.8 1.9 30.1c-3 17.6-13.8 30.8-33.9 39.4c-21.1 9-51.7 12.3-88.5 6.5c-18-2.9-49.1-13.5-74.4-22.1c-5.6-1.9-11-3.7-15.9-5.4c-16.8-5.6-34.9 3.5-40.5 20.3s3.5 34.9 20.3 40.5c3.6 1.2 7.9 2.7 12.7 4.3l0 0 0 0c24.9 8.5 63.6 21.7 87.6 25.6l0 0 .2 0c44.7 7 88.3 4.2 123.7-10.9c36.5-15.6 64.4-44.8 71.8-87.3c3.6-21 2.7-40.4-3.1-58.1H335.1c7 5.6 11.4 11.2 13.9 17.2z"/></svg>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref }			from "vue";
	import { v4 as uuidv4 }	from 'uuid'

	const openToolbar	= ref<Boolean>(false);
	const toolbarStyle	= ref<HTMLDivElement>();
	const emit			= defineEmits(['createComment']);

	let waitForElSelected = function(selector: any, callback: any) {
		if (document.querySelector(selector) != null) {
			callback();
		} else {
			setTimeout(function() {
				waitForElSelected(selector, callback);
			}, 100);
		}
	}

	waitForElSelected('#blocks', () => {
		document.querySelector('#blocks')?.addEventListener('mouseup', () => {
			const selection = window.getSelection()?.toString();
			if (selection !== '' && selection !== ' ') {
				const position = getPositionSelected();
				openToolbar.value				= true;
				toolbarStyle.value!.style.top	= position != undefined ? `${position.y-45}px` : '';
				toolbarStyle.value!.style.left	= position != undefined ?  `${position.x}px`: '';
			} else {
				openToolbar.value = false;
			}
		});

		document.addEventListener('mouseup', () => {
			const selection = window.getSelection()?.toString();
			if(selection == '' || selection == ' ') { openToolbar.value = false; }
		});
	});

	function getPositionSelected() {
		let s = window.getSelection();
		let oRange = s?.getRangeAt(0);
		let oRect = oRange?.getBoundingClientRect();
		return oRect;
	}

	function execCommandEditor(event: any, command: string) {
		event.preventDefault();
		if(command == 'bold') {
			document.execCommand("bold");
		} else if(command == 'italic') {
			document.execCommand("italic");
		} else if(command == 'underline') {
			document.execCommand("underline");
		} else if(command == 'strike') {
			document.execCommand("strikeThrough");
		} else if(command == 'link') {
			// if(isLink() == true) {
			// 	document.execCommand("unlink", false);
			// } else {
			// 	let linkURL	= prompt('Enter a URL:', 'http://');
			// 	let sText	= document.getSelection();
			// 	document.execCommand('insertHTML', false, '<a href="' + linkURL + '" target="_blank">' + sText + '</a>');
			// }
		} else if(command == 'comment') {
			const commentId = uuidv4();
			const sText = document.getSelection();
			document.execCommand('insertHTML', true, `<span class="comment-text" data-comment-id="${commentId}">${sText}</span>`);
			emit('createComment', commentId);
		}
	}
</script>

<style lang="scss">
	.toolbar-editor {
		background: white;
		width: fit-content;
		padding: 5px;
		box-shadow: 0 4px 12px #cfcfcf;
		border-radius: 5px;
		position: fixed;
		z-index: 5;
		.toolbar-container {
			display: flex;
			width: fit-content;
			button {
				padding: 5px;
				border-radius: 3px;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-right: 2.5px;
				margin-left: 2.5px;
				background: white;
				min-height: calc(1.875rem * 1);
				min-width: calc(1.875rem * 1);
				padding-block: 1px;
				padding-inline: 6px;
				aspect-ratio: 1 / 1;
				&:hover			{ background-color: #efefef; }
				&:first-child	{ margin-left: 0; }
				&:last-child	{ margin-right: 0; }
				svg { max-height: 13.5px; }
				svg { min-height: 13.5px; }
			}
		}
	}
</style>