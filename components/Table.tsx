"use client";
import { Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Task } from "@/lib/types";


type PriorityIF = 'low'| 'medium'|'high'

const Table = () => {
  const [task, setTask] = useState<Task[]>([
    {
      id: 1,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
      dueDate: "2024-09-12",
      status: "completed",
      priority: "medium",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
      dueDate: "2024-09-15",
      status: "in-progress",
      priority: "high",
    },
  ]);

  const PriorityHandler = (id: number, priority:PriorityIF)=>{

   setTask((prev)=> prev.map((item)=> item.id === id ? {...item, priority}: item))
  }

  return (
    <div className="border border-primary p-[2px]  rounded-md">
      <table className="w-full divide-y divide-gray-200 ">
        <thead className=" w-full bg-[#FFF9F8]  p-4">
          <tr className="font-light border-b border-primary py-4 text-xs">
            <th className="font-medium text-primary py-4">SL.No</th>
            <th className="font-medium text-primary py-4">Title</th>
            <th className="font-medium text-primary py-4 ">Description</th>
            <th className="font-medium text-primary py-4">Due Date</th>
            <th className="font-medium text-primary py-4">Status</th>
            <th className="font-medium text-primary py-4">Priority</th>
          </tr>
        </thead>
        <tbody className="w-full divide-y text-xs">
          {task.map((item) => (
            <tr key={item.id} className=" text-center align-middle p-12">
              <td className="py-4 ">{item.id}</td>
              <td className="py-4 text-wrap pr-2">{item.title}</td>
              <td className="py-4 pr-2   line-clamp-1"> {item.description}</td>
              <td className="py-4 pr-2 ">{item.dueDate}</td>

              <td className="pr-2 lg:px-4 py-3 ">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    item.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {item.status === "completed" ? "Completed" : "In Progress"}
                </span>
              </td>

              <td className="text-center align-middle py-4">
                <select className="block  lg:w-20 rounded-md border-gray-300 shadow-sm" value={item.priority} onChange={(e)=>PriorityHandler(item.id, e.target.value as PriorityIF)}>
                  <option value="low">low</option>
                  <option value="medium">medium</option>
                  <option value="high">high</option>
                </select>
              </td>
              <td className="px-2 py-4 ">
                <Pencil size={14} />{" "}
              </td>
              <td className="px-2 py-4 ">
                <Trash2 size={14} />{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
