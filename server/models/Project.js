const mongoose		= require('mongoose')
const Schema		= mongoose.Schema
const projectSchema	= Schema({
	blocks:			{ type: Object, default: null },
	settings:		{ type: Object, default: null },
	changes:		{ type: Object, default: null },
	name:			{ type: String, required: true },
	image:			{ type: String, default: null }
}, {
	virtual:		{ id: { get() { return this._id }} },
	timestamps:		{ createdAt: 'created_at', updatedAt: 'updated_at' },
	versionKey:		false
})
module.exports		= mongoose.model('Project', projectSchema)