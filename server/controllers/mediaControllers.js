const fs	= require("fs");
const path	= require("path");
const Topic = require('../models/Medias')
const User	= require("../models/User");

async function getMedias(req, res) {
	try {
		const id		= req.params.id
		const topics	= await Topic.find({userId: id})
		res.status(200).json(topics)
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}

async function getMedia(req, res) {
	const id = req.params.id
	try {
		const topic = await Topic.findById(id)
		res.status(200).json(topic);
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}

async function createMedia(req, res) {
	const topic = req.body;
	const file = req.file;
	try {
		let fileJson = {
			title:			topic.title,
			description:	topic.description,
			userId:			topic.userId,
			filename:		file.filename,
			path:			file.path
		}
		const media = await Topic.create(fileJson)
		res.status(201).json({ message: 'Topic created successfully.', media: media})
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
}

async function updateMedia(req, res) {
	const id		= req.params.id
	const newTopic	= req.body

	try {
		await Topic.findByIdAndUpdate(id, newTopic)
		res.status(200).json({ message: 'Topic updated successfully.' })
	} catch (error) {
		res.status(400).json({ message: err.message })
	}
}

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

const clearImage = (filePath) => {
	filePath = path.join(__dirname, "..", filePath);
	fs.unlink(filePath, (err) => console.log(err));
};

module.exports = { getMedias, getMedia, createMedia, updateMedia, deleteMedia, deleteAll }