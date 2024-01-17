const todoController = require("../controllers/TodoController");
const express = require("express");
const route = express.Router();

// route.post("/", async (req, res) => {
//     try {
//   let { title, tags, name } = req.body;
//   let data = await todoController.createTodo(title, tags, name);
//   res.json("data is saved in database", data);
//     } catch (e) {
//       res.status(500).send("error");
//     }
// });

route.patch("/:id", async (req, res) => {
  try {
    let _id = req.params.id;
    let title = req.body.title;
    let data = await todoController.updateTodo(_id, title);
    console.log(data);
    if (data) {
      res.status(200).send("done");
    } else {
      console.log("error");
      res.status(404).send("Todo not found");
    }
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal server error");
  }
});
route.delete("/:id", async (req, res) => {
  try {
    let _id = req.params.id;

    let data = await todoController.deleteTodo(_id);
    console.log(data);
    if (data) {
      res.status(200).send(data);
    } else {
      console.log("error");
      res.status(404).send("Todo not found");
    }
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal server error");
  }
});
route.get("/all-todos", async (req, res) => {
  try {
    let data = await todoController.getAllTodos();
    if (data) {
      res.send(data);
    } else {
      res.status(403).send("not found");
    }
  } catch (e) {
    res.status(500).send("server error");
  }
});
module.exports = route;
