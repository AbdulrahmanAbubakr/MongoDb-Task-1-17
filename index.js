// const { error } = require("console");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;
const userRoute = require("./routes/userRoute");
const todoRoute = require("./routes/todoRoute");
mongoose
  .connect("mongodb://127.0.0.1:27017/day3")
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.urlencoded({ extended: true }));
app.use("/users", userRoute);
app.use("/todos", todoRoute);

app.listen(port, () => console.log(`server is listening to port ${port}`));
