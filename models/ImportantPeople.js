const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  achievements: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // images: {
  //   type: Array,
  //   default: [],
  //   required: true,
  // },
  imgCover: {
    type: String,
    required: true,
  },
  Years: {
    type: String,
    required: true,
  },
  user: {
    type: Object,
    required: true,
    default: {},
  }
});

const ImportantPeople = mongoose.model("ImportantPeople", Schema);
module.exports = ImportantPeople;
