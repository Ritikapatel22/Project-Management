const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect("mongodb+srv://rpa:Password123@cluster0.sxyrt.mongodb.net/Project_management?retryWrites=true&w=majority");

  console.log(`MongoDB Connected`.cyan.underline.bold);
};

module.exports = connectDB;