const mongoose = require('mongoose');

async function connect(){
	try {
		await mongoose.connect(process.env.DATABASE_URI, {
		  useUnifiedTopology: true,
		  useNewUrlParser: true
		});
		// await mongoose.connect(process.env.DATABASE_URI);
		// await mongoose.connect(process.env.DATABASE_URI,{useNewUrlParser:true})
		// .then(()=>{
		// 	console.log("MongoDB is Connected..")
		// }).catch(err=>{
		// 	console.log(err.message);
		// })
	} catch (error) {
		console.log(error)
	}
}

module.exports = connect