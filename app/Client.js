var soap = require("strong-soap").soap;

class Client {
  constructor(environment) {
    this.environment = environment;
    this.createClient = function(environment) {
      return new Promise((resolve, reject) => {
        const client = soap.createClient(
          environment.url,
          {}, //options
          (err, client) => {
            if (client) {
              client.setSecurity(
                new soap.BasicAuthSecurity("mgoulet", "password") //TODO: Globalize security
              );
              console.log("1.1 Created client in " + environment.url);
              resolve(client);
            } else {
              console.log("1.1 ERROR in " + environment.url);
              console.log(err);
            }
          }
        );
      });
    };
    // var method = client["TririgaWS"]["TririgaWSPort"]["runNamedQuery"]; //TODO: Globalize parameters
    // method(
    //   environment.arguments,
    //   (err, result, envelope, soapHeader) => {
    //     const res = new XMLParse(envelope).xml2js;
    //     const queryData =
    //       res.runNamedQueryResponse.out.queryResponseHelpers
    //         .QueryResponseHelper.queryResponseColumns;
    //     //.QueryResponseColumn;
    //     const ds = getRows(
    //       res.runNamedQueryResponse.out.queryResponseHelpers
    //         .QueryResponseHelper
    //     );
    //     resolve(ds);
    //     function getRows(responseHelpers) {
    //       var result = [];
    //       const QueryHelpers = responseHelpers.forEach(responseHelper => {
    //         const row = getRow(responseHelper);
    //         function getRow(queryData) {
    //           var row = [];
    //           const thisRow = queryData.queryResponseColumns.QueryResponseColumn.forEach(
    //             field => {
    //               row.push(field);
    //             }
    //           );
    //           return row;
    //         }
    //         result.push(row);
    //       });
    //       return result;
    //     }
    //   } //methodfunct
    // ); //method
  }
}

module.exports = Client;
