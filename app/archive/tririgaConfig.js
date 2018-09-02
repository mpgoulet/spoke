module.exports = {
  name: "TRIRIGA Development",
  about: {},
  nodeModule: "Tririga",
  endpoint: "tririga",
  groups: [{ group: "TRIRIGA" }, { group: "IWMS" }],

  connection: {
    url: "http://10.211.55.3:8001/ws/TririgaWS?wsdl",
    triVersion: ""
  }
};
