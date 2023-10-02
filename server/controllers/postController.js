const Post = require('../models/Post')
const fs = require('fs');

// Get Posts
async function getPosts(req, res){
	try {
		const posts = await Post.find()
		res.status(200).json(posts)
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}

// Get Post
async function getPost(req, res){
	const id = req.params.id
	try {
		const post = await Post.findById(id)
		res.status(200).json(post);
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}

// Create Post
async function createPost(req, res){
	const post = req.body
	const imagename = req.file.filename
	post.image = imagename
	try {
		await Post.create(post)
		res.status(201).json({ message: 'Post created successfully.' })
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
}

// Update Post
async function updatePost(req, res){
	const id = req.params.id
	let new_image = ''
	
	console.log(req.body);
	if (req.file) {
		new_image = req.file.filename

		try {
			fs.unlinkSync('./uploads/' + req.body.old_image)
		} catch (err) {
			console.log(err)
		}
	} else {
		new_image = req.body.old_image
	}

	const newPost = req.body
	newPost.image = new_image

	try {
		await Post.findByIdAndUpdate(id, newPost)
		res.status(200).json({ message: 'Post updated successufully.' })
	} catch (error) {
		res.status(400).json({ message: err.message })
	}
}

// Delete Post
async function deletePost(req, res){
	const id = req.params.id
	try {
		const post = await Post.findByIdAndDelete(id)
		if(post.image != '') {
			try {
				fs.unlinkSync('./uploads/' + post.image)				
			} catch (err) {
				console.log(err)
			}
		}
		res.status(200).json({ message: "Post deleted successfully."})
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}

module.exports = { getPosts, getPost, createPost, updatePost, deletePost }