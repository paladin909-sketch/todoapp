import TodoApp from "@/components/TodoApp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-12 sm:py-20">
      <div className="w-full max-w-md">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            📝 ToDo
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            今日やることを、シンプルに管理しよう
          </p>
        </header>
        <TodoApp />
      </div>
    </main>
  );
}
