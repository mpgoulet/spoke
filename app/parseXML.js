var xml2js = require("xml2js");
var builder = new xml2js.Builder();

class XMLParse {
  constructor(xml) {
    this.xml = xml;
    this.body = "";
  }
  get xml2js() {
    var options = {
      explicitArray: false,
      tagNameProcessors: [xml2js.processors.stripPrefix]
    };

    var thisResult = xml2js.parseString(this.xml, options, (err, result) => {
      if (err) {
        console.log("An error has occurred: " + err);
        return;
      }

      // Get the soap body object
      var soapBody = result.Envelope.Body;

      // Remove optional attribute(s) from <Body> element.
      if (soapBody.$) {
        delete soapBody.$;
      }
      //   console.log(soapBody);
      this.body = soapBody;
    });
    return this.body;
  }
}

module.exports = XMLParse;
