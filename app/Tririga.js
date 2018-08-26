// Tririga.js - Tririga route module.

var express = require("express");
var router = express.Router();
const log = require("./Log");

const TririgaFunctions = require("./TririgaFunctions");
const Datasets = require("./Datasets");

this.datasets = function(environment) {
  const Datasets = new Datasets();
  const datasets = Datasets.getDatasets(environment);
  return dataset;
};

function tririga(environment) {
  const TririgaFunctions = require("./TririgaFunctions");

  const remoteFunctions = new TririgaFunctions();
  const remote = remoteFunctions.getFunctions(environment);

  return remote;
}

const asyncHandler = require("express-async-handler");

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    var environment = {
      url: "http://10.211.55.3:8001/ws/TririgaWS?wsdl",
      context: "tririga-dev",
      name: "TRIRIGA Dev"
    };
    var request = {
      arguments: {
        moduleName: "Location", //Location
        objectTypeName: "triSpace", //triSpace
        queryName: "triSpace - SOAP Test 1", //triSpace - SOAP Test 1
        start: 1,
        maximumResultCount: 999
      }
    };
    console.log("Client started...");
    const client = await tririga(environment);

    const query = await client.runNamedQuery(
      request,
      (err, result, envelope, soapHeader) => {
        console.log(envelope);

        res.json(envelope);
      }
    );
  })
);

router.get("/", function(req, res) {});

module.exports = router;
