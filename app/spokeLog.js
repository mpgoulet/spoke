var express = require("express");
var router = express.Router();

// // router.get("/", function(req, res) {
// //   res.send(writeConsole(req));
// // });

// router.route("/:message").post(function(req, res, next) {
//   // var message = req.params.message;
//   // console.log(message);
// });

// Home page route.

router.route("/console").post(function(req, res) {
  // res.send("Done here");
  console.log("CONSOLE ENDPOINT CALLED");
  res.send(req.param.message);
});

module.exports = router;
