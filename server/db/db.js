const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.uri)

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
