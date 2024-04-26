const Comment		= require('../models/Comments')

const getComments	= async(req, res) => {}
const getComment	= async(req, res) => {}
const createComment	= async(req, res) => {
	const comment = req;
	console.log(comment);
	// try {
	// 	const media = await Comment.create(fileJson)
	// 	res.status(201).json({ message: 'Comment created successfully.', media: media})
	// } catch (err) {
	// 	res.status(400).json({ message: err.message })
	// }
}
const putComment	= async(req, res) => {}
const deleteComment	= async(req, res) => {}
const deleteComments = async(req, res) => {}

exports.getComments		= getComments;
exports.getComment		= getComment;
exports.createComment	= createComment;
exports.putComment		= putComment;
exports.deleteComment	= deleteComment;
exports.deleteComments	= deleteComments;