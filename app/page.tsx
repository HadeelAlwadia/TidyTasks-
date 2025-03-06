// 📌 page.tsx (Homepage - Lists Tasks)
import Link from "next/link";
import { Itask } from "./@types";
import TaskItem from "./components/TaskItem";
import { Suspense } from "react";
import Loading from "./loading";

async function getTasks() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  return res.json();
}
  // 🔥 Assign priority dynamically based on the task ID
  const priorities = ["High", "Medium", "Low"];

export default async function HomePage() {
  const tasks = await getTasks();
  const tasksWithMockPri=tasks.map((task:Itask)=>({...task,priority:priorities[Number(task.id) % 3]}))

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">

      <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Task</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
     <Suspense fallback={<Loading/>}>
     {tasksWithMockPri.map((task:Itask) => <TaskItem task={task} key={task.id}/>)}
      </Suspense>        
        </div>
    </div>
  </div>
  </div>


  );
}