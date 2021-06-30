const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  about: { type: String },
  category: { type: Array },
  youtube: { type: String },
  insta: { type: String },
  tiktok: { type: String },
});

module.exports = User = mongoose.model("user", userSchema);