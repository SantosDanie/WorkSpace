const mongoose		= require('mongoose')
const Schema		= mongoose.Schema
const postSchema	= Schema({
	pageId:			{ type: String, required: true },
	author:			{ type: String, required: true },
	comment: 		{ type: Object },
	replies:		{ type: Object }
}, {
	timestamps:		{ createdAt: 'created_at', updatedAt: 'updated_at' },
	versionKey:		false
})
module.exports		= mongoose.model('comments', postSchema)