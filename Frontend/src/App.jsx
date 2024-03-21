import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";
import { useState } from "react";

function App() {
  const [todos, settodos] = useState([]);

  return (
    <div>
      <CreateTodo />;
      <Todos todos={todos} />
    </div>
  );
}

export default App;
