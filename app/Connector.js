const Execute = require("./runQuery");
const parseString = require("xml2js").parseString;

class Connector {
  constructor(request) {
    this.request = request;
    // this.result = "";
    this.runQuery = function() {
      const execute = new Execute(this.request);
      async function runQueryTwo() {
        const queryResult = await execute.executeQuery(request);
        console.log(queryResult);
        //Process raw, JSON TRIRIGA query results
      }
      runQueryTwo(); //TODO: Correct how this is done
    };
  }
}

module.exports = Connector;
