const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  userName: { type: String },
  socialName: { type: String},
  language: { type: Array },
  about: { type: String },
  category: { type: Array },
  youtube: { type: String },
  insta: { type: String },
  tiktok: { type: String },
  twitter: { type: String },
  photo: { type: String },
  resetLink: {
    data: String,
    default: ''
  }
});

module.exports = User = mongoose.model("user", userSchema);