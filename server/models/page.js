const mongoose		= require("mongoose");
const Schema		= mongoose.Schema;
const pageSchema 	= new Schema({
	blocks:		{ type: Object, default: null },
	creator:	{ type: Schema.Types.ObjectId, ref: "User" },
	title:		{ type: String, required: true },
	pageType:	{ type: String, required: true },
}, { timestamps: true });
module.exports		= mongoose.model("Page", pageSchema)