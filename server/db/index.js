var mongoose = require("mongoose");
var mongoUri = "mongodb://localhost/image-carousel";

mongoose.connect(mongoUri);

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to database");
});

module.exports.db = db;