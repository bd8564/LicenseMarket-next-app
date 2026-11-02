"use client";

import { useEffect, useState } from "react";

const API_URL = "https://practice.amirm.me";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TodosPage1() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");

  // 1. GET: load all todos once, when the component first appears
  useEffect(() => {
    fetch(`${API_URL}/todos?limit=100`)
      .then((res) => res.json())
      .then((json) => setTodos(json.data));
  }, []);

  // 2. POST: send the new title to the API, then add the new todo to the list
  async function addTodo() {
    const res = await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    if (!res.ok) return; // e.g. 400 if the title is empty

    const newTodo: Todo = await res.json();

    setTodos([...todos, newTodo]);
    setTitle("");
  }

  return (
    <div>
      <h1>Todos</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task..."
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? "✅" : "⬜"} {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}