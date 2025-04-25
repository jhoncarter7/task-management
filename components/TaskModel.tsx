import {  X } from "lucide-react";
import React from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";

const TaskModel = (Edit:boolean) => {
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
            <div className="cursor-pointer "> 
            <X/>
            </div>
           </div>
           <form action="" className="space-y-3 text-sm">
            <div className="">
            <label htmlFor="">Title</label>
            <Input type="text" className="py-1" />
            </div>
           <div className="flex flex-col">
           <label htmlFor="">Description</label>
           <textarea name="" id="" className="border-[1px] shadow-md rounded-lg h-20 p-2"></textarea>
           </div>
           <div>
            <label htmlFor="">Choose Due Date</label>
            <input type="datetime-local" className="border-2 p-2 text-sm rounded-lg w-full " />
           </div>
           {
            Edit && <div>
                <label htmlFor="">Status</label>
                <select className="block  lg:w-20 rounded-md border-gray-300 shadow-sm" value="">
                  <option value="low">low</option>
                  <option value="medium">medium</option>
                  <option value="high">high</option>
                </select>
            </div>
           }
           <div className="flex justify-between w-full">
            <Button className="border-[1px] border-primary text-center text-primary">Cancel</Button>
            <Button className="bg-primary text-white">{Edit ? "Edit Task" :"Add Task"}</Button>
           </div>
           </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModel;
