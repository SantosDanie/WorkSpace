const mongoose = require('mongoose');

async function connect(){
  try {
    // await mongoose.connect(process.env.DATABASE_URI, {
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true
    // });
    await mongoose.connect(process.env.DATABASE_URI)
    .then(db => console.log("DB is connected!"))
    .catch(err => console.error(err));
  } catch (error) {
    console.log(error)
  }
}

module.exports = connect