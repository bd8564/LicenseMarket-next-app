"use client";

import { useEffect, useState } from "react";

const API_URL = "https://practice.amirm.me";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TodosPage2() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");

  // 1. GET: load all todos once, when the page first appears
  useEffect(() => {
    fetch(`${API_URL}/todos?limit=100`)
      .then((res) => res.json())
      .then((json) => setTodos(json.data));
  }, []);

  // 2. POST: create a new todo (same as practice 1)
  async function addTodo() {
    const res = await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    if (!res.ok) return;

    const newTodo: Todo = await res.json();
    setTodos([...todos, newTodo]);
    setTitle("");
  }

  // 3. PATCH: change the title of one todo
  async function updateTodo(id: number) {
    const res = await fetch(`${API_URL}/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: editTitle }),
    });
    if (!res.ok) return;

    const updated: Todo = await res.json();
    setTodos(todos.map((todo) => (todo.id === id ? updated : todo)));
    setEditingId(null);
  }

  // 4. DELETE: remove one todo
  async function deleteTodo(id: number) {
    const res = await fetch(`${API_URL}/todos/${id}`, { method: "DELETE" });
    if (!res.ok) return;

    setTodos(todos.filter((todo) => todo.id !== id));
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
            {editingId === todo.id ? (
              <>
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <button onClick={() => updateTodo(todo.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {todo.completed ? "✅" : "⬜"} {todo.title}
                <button
                  onClick={() => {
                    setEditingId(todo.id);
                    setEditTitle(todo.title);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}