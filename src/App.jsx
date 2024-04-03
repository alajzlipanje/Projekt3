import { useEffect } from "react";
import { useState } from "react";
import ShowTodos from "./ShowTodos.jsx";
import Todo from "./Todo.jsx";
import { AddTodo } from "./AddTodo.jsx";

export default function App() {
  const [todos, setTodos] = useState(["task1", "task2"]);

  function addTodo(title) {
    const novSeznam = [...todos, title];

    setTodos(novSeznam);
  }

  return (
    <>
      <AddTodo onAddTodo={addTodo}></AddTodo>
      <ShowTodos todos={todos}></ShowTodos>
    </>
  );
}
