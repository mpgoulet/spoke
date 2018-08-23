const Client = require("./Client.js");
const Field = require("./Field");

class Execute {
  constructor(request) {
    this.options = {};
    this.request = request;
    this.queryResult = "";
    this.executeQuery = function(request) {
      return new Promise((resolve, reject) => {
        const dataset = new Client(request);

        async function runQueryTwo() {
          const result = await dataset.createClient(request);
          resolve(result);
        }
        runQueryTwo();
        // console.log(queryResult);
        // resolve(queryResult);
        //
        // soap.createClient(
        //   request.connection.url,
        //   this.options,
        //   (err, client) => {
        //     if (client) {
        //       client.setSecurity(
        //         new soap.BasicAuthSecurity("mgoulet", "password") //TODO: Globalize security
        //       );
        //     }
        //     var method = client["TririgaWS"]["TririgaWSPort"]["runNamedQuery"]; //TODO: Globalize parameters
        //     method(
        //       request.arguments,
        //       (err, result, envelope, soapHeader) => {
        //         const res = new XMLParse(envelope).xml2js;
        //         const queryData =
        //           res.runNamedQueryResponse.out.queryResponseHelpers
        //             .QueryResponseHelper.queryResponseColumns;
        //         //.QueryResponseColumn;
        //         const ds = getRows(
        //           res.runNamedQueryResponse.out.queryResponseHelpers
        //             .QueryResponseHelper
        //         );
        //         // console.log(ds);
        //         // this.queryResult = ds;
        //         //return Promise
        //         resolve(ds);
        //         function getRows(responseHelpers) {
        //           var result = [];
        //           const QueryHelpers = responseHelpers.forEach(
        //             responseHelper => {
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
        //             }
        //           );
        //           return result;
        //         }
        //       } //methodfunct
        //     ); //method
        //   } //client func
        // ); //create client
        //
      }); //promise
    }; //execute query
  } //constr
} //execute

module.exports = Execute;

//*** */
//   } else {
//     console.log("Could not create Client"); //TODO - add this condition back
//   }
// });
