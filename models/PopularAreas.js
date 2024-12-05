const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: Object,
    required: true,
    default: {}
  }
});
module.exports = mongoose.model("PopularAreas", Schema);