var mongoose = require("mongoose");

var imageSchema = new mongoose.Schema({
  numOfImgs: Number,
  imageUrl: String,
});

var Images = mongoose.model('Image', imageSchema);

module.exports = Images;