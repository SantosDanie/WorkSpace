const mongoose				= require("mongoose");
const Schema				= mongoose.Schema;
const notificationSchema	= new Schema({
	title:			{ type: String, default: null },
	type:			{ type: String, default: null },
	description:	{ type: String, default: null },
	userId:			{ type: String, default: null }
}, {
	timestamps:		{ createdAt: 'created_at' }
});
module.exports		= mongoose.model("Notification", notificationSchema)