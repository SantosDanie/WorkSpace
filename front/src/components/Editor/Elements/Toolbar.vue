<template>
	<div
		class="toolbar-editor"
		:class="{'d-none': !openToolbar}"
		ref="toolbarStyle">
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
			<button @click="execCommandEditor($event, 'link')">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>
			</button>
			<button @click="execCommandEditor($event, 'comment')">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref }			from "vue";
	import { v4 as uuidv4 }	from 'uuid'

	const openToolbar	= ref<Boolean>(false);
	const toolbarStyle	= ref<HTMLDivElement>();
	const props			= defineProps({ commentId: {type: String, default: ''} });
	const emit			= defineEmits(['createComment']);

	document.addEventListener('mouseup', () => {
		const selection = window.getSelection().toString();
		if (selection !== '' && selection !== ' ') {
			openToolbar.value = true;
			let position = getPositionSelected();

			toolbarStyle.value!.style.top = `${position.y - 45}px`;
			toolbarStyle.value!.style.left = `${position.x}px`;
		} else {
			openToolbar.value = false;
		}
	});

	function getPositionSelected() {
		let s = window.getSelection();
		let oRange = s.getRangeAt(0);
		let oRect = oRange.getBoundingClientRect();
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
			if(isLink() == true) {
				document.execCommand("unlink", false, false);
			} else {
				let linkURL	= prompt('Enter a URL:', 'http://');
				let sText	= document.getSelection();
				document.execCommand('insertHTML', false, '<a href="' + linkURL + '" target="_blank">' + sText + '</a>');
			}
		} else if(command == 'comment') {
			const commentId = uuidv4();
			const sText = document.getSelection();
			document.execCommand('insertHTML', true, `<span class="comment-text" data-comment-id="${commentId}">${sText}</span>`);
			emit('createComment', commentId);
		}
	}

	const isLink = () => {
		if (window.getSelection().toString !== '') {
			const selection = window.getSelection().getRangeAt(0)
			if (selection) {
				if (selection.startContainer.parentNode.tagName === 'A'
				|| selection.endContainer.parentNode.tagName === 'A') {
					return true
				} else { return false }
			} else { return false }
		}
	}

	const isComment = () => {
		if (window.getSelection().toString !== '') {
			const selection = window.getSelection().getRangeAt(0)
			if (selection) {
				if (selection.startContainer.parentNode.tagName === 'SPAN' || selection.endContainer.parentNode.tagName === 'SPAN') {
					if(selection.startContainer.parentNode.classList.contains('comment-text') || selection.startContainer.parentNode.hasAttribute('data-comment-id')) {
							return true;
					} else { return false; }
				} else { return false; }
			} else { return false }
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
				&:hover { background-color: #efefef; }
				&:first-child { margin-left: 0; }
				&:last-child { margin-right: 0; }

				svg {
					max-height: 13.5px;
					min-height: 13.5px;
				}
			}
		}
	}
</style>