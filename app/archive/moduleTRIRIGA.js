var soap = require("strong-soap").soap;
const XMLParse = require("./parseXML");

class Client {
  constructor(request) {
    this.request = request;
    this.client = "";
  }

  createClient(request) {
    return new Promise((resolve, reject) => {
      this.options = {};
      soap.createClient(
        request.connection.url,
        this.options,
        (err, client) => {
          if (client) {
            client.setSecurity(
              new soap.BasicAuthSecurity("mgoulet", "password") //TODO: Globalize security
            );
          }

          var method = client["TririgaWS"]["TririgaWSPort"]["runNamedQuery"]; //TODO: Globalize parameters
          method(
            request.arguments,
            (err, result, envelope, soapHeader) => {
              const res = new XMLParse(envelope).xml2js;

              const queryData =
                res.runNamedQueryResponse.out.queryResponseHelpers
                  .QueryResponseHelper.queryResponseColumns;
              //.QueryResponseColumn;
              const ds = getRows(
                res.runNamedQueryResponse.out.queryResponseHelpers
                  .QueryResponseHelper
              );
              resolve(ds);

              function getRows(responseHelpers) {
                var result = [];
                const QueryHelpers = responseHelpers.forEach(responseHelper => {
                  const row = getRow(responseHelper);
                  function getRow(queryData) {
                    var row = [];
                    const thisRow = queryData.queryResponseColumns.QueryResponseColumn.forEach(
                      field => {
                        row.push(field);
                      }
                    );

                    return row;
                  }
                  result.push(row);
                });
                return result;
              }
            } //methodfunct
          ); //method
        } //client func
      );
    });
  }
}

module.exports = Client;
