const Data = require("./Data");

class Dataset {
  constructor(environment) {
    this.data = new Data(environment);
    this.functions = { sync: {} };
  }
}
