const Execute = require("./Execute");

class Connector {
  constructor(requestArgs) {
    //req good here
    this.requestArgs = requestArgs;
    this.name = "TRIRIGA Dev";
    this.key = "tridev";
    this.connection = { url: "http://10.211.55.3:8001/ws/TririgaWS?wsdl" };

    this.connector = {
      local: {
        name: "Run Query",
        get data() {
          //req good
          const execute = new Execute(
            "this.connector.remote",
            requestArgs,
            //this.connection -ERROR
            { url: "http://10.211.55.3:8001/ws/TririgaWS?wsdl" }
          );
          const runQuery = execute.runData();

          runQuery.then(result => {
            console.log("YOYO" + result);
            console.log("keep going");
          });

          console.log("END");
        }
      }
    };
  }
}

const connector = new Connector();
const hey = connector.connector.local.data;
console.log("hey:" + hey);
//     local: {

//   } //end of connector
// } //end of class

module.exports = Connector;
