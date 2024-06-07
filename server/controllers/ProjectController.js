const fs		= require('fs');
const Project	= require('../models/Project')

// Get Posts
async function getProjects(req, res) {
	try {
		const posts = await Project.find()
		res.status(200).json(posts)
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}

// Get Post
async function getProject(req, res) {
	const id = req.params.id
	try {
		const post = await Project.findById(id)
		res.status(200).json(post);
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}

// Create Post
async function createProject(req, res) {
	const project = req.body;
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
	// const id = req.params.id;
	// let new_image = ''
	
	// if (req.file) {
	// 	new_image = req.file.filename

	// 	try {
	// 		fs.unlinkSync('./uploads/' + req.body.old_image)
	// 	} catch (err) {
	// 		console.log(err)
	// 	}
	// } else {
	// 	new_image = req.body.old_image
	// }

	// const newPost = req.body
	// newPost.image = new_image

	// try {
	// 	await Post.findByIdAndUpdate(id, newPost)
	// 	res.status(200).json({ message: 'Post updated successfully.' })
	// } catch (error) {
	// 	res.status(400).json({ message: err.message })
	// }

	// console.log(req.body);
	const pageId = req.params.pageId;
	const updated = req.body;
	// const title = req.body.title;

	try {
		const page = await Page.findById(pageId);
		if (!page) {
			const err = new Error("Could not find page by id.");
			err.statusCode = 404;
			throw err;
		} else {
			page = updated;
			const savedPage = await page.save();
			res.status(200).json({
				message: "Updated page successfully.",
				page: savedPage,
			});
		}
	} catch (err) {
		next(err);
	}
}

// Delete Post
async function deleteProject(req, res) {
	const id = req.params.id
	try {
		const post = await Project.findByIdAndDelete(id)
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

module.exports = {
	getProject,
	getProjects,
	createProject,
	updateProject,
	deleteProject
}