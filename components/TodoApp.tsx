"use client";

import { useEffect, useState, type FormEvent } from "react";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const STORAGE_KEY = "simple-todo-app:tasks";

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setTodos(JSON.parse(saved));
    } catch {
      // localStorage が使えない環境では初期状態のまま
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos, isLoaded]);

  const addTodo = (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setTodos((prev) => [
      { id: crypto.randomUUID(), text, completed: false },
      ...prev,
    ]);
    setInput("");
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const remaining = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-brand-900/5 backdrop-blur-sm">
      <form onSubmit={addTodo} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="新しいタスクを入力..."
          className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
        />
        <button
          type="submit"
          className="shrink-0 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={!input.trim()}
        >
          追加
        </button>
      </form>

      <ul className="mt-6 flex flex-col gap-2">
        {todos.length === 0 && (
          <li className="py-10 text-center text-sm text-slate-400">
            タスクはまだありません
          </li>
        )}
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="group flex animate-fade-in items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3 transition hover:border-slate-200 hover:shadow-sm"
          >
            <button
              type="button"
              onClick={() => toggleTodo(todo.id)}
              aria-label={todo.completed ? "未完了に戻す" : "完了にする"}
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition ${
                todo.completed
                  ? "border-brand-600 bg-brand-600 text-white"
                  : "border-slate-300 text-transparent hover:border-brand-400"
              }`}
            >
              ✓
            </button>
            <span
              className={`flex-1 break-words text-sm transition ${
                todo.completed
                  ? "text-slate-400 line-through"
                  : "text-slate-700"
              }`}
            >
              {todo.text}
            </span>
            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
              aria-label="削除"
              className="shrink-0 rounded-lg px-2 py-1 text-slate-300 opacity-0 transition hover:bg-red-50 hover:text-red-500 group-hover:opacity-100"
            >
              削除
            </button>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <p className="mt-5 text-center text-xs text-slate-400">
          残り {remaining} / {todos.length} 件
        </p>
      )}
    </div>
  );
}
