// import bus from "./../bus.js";
var express = require("express");
var app = express();
module.exports = function(message) {
  app.get("/log/console/:message", function(req, res) {
    console.log("MESSAGE: ", message);
    res.send(message);
  });
  return;
};
