const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    require: true,
    minLength: 5,
    maxLength: 20,
  },
  status: {
    type: String,
    default: "To_do",
  },
  tags: {
    type: [String],
    maxLength: 15,
  },
  createdAt: {
    type: Date,
  },
});
const Todo = mongoose.model("Todo", todoSchema);
Todo.createIndexes({ title: 1 });
module.exports = Todo;
