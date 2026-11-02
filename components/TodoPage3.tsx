
"use client";

import { useEffect, useState } from "react";

const API_URL = "https://practice.amirm.me";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");

  // GET
  useEffect(() => {
    fetch(`${API_URL}/todos?limit=100`)
      .then((res) => res.json())
      .then((json) => setTodos(json.data));
  }, []);

  // POST
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

  // PATCH: update title
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

  // PATCH: change completed
  async function toggleTodo(todo: Todo) {
    const res = await fetch(`${API_URL}/todos/${todo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo.completed }),
    });

    if (!res.ok) return;

    const updated: Todo = await res.json();

    setTodos(
      todos.map((item) => (item.id === todo.id ? updated : item))
    );
  }

  // DELETE
  async function deleteTodo(id: number) {
    if (!confirm("مطمئنی؟")) return;

    const res = await fetch(`${API_URL}/todos/${id}`, {
      method: "DELETE",
    });

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

                <button
                  onClick={() => updateTodo(todo.id)}
                  disabled={!editTitle.trim()}
                >
                  Save
                </button>

                <button onClick={() => setEditingId(null)}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo)}
                />

                {todo.title}

                <button
                  onClick={() => {
                    setEditingId(todo.id);
                    setEditTitle(todo.title);
                  }}
                >
                  Edit
                </button>

                <button onClick={() => deleteTodo(todo.id)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}