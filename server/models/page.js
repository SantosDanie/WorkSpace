const mongoose		= require("mongoose");
const Schema		= mongoose.Schema;
const pageSchema 	= new Schema({
	title:		{ type: String, default: '' },
	blocks:		{ type: Object, default: null },
	creator:	{ type: Schema.Types.ObjectId, ref: "User" },
	settings:	{ type: Object, default: null },
}, { timestamps: true });
module.exports		= mongoose.model("Page", pageSchema)