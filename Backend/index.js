const express = require("express");
const { createTodo } = require("./type");
const { todo } = require("./db");
const app = express();
const port = 3000;

app.use(express.json());
app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    req.status(411).json({
      msg: "You send the Wrong Inputs",
    });
    return;
  }

  // Put it in  mongoDB

  await todo.create({
    titel: createPayload.titile,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo Created",
  });
});
app.get("/todos", async function (req, res) {
  const todos = await todo.find({});

  res.json({
    todos,
  });
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    req.status(411).json({
      msg: "You send the Wrong Inputs",
    });
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo marked as Completed",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
