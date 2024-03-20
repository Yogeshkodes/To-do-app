const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mymongodb:*****@cluster0.1tzw9az.mongodb.net/");

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", todoSchema);

module.exports = {
  todo,
};
