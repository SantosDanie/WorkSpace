const mongoose		= require('mongoose')
const Schema		= mongoose.Schema
const postSchema	= Schema({
	title:			{ type: String, required: true },
	description:	{ type: String },
	userId:			{ type: String },
	filename:		{ type: String },
	path:			{ type: String }
}, {
	timestamps:		{ createdAt: 'created_at', updatedAt: 'updated_at' },
	versionKey:		false
})
module.exports		= mongoose.model('Medias', postSchema)