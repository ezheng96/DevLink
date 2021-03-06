const mongoose = require('mongoose');
//get uri from the default config file
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    //this returns a promise
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    //err object has a message attribute
    console.log(err.message);
    //exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
