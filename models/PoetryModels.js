const mongoose = require("mongoose");

const PoetrySchema = new mongoose.Schema({
  poet: {
    type: String,
    required: [true, "Poet name  must be defined"],
    // default: "ad NAme",
  },
  data: {
    type: String,
    required: [true, "data name  must be defined"],
    // default: "add some Data",
  },
});
module.exports = mongoose.model("Poetry", PoetrySchema);