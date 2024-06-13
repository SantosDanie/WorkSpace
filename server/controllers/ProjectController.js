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
async function updateProject(req, res, next) {
	const pageId	= req.params.id;
	const updated	= req.body;
	try {
		const project = await Project.findById(pageId);
		if (!project) {
			const err = new Error("Could not find page by id.");
			err.statusCode = 404;
			throw err;
		} 
		if(project) {
			project.title		= updated.title;
			project.progress	= updated.progress;
			project.deadline	= updated.deadline;
			project.details		= updated.details;
			project.members		= updated.members;
			project.files		= updated.files;
			project.settings	= updated.settings;

			const savedPage = await project.save();
			res.status(200).json({
				message: "Updated page successfully.",
				page: savedPage,
			});
		}
	} catch (err) { next(err); }
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