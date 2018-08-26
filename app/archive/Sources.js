// const SourceConfig = require("./sourceConfig");
// const sources = new SourceConfig();

const SourceModules = require("./SourceModules");

class Sources {
  constructor() {
    this.catalog = {
      sources: [
        {
          name: "TRIRIGA Development",
          remoteFunctions: [
            {
              name: "runNamedQuery",
              connection: { url: "http://10.211.55.3:8001/ws/TririgaWS?wsdl" },
              returnTypes: ["dataset"],
              arguments: {
                moduleName: "", //Location
                objectTypeName: "", //triSpace
                queryName: "", //triSpace - SOAP Test 1
                start: 1,
                maximumResultCount: 999
              },
              filters: {},
              execute: function() {
                this.options = {};
                //   soap.createClient(
                //     request.connection.url,
                //     this.options,
                //     (err, client) => {
                //       if (client) {
                //         client.setSecurity(
                //           new soap.BasicAuthSecurity("mgoulet", "password") //TODO: Globalize security
                //         );
                //       }
                //       var method = client["TririgaWS"]["TririgaWSPort"]["runNamedQuery"]; //TODO: Globalize parameters
                //       method(
                //         request.arguments,
                //         (err, result, envelope, soapHeader) => {
                //           const res = new XMLParse(envelope).xml2js;
                //           const queryData =
                //             res.runNamedQueryResponse.out.queryResponseHelpers
                //               .QueryResponseHelper.queryResponseColumns;
                //           //.QueryResponseColumn;
                //           const ds = getRows(
                //             res.runNamedQueryResponse.out.queryResponseHelpers
                //               .QueryResponseHelper
                //           );
                //           resolve(ds);
                //           function getRows(responseHelpers) {
                //             var result = [];
                //             const QueryHelpers = responseHelpers.forEach(responseHelper => {
                //               const row = getRow(responseHelper);
                //               function getRow(queryData) {
                //                 var row = [];
                //                 const thisRow = queryData.queryResponseColumns.QueryResponseColumn.forEach(
                //                   field => {
                //                     row.push(field);
                //                   }
                //                 );
                //                 return row;
                //               }
                //               result.push(row);
                //             });
                //             return result;
                //           }
                //         } //methodfunct
                //       ); //method
                //     } //client func
                //   );
              }
            },
            {
              name: "runDynamicQuery",
              remoteFunctions: [
                {
                  arguments: {
                    moduleName: "", //Location
                    objectTypeName: "", //triSpace
                    queryName: "", //triSpace - SOAP Test 1
                    start: 1,
                    maximumResultCount: 999
                  }
                }
              ]
            },

            { name: "httpSession" }
          ]
        }
      ]
    };
  }
}

const request = {
  name: "TRI DEV Run Query"
};

module.exports = Sources;
