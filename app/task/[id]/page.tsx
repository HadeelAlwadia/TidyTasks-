
//[id]/page.tsx (Task Details Page)

import Button from "@/app/components/Button";
import TaskItem from "@/app/components/TaskItem";
import Loading from "@/app/loading";
import NotFound from "@/app/not-found";
import { Suspense } from "react";


async function getTask(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return res.ok? res.json():null;
}


export default async function TaskPage({ params }: { params: any }) {
  const task = await getTask(params.id);
  return (<>
    {
      !task ? <NotFound /> :

        <div style={{width:'30%', padding:'15px 15px', margin:'30px auto',height:'60vh', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}>
          <a href="/" className="block mt-4 text-white-800">Back to Tasks</a>
          <Suspense fallback={<Loading/>}>
          <TaskItem task={task}/>
          <Button title={task.title}/>
          </Suspense>
        
          </div>
    }

  </>)
}