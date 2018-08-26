const soap = require("strong-soap").soap;
const XMLParse = require("./ParseXML");
const Client = require("./Client.js");

class TririgaFunctions {
  constructor() {
    this.getFunctions = function(environment) {
      async function getFunctions(environment) {
        const thisClient = new Client();
        const client = await thisClient.createClient(environment);
        return client.TririgaWS.TririgaWSPort;
      }
      return getFunctions(environment);
    };
  }
}
module.exports = TririgaFunctions;
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

//   }; //execute query

//   } //constr
// } //execute
