"use client";

import { useEffect, useState } from "react";

const API_URL = "https://practice.amirm.me";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type User = {
  id: number;
  username: string;
};

export default function MyTodosPage() {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [todos, setTodos] = useState<Todo[]>([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  // 1. On first load: read the saved token (if any) from localStorage
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  // 2. Whenever the token changes: load my account, then my todos
  useEffect(() => {
    if (!token) return;

    async function loadAccount() {
      const res = await fetch(`${API_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        // token expired or invalid: forget it
        localStorage.removeItem("token");
        setToken(null);
        return;
      }
      setUser(await res.json());

      const todosRes = await fetch(`${API_URL}/me/todos`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await todosRes.json();
      setTodos(json.data);
    }

    loadAccount();
  }, [token]);

  // 3. Login: send username + password, save the token we get back
  async function login() {
    setError("");
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const json = await res.json();
    if (!res.ok) {
      setError(json.error);
      return;
    }

    localStorage.setItem("token", json.token);
    setToken(json.token);
    setPassword("");
  }

  // 4. Sign up: create the account, then log in with it
  async function register() {
    setError("");
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (!res.ok) {
      const json = await res.json();
      setError(json.error);
      return;
    }

    await login();
  }

  // 5. Create a todo for me: same as practice 1 + the Authorization header
  async function addTodo() {
    const res = await fetch(`${API_URL}/me/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title }),
    });
    if (!res.ok) return;

    const newTodo: Todo = await res.json();
    setTodos([...todos, newTodo]);
    setTitle("");
  }

  // 6. Logout: tell the server, then forget everything
  async function logout() {
    await fetch(`${API_URL}/auth/logout`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });

    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setTodos([]);
  }

  // Not logged in: show the login form
  if (!token) {
    return (
      <div>
        <h1>Login</h1>

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <button onClick={login}>Login</button>
        <br />
        <button onClick={register}>Sign up</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    );
  }

  // Logged in: show my account and my todos
  return (
    <div>
      <h1>Hello, {user?.username} 👋</h1>
      <button onClick={logout}>Logout</button>

      <h2>My todos</h2>
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