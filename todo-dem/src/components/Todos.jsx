import React from "react";
import { useEffect, useState } from "react";

const Todos = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const saveInfo = () => {
    // call api to save this info in backend.
    fetch("  http://localhost:8080/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        text: newTodo,
        isCompleted: false,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        setTodos([...todos,d]);
        setNewTodo("");
      });
  };

  useEffect(() => {
    fetch("http://localhost:8080/todos")
      .then((r) => r.json())
      .then((d) => {
        setTodos(d);
      });
  }, []);

  return (
    <div>
      Todos
      <div>
        <div>
          <input
            value={newTodo}
            onChange={({ target }) => setNewTodo(target.value)}
          />
          <button onClick={saveInfo}>+</button>
        </div>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.text}
          {/* <edit></edit>
          <delete/> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
