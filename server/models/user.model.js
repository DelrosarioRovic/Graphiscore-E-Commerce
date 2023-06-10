const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  displayName: { type: String, required: true },
  password: { type: String },
  profilePicture: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;