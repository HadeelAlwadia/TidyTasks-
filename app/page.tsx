// 📌 page.tsx (Homepage - Lists Tasks)
import Link from "next/link";
import { Itask } from "./@types";
import TaskItem from "./components/TaskItem";

async function getTasks() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  return res.json();
}

export default async function HomePage() {
  const tasks = await getTasks();
  return (
    <div>
      <h1 className="text-xl font-bold">Task Tracker</h1>
      <ul className="mt-4 space-y-2">
        {tasks.map((task:Itask) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>

  );
}