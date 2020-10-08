const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    min: [3, "Username too short"],
    max: [10, "Username too long"],
    required: [true, "Put your username"],
  },
  password: {
    type: String,
    min: [3, "Password too short"],
    max: [10, "Password too long"],
    required: [true, "Put your password"],
  },
});

module.exports = mongoose.model("user", UserSchema);
