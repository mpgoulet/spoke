const Sources = require("./sourceConfig");
const sources = Sources.catalog;

class Sources {
  constructor(sourceRequest) {
    this.sourceRequest = sourceRequest;
    this.catalog = getSources(sourceRequest);
  }

  getSources = sourceRequest => {
    // console.log(sourceRequest);
  };
}

module.exports = Sources;
