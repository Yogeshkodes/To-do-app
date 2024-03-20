const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluter0.f3qlbuo.mongodb.net/todos",
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
