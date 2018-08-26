var mongoose = require("mongoose");

// Define collection and schema for todo Item

var todo = new mongoose.Schema(
  {
    name: {
      type: String
    },

    done: {
      type: Boolean
    }
  },

  {
    collection: "todos"
  }
);

var dataset = new mongoose.Schema(
  {
    name: {
      type: String
    },

    dataset: {
      type: Array
    }
  },

  {
    collection: "datasets"
  }
);

module.exports = mongoose.model("Dataset", dataset);
