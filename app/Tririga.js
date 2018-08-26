const TririgaFunctions = require("./TririgaFunctions");
const Datasets = require("./Datasets");

class Tririga {
  constructor(environment) {
    this.environment = environment;
    this.remote = function(environment) {
      console.log("1.2 Started get remote");
      const TririgaFunctions = require("./TririgaFunctions");

      const remoteFunctions = new TririgaFunctions();
      const remote = remoteFunctions.getFunctions(environment);

      return remote;
      // return remoteFunctions.getfunctions(environment);
    };
    this.datasets = function(environment) {
      const Datasets = new Datasets();
      const datasets = Datasets.getDatasets(environment);
      return dataset;
    };
  }
}

module.exports = Tririga;

// async function getFunctions() {
//   const Tririga = require("./app/Tririga");
//   const connector = new Tririga();
//   const remote = await connector.remote({
//     url: "http://10.211.55.3:8001/ws/TririgaWS?wsdl"
//   });
//   console.log("remote", remote.TririgaWS);
//   // const Connector = require("./app/Connector");
//   // const triConnector = new Connector(client);
//   // console.log(triConnector.client.remote);
// }
// getFunctions();
