const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  name: {
    type: String,
    //this should be a regexp
    min: [3, "Name too short"],
    max: [10, "Name too long"],
    required: [true, "Put your name"]
  },
  description: {
    type: String,
    min: [3, "Description too short"],
    max: [50, "Description too long"],
    required: [true, "Describe your post"]
  }
});

module.exports = mongoose.model("post", PostSchema);
