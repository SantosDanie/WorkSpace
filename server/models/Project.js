const mongoose		= require('mongoose')
const Schema		= mongoose.Schema
const projectSchema	= Schema({
	title:			{ type: String, required: true },
	progress:		{ type: Number, default: 0 },
	deadline:		{ type: String, default: ''},
	user:			{ type: String, default: ''},
	details:		{ type: Object, default: null},
	members:		{ type: Object, default: null},
	files:			{ type: Object, default: null},
	settings:		{ type: Object, default: null}
}, {
	virtual:		{ id: { get() { return this._id }} },
	timestamps:		{ createdAt: 'created_at', updatedAt: 'updated_at' },
	versionKey:		false
})
module.exports		= mongoose.model('Project', projectSchema)