const fs		= require('fs');
const Project	= require('../models/Project')

// Get Posts
async function getProjects(req, res) {
	try {
		const posts = await Post.find()
		res.status(200).json(posts)
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}

// Get Post
async function getProject(req, res) {
	const id = req.params.id
	try {
		const post = await Post.findById(id)
		res.status(200).json(post);
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}

// Create Post
async function createProject(req, res) {
	const project = req.body
	// const imagename = req.file.filename
	// project.image = imagename
	try {
		const savedPage = await Project.create(project)
		res.status(201).json({
			message: 'Project created successfully.',
			pageId: savedPage._id.toString(),
		})
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
}

// Update Post
async function updateProject(req, res) {
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
async function deleteProject(req, res) {
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

module.exports = { getProjects, getProject, createProject, updateProject, deleteProject }