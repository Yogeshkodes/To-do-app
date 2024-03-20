const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Yogeshkodes:%40RONALDo%4007%40@cluster0.axgl13t.mongodb.net/todos"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", todoSchema);

module.exports = {
  todo,
};
