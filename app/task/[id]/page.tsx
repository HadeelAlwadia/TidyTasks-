
//[id]/page.tsx (Task Details Page)

import Button from "@/app/components/Button";
import NotFound from "@/app/not-found";


async function getTask(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return res.ok? res.json():null;
}


export default async function TaskPage({ params }: { params: any }) {
  const task = await getTask(params.id);
  return (<>
    {
      !task ? <NotFound /> :
        <div>
          <h1 className="text-xl font-bold">Task Details</h1>
          <p className="mt-2">Title: {task.title}</p>
          <p>Status: {task.completed ? "✅ Completed" : "⏳ Pending"}</p>
           <Button title={task.title}/>
          <a href="/" className="block mt-4 text-blue-600">Back to Tasks</a>
        </div>
    }

  </>)
}