"use strict";

var express = require("express");

var spokeRoutes = express.Router();

var Spoke = require("./Spoke"); //mongoose schema

// get all todo items in the db
spokeRoutes.route("/all").get(function(req, res, next) {
  Spoke.find(function(err, datasets) {
    if (err) {
      return next(new Error(err));
    }
    res.json(datasets); // return all todos
  });
});

// add a todo item
spokeRoutes.route("/add").post(function(req, res) {
  var data = { name: "Building", data: ["Building1", "Building2"] };
  Spoke.create(
    {
      name: req.body.name,
      done: false,
      dataset: data
    },
    function(error, todo) {
      if (error) {
        res.status(400).send("Unable to create todo list");
      }
      res.status(200).json(todo);
    }
  );
});

// delete a todo item

spokeRoutes.route("/delete/:id").get(function(req, res, next) {
  var id = req.params.id;
  Spoke.findByIdAndRemove(id, function(err, todo) {
    if (err) {
      return next(new Error("Todo was not found"));
    }
    res.json("Successfully removed");
  });
});

// update a todo item

spokeRoutes.route("/update/:id").post(function(req, res, next) {
  var id = req.params.id;
  Spoke.findById(id, function(error, todo) {
    if (error) {
      return next(new Error("Todo was not found"));
    } else {
      todo.name = req.body.name;
      todo.done = req.body.done;
      todo.dataset = req.body.dataset;

      todo.save({
        function(error, todo) {
          if (error) {
            res.status(400).send("Unable to update todo");
          } else {
            res.status(200).json(todo);
          }
        }
      });
    }
  });
});

module.exports = spokeRoutes;
