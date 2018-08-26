const Dataset = require("./Dataset");

class Datasets {
  constructor() {
    this.functions = {
      sync: {}
    };
    this.getDatasets = function(environment) {
      const Dataset = new Datasets(environment);
      //get data from mongodb based on context
    };
  }
}
