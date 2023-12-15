<template>
	<div class="commentsBlock">
		<div class="create-comment">
			<div class="comment-head">
				<p class="mb-0 fw-bold text-sm">Create Comment</p>
			</div>
			<div class="comment-body border">
				<textarea class="p-1" style="width: 250px; min-height: 100px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. </textarea>
			</div>
			<div class="comment-footer mt-1">
				<button class="btn btn-sm btn-primary">Add</button>
			</div>
		</div>
		<div class="comment"></div>
		<div class="comment-replies"></div>
	</div>
</template>

<script setup lang="ts">
	console.log('data')
</script>