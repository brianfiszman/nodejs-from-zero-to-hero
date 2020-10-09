const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { saltRounds } = require("../config/env");
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


UserSchema.pre("save", async function (next) {
  const user = await User.findOne({ username: this.username });

  if (user) throw new Error("User already exists"); 

  this.password = bcrypt.hashSync(this.password, saltRounds);

  next();  
});


UserSchema.statics.checkCredentials = async function (username, password) {
  user = await this.find({username});
  
  return bcrypt.hashSync(password, saltRounds) === user.password;
}

const User = mongoose.model("user", UserSchema);

module.exports = User;
