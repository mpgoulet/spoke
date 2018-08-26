var mongoose = require("mongoose");

// Define collection and schema for todo Item

var tririgaModel = new mongoose.Schema(
  {
    name: {
      type: String
    },

    datasets: {
      type: Array
    }
  },

  {
    collection: "todos"
  }
);

module.exports = mongoose.model("TririgaModel", tririgaModel);
