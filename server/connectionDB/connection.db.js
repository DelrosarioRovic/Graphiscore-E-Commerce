const dotenv = require("dotenv");
const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    dotenv.config(); // Load environment variables from a .env file

    const uri = process.env.MONGODB_URI; // MongoDB Atlas connection string from environment variable

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    // Continue with other setup tasks or return a success message
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // Handle the error as needed
  }
};

module.exports = connectToDatabase;
