"use strict";
var Execute = require("./Execute");

class Translator {
  //code block
  constructor(name, category) {
    //reserved name, special keyword, that's why it's orange. can take params, name from outside and initialize here
    this.name = name;
    this.category = category;
  }
  connect() {
    // console.log("trying toooo connect, i really am.");
  }
}

class TririgaTranslator extends Translator {
  constructor(name, moduleName, objectTypeName, queryName, connection) {
    super(name); //this will init the name prop, which comes from the parent class
    this.moduleName = moduleName;
    this.objectTypeName = objectTypeName;
    this.queryName = queryName;
    this.connection = connection;
  }

  translate() {
    const execute = new Execute(
        
      this.name,
      this.moduleName,
      this.objectTypeName,
      this.queryName,
      this.connection;
    );

    execute.run();

  }
}

const tririgaTranslator = new TririgaTranslator();
//   "Get TRI spaces",
//   "Locations",
//   "triSpace",
//   "triSpace - SOAP Test 1",
//   ""
// );

// console.log(tririgaTranslator.name);
// console.log(tririgaTranslator.moduleName);
// console.log(tririgaTranslator.objectTypeName);
// console.log(tririgaTranslator.queryName);

tririgaTranslator.translate();

module.exports = tririgaTranslator;

// var express = require("express");

// var todoRoutes = express.Router();

// var Todo = require("./Todo");

// // get all todo items in the db

// todoRoutes.route("/all").get(function(req, res, next) {
//   Todo.find(function(err, todos) {
//     if (err) {
//       return next(new Error(err));
//     }

//     res.json(todos); // return all todos
//   });
// });

// // add a todo item
// todoRoutes.route("/add").post(function(req, res) {
//   Todo.create(
//     {
//       name: req.body.name,
//       done: false
//     },
//     function(error, todo) {
//       if (error) {
//         res.status(400).send("Unable to create todo list");
//       }
//       res.status(200).json(todo);
//     }
//   );
// });

// // delete a todo item

// todoRoutes.route("/delete/:id").get(function(req, res, next) {
//   var id = req.params.id;
//   Todo.findByIdAndRemove(id, function(err, todo) {
//     if (err) {
//       return next(new Error("Todo was not found"));
//     }
//     res.json("Successfully removed");
//   });
// });

// // update a todo item

// todoRoutes.route("/update/:id").post(function(req, res, next) {
//   var id = req.params.id;
//   Todo.findById(id, function(error, todo) {
//     if (error) {
//       return next(new Error("Todo was not found"));
//     } else {
//       todo.name = req.body.name;
//       todo.done = req.body.done;

//       todo.save({
//         function(error, todo) {
//           if (error) {
//             res.status(400).send("Unable to update todo");
//           } else {
//             res.status(200).json(todo);
//           }
//         }
//       });
//     }
//   });
// });

//module.exports = todoRoutes;
module.exports = "hello";
