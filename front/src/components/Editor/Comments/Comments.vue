<template>
	<div v-if="actionComment == 'all'" class="comments-container p-1 bg-light mt-1">
		<div class="all-comments">
			<p class="fw-bold">All Comments</p>
			<div class="comments" >
				<div v-for="comment, i in props.comments" :key="i" class="comment mb-2">
					<div class="comment-h">
						<div class="user-thumbnail">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
						</div>
						<div class="user-details">
							<h6 class="user-name">Santos</h6>
							<span class="update">{{ formatDate(comment.comment.updatedAt) }}</span>
						</div>
						<button class="trash-comment">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
						</button>
					</div>
					<div class="comment-b">
						<div class="body-content">{{ comment.comment.value }}</div>
						<div class="mt-2">
							<button class="mr-1" @click="editComment(comment.commentId)">Edit</button>
							<button class="mr-1" @click="replyComment(comment.commentId)">Reply</button>
						</div>
					</div>
					<!-- <div class="comment-reply">
						<div class="reply mt-2" v-for="reply, index in comment.replies" :key="index">
							<div class="comment-h">
								<div class="user-thumbnail">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
								</div>
								<div class="user-details">
									<h6 class="user-name">Santos</h6>
									<span class="update">{{ formatDate(reply.updatedAt) }}</span>
								</div>
							</div>
							<div class="comment-b">
								<div class="body-content">{{ reply.value }}</div>
								<div class="mt-2">
									<button class="mr-1" @click="editComment(reply)">Edit</button>
									<button class="mr-1" @click="editComment(reply)">Solved</button>
								</div>
							</div>
						</div>
					</div> -->
				</div>
			</div>
		</div>
	</div>
	<div v-else-if="actionComment == 'edit'" class="comment-container">
		<div class="comment">
			<div class="comment-h">
				<div class="user-thumbnail">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
				</div>
				<div class="user-details">
					<h6 class="user-name">Santos</h6>
					<span class="update">{{ formatDate(comment.comment.updatedAt) }}</span>
				</div>
				<!-- <button class="trash-comment">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
				</button> -->
			</div>
			<div class="comment-b">
				<div class="body-content" ref="editableCommentHTML" contenteditable="true">{{ comment.comment.value }}</div>
				<div class="mt-2">
					<button @click="replyComment(comment.commentId)" class="mr-1">Reply</button>
					<button @click="saveComment(comment.commentId)">Save</button>
				</div>
			</div>
			<div class="comment-reply">
				<div class="editor-reply">
					<div class="reply" ref="replyCommentHTML" contenteditable="true"></div>
					<button @click="saveReply(comment.commentId)">Save</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed, HtmlHTMLAttributes }	from 'vue';
	import { useAuthStore }		from '@/stores/auth';

	const authStore		= useAuthStore();
	const user			= computed(() => authStore.user);
	const actionComment	= ref<string>();
	const replyCommentHTML		= ref<HTMLDivElement>();
	const editableCommentHTML	= ref<HTMLDivElement>();
	const comment				= ref<object>({
		pageId:	'65e634b02c4ad64fea1a7d55',
		commentId: '',
		comment: {
			createdAt: new Date(),
			updatedAt: new Date(),
			value: '',
			author: user.value.id,
		},
		replies: [
			// {
			// 	replyId: '',
			// 	createdAt: new Date(),
			// 	updatedAt: new Date(),
			// 	value: '',
			// 	author: user.value.id,
			// }
		]
	});

	const props					= defineProps({ comments: { type: Object, required: true }, });
	const emit					= defineEmits(['saveComment']);

	let waitForEl = function(selector: any, callback: any) {
		if (document.querySelector(selector) != null) {
			callback();
		} else {
			setTimeout(function() {
				waitForEl(selector, callback);
			}, 100);
		}
	}

	document.querySelector('#all-comments')?.addEventListener('click', (e) => {
		e.preventDefault();
		if(actionComment.value !== 'all') {
			actionComment.value = 'all';
		} else {
			actionComment.value = '';
		}
	});

	waitForEl('.comment-text', () => {
		document.querySelectorAll('.comment-text')?.forEach((item, index) => {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				let commentID		= item.dataset.commentId;
				let data			= props.comments.find((item: { commentId: any; }) => item.commentId == commentID);
				console.log(data);
				// if(data) {
				// 	// comment.value		= data;
				// }
				actionComment.value	= 'edit';
			});
		});
	});

	function formatDate(date: string) {
		let d = new Date(date);
		let dateString = d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()+" "+d.toLocaleTimeString();
		return dateString;
	}

	function saveComment(id: string) {
		props.comments.find((item: {comment: any; commentId: any; }) => {
			if(item.commentId == id) {
				item.comment.value		= editableCommentHTML.value?.innerText;
				item.comment.updatedAt	= new Date();
			}
		});
		emit('saveComment');
	}

	function saveReply() {
		replyCommentHTML.value?.innerText;
	}

	function replyComment(id: string) {
		actionComment.value = 'edit';
	}

	function createComment(id: string) {
		comment.value.commentId	= id;
		props.comments.push(comment.value);
		actionComment.value = 'edit'; 
	}

	defineExpose({ createComment })
</script>

<style lang="scss">
	.comment-container, .comments-container {
		position: absolute;
		top: 0;
		right: 0;
		width: 300px;
		z-index: 5;

		button {
			appearance: none;
			font-size: 14px;
			padding: 4px 5px;
			line-height: 16px;
			color: rgba(0, 0, 0, 0.85);
			background-color: #fff;
			border: 1px solid rgba(0, 0, 0, 0.2);
			border-radius: 4px;
		}

		.comment {
			border: 1px solid rgb(172, 171, 171);
			border-radius: 5px;
			padding: 10px;
			.comment-h {
				display: flex;
				.user-thumbnail {
					background-color: rgb(219, 219, 219);
					width: 100%;
					max-width: 25px;
					max-height: 25px;
					border-radius: 50%;
					svg {
						padding: 7px;
						width: 100%;
					}
				}

				.user-details {
					padding-left: 10px;
					.user-name	{ margin-bottom: 0;	}
					.update		{ font-size: 14px;	}
				}
			}

			.comment-b {
				margin-top: 5px;
				.body-content {
					padding: 5px;
					&[contenteditable=true] {
						box-shadow: 0 0 0px 1px rgba(gray, 0.5);
						border-radius: 3px;
						min-height: 50px;
					}
				}
			}

			.comment-reply { padding-top: 5px; }
		}
	}

	.body-content { color: #3b2f2f; }

	.editor-reply {
		display: flex;
		align-items: flex-end;
		.reply {
			width: calc(100% - 45px);
			min-height: 30px;
			border: 1px solid gray;
			border-radius: 5px;
			padding: 5px;
			color: #3b2f2f;
		}
		button { height: fit-content; }
	}
</style>