"use client";

import { X } from "lucide-react";
import React, { FormEvent, useEffect, useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { useModal } from "@/context/myContext";
import { Task } from "@/lib/types";

const TaskModel = () => {
  const { edit, setEdit, setOpenModel, setTask, task, editId } = useModal();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [status, setStatus] = useState<"completed" | "in-progress">();
  const AddTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !description.trim() || !date) {
      return;
    }
    const newId =
      task && task?.length > 0 ? Math.max(...task.map((t) => t.id)) + 1 : 1;
    const newTask: Task = {
      id: newId,
      title: title.trim(),
      description: description.trim(),
      dueDate: date,
      status: "in-progress",
      priority: "low",
    };
    setTask?.((prev) => [...prev, newTask]);

    setTitle("");
    setDescription("");
    setDate("");
    setOpenModel?.(false);
  };
  useEffect(() => {
    const data = task?.find((item: Task) => item.id === editId);
    if (data) {
      setTitle(data.title)
      setDescription(data.description)
      setDate(data.dueDate)      
      setStatus(data.status)
    }
  },[editId]);

  const EditTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("sort", editId);

    setTask?.((prev: Task[]) =>
      prev?.map((item: Task) =>
        item.id === editId
          ? { ...item, title, description, dueDate: date, status: status as "completed" | "in-progress"  }
          : item
      )
    );

    setEdit?.(false)
  };
  return (
    <div>
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0  w-screen ">
        <div className="flex justify-center items-center min-h-screen">
          <div className=" bg-white md:w-1/3 px-8 p-4 rounded-lg ">
            <div className="flex justify-between items-center pb-4">
              <h1 className="font-semibold text-lg">Add Task</h1>
              <div
                className="cursor-pointer "
                onClick={() =>
                  edit ? setEdit?.(false) : setOpenModel?.(false)
                }
              >
                <X />
              </div>
            </div>
            <form
              action=""
              onSubmit={edit ? EditTaskHandler : AddTaskHandler}
              className="space-y-3 text-sm"
            >
              <div className="">
                <label htmlFor="">Title</label>
                <Input
                  type="text"
                  className="py-1"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Description</label>
                <textarea
                  name=""
                  id=""
                  className="border-[1px] shadow-md rounded-lg h-20 p-2"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div>
                <label htmlFor="">Choose Due Date</label>
                <input
                  type="datetime-local"
                  className="border-2 p-2 text-sm rounded-lg w-full "
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              {edit && (
                <div className="min-w-full">
                  <label htmlFor="">Status</label>
                  <select
                    className="block  lg:w-20 rounded-md p-2 border-gray-300 shadow-sm min-w-full"
                    value={status}
                    onChange={(e)=> setStatus(e.target.value as "completed" | "in-progress")}
                  >
                    <option value="low">low</option>
                    <option value="medium">medium</option>
                    <option value="high">high</option>
                  </select>
                </div>
              )}
              <div className="flex justify-between w-full">
                <Button
                  className="border-[1px] border-primary text-center text-primary"
                  onClick={() =>
                    edit ? setEdit?.(false) : setOpenModel?.(false)
                  }
                >
                  Cancel
                </Button>
                <Button className="bg-primary text-white" type="submit">
                  {edit ? "Update Task" : "Add Task"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModel;
