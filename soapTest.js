var soap = require("strong-soap").soap;

//tririga wsdl
var url = "http://10.211.55.3:8001/ws/TririgaWS?wsdl";

var options = {};
var requestArgs = {
  moduleName: "Location",
  objectTypeName: "triSpace",
  queryName: "triSpace - SOAP Test 1",
  start: 1,
  maximumResultCount: 999
};
soap.createClient(url, options, (err, client) => {
  if (client) {
    //Basic Auth
    client.setSecurity(new soap.BasicAuthSecurity("system", "admin"));
    var method = client["TririgaWS"]["TririgaWSPort"]["runNamedQuery"];
    method(requestArgs, (err, result, envelope, soapHeader) => {
      //'result' is the response body
      console.log(
        "****** QUERY RESULT ******* Result: \n" +
          JSON.stringify(result, undefined, 5)
      );
    });
  } else {
    console.log("OH FUCK. Could not create Client");
  }
});
