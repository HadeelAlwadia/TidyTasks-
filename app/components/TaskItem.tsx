"use client"
import Image from "next/image";
import Link from "next/link";
import { Itask } from "../@types";

export default function TaskItem({ task }:{task:Itask}) {
  return (
    <div  className="group relative">
    <img
      alt={''}
      src={task.completed?'/clock.jpg':'/checkmark.jpg'}
    height={'80%'}
    width={'100%'}
      className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
    />
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">
          <a href={`/task/${task.id}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {task.title}
          </a>
        </h3>
      </div>
      <p className="text-sm font-medium text-gray-900">Status: {task.completed ? "✅ Completed" : "⏳ Pending"}</p>
    </div>
  </div>


  );
}
