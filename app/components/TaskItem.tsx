"use client"
import Image from "next/image";
import Link from "next/link";
import { Itask } from "../@types";

export default function TaskItem({ task }:{task:Itask}) {
  return (
    <li className="flex justify-between items-center bg-gray-200 p-2 rounded">
      <Link href={`/task/${task.id}`} className="flex items-center">
      
        <Image
          src={task.completed ? "/checkmark.png" : "/clock.png"}
          alt="status icon"
          width={20}
          height={20}
        />
        <span className="ml-2">{task.title}</span>
      </Link>
      <span className={task.completed ? "text-green-600" : "text-red-600"}>
        {task.completed ? "Completed" : "Pending"}
      </span>
    </li>
  );
}
