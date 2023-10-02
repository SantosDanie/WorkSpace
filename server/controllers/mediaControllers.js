const Topic = require('../models/Medias')

// Get Topics
async function getMedias(req, res) {
	try {
		const id = req.params.id
		const topics = await Topic.find({postId: id})
		res.status(200).json(topics)
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}

// Get Topic
async function getMedia(req, res) {
	const id = req.params.id
	try {
		const topic = await Topic.findById(id)
		res.status(200).json(topic);
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}

// Create Topic
async function createMedia(req, res) {
	const topic = req.body
	try {
		await Topic.create(topic)
		res.status(201).json({ message: 'Topic created successfully.' })
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
}

// Update Topic
async function updateMedia(req, res) {
	const id = req.params.id
	const newTopic = req.body

	try {
		await Topic.findByIdAndUpdate(id, newTopic)
		res.status(200).json({ message: 'Topic updated successfully.' })
	} catch (error) {
		res.status(400).json({ message: err.message })
	}
}

// Delete Topic
async function deleteMedia(req, res) {
	const id = req.params.id
	try {
		const post = await Topic.findByIdAndDelete(id)
		res.status(200).json({ message: "Topic deleted successfully."})
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}

async function deleteAll(req, res) {
	const id = req.params.id
	try {
		const post = await Topic.deleteMany({postId: id})
		res.status(200).json({ message: "Topic deleted successfully."})
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}

module.exports = { getMedias, getMedia, createMedia, updateMedia, deleteMedia, deleteAll }