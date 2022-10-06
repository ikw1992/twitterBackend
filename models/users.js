const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: String,
  username: String,
  password: String,
  token: String,
  image: String,
  tweet: [{ type: mongoose.Schema.Types.ObjectId, ref: "twets" }],
});

const User = mongoose.model("users", userSchema);

module.exports = User;
