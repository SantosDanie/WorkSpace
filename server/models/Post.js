const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = Schema(
	{
		title:{
			type: String,
			required: true
		},

		description: {
			type: String
		},

		image: {
			type: String
		}	
	},
	{
		virtuals:{
			id: {
				get(){
					return this._id
				}
			}
		},
		timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
		versionKey: false
	},
)

module.exports = mongoose.model('Post', postSchema)