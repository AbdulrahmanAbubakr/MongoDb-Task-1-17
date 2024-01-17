const userController = require("../controllers/UserController");
const express = require("express");
const route = express.Router();
const bcrypt = require("bcrypt");

route.post("/register", async (req, res) => {
  try {
    let { name, email, password, firstName } = req.body;
    bcrypt.hash(password, 10, async (err, hash) => {
      let data = await userController.Register(name, email, hash, firstName);
      console.log(data);
      res.send("register is done");
    });
  } catch (e) {
    res.status(500).send("server error");
  }
});

route.post("/login", async (req, res) => {
  try {
    let { name, email } = req.body;
    let data = await userController.Login(name, email);
    // console.log(data);
    if (data) {
      res.send(data);
    } else res.send("error");
  } catch (e) {
    res.status(404).send("Not found");
  }
});
route.get("/", async (req, res) => {
  try {
    let data = await userController.getAllUsers();
    if (data) {
      const names = data.map((user) => user.name);
      res.json({
        users: names,
        status: 200,
        message: "Done",
      });
    }
  } catch (e) {
    res.status(500).send("Server  error");
  }
});
route.delete("/", async (req, res) => {
  try {
    let { name, email } = req.body;
    let data = await userController.deleteUser(name, email);
    res.send(data);
    console.log(data);
  } catch (e) {
    res.status(404).send("user is not found");
  }
});
route.patch("/:name", async (req, res) => {
  try {
    let { email, newName } = req.body;
    let name = req.params.name;
    let data = await userController.updateUser(name, newName, email);
    if (data) {
      res.json({
        user: data,
        status: 200,
        message: " user: theUserAfterEdit",
      });
    } else {
      console.log("error");
    }
  } catch (e) {
    res.status(404).send("user not found");
  }
});
module.exports = route;
