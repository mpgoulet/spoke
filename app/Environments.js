"use strict";
var Execute = require("./Execute");

class Environments {
  //code block
  constructor(name, key, components) {
    //reserved name, special keyword, that's why it's orange. can take params, name from outside and initialize here
    this.name = name;
    this.key = key;
    this.components = components;
  }
}

class TririgaEnvironment extends Environments {
  constructor(name, key, components, connection) {
    super(name, key, components, connection);
    this.connection = connection;
  }

  loadEnvironment() {
    this.components = "shitty";
    this.connection = "whatever";
  }
}

const environment = new TririgaEnvironment("TRIRIGA Dev", "tridev");
environment.loadEnvironment();

module.exports = environment;
