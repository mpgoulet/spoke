class Connector {
  constructor(client) {
    this.client = client;
    this.remote = client.remote;
  }
}

module.exports = Connector;
