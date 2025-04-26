"use client";

import Filter from "@/components/Filter";
import Sorting from "@/components/Sorting";
import Table from "@/components/Table";
import TaskModel from "@/components/TaskModel";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useModal } from "@/context/myContext";
import { Task } from "@/lib/types";
import { Plus, Search } from "lucide-react";
import { useMemo, useState } from "react";

export default function Home() {
  const { task } = useModal();
  const { edit, openModel, setOpenModel } = useModal();
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const displayed = useMemo(() => {
    return task
      ?.filter((t) => t.title.toLowerCase().includes(search.toLowerCase()))
      .filter((t) => {
        if (!filter) return true;
        return t.priority === filter || t.status === filter;
      })
      .sort((a, b) =>
        sortOrder === "asc"
          ? a.dueDate.localeCompare(b.dueDate)
          : b.dueDate.localeCompare(a.dueDate)
      );
  }, [task, search, filter, sortOrder]);

  console.log("edit", edit);

  return (
    <div className="p-2 md:p-8 relative">
      <div className="flex justify-between items-center"></div>
      <div className="flex justify-between items-center pb-12">
        <div className=" font-semibold space-y-4 text-center">
          <div className="border-[1px] rounded-sm flex flex-col  p-2 items-center tracking-widest">
            Studio137
            <span>LOGO</span>
          </div>
          <div className="tracking-wider">Tasks</div>
        </div>

        <div className="space-y-4">
          <Input
            icon={<Search size={20} />}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex justify-between items-center gap-x-4">
            <Button
              className="bg-primary text-white"
              icon={<Plus />}
              onClick={() => setOpenModel?.(true)}
            >
              Add Task
            </Button>

            <Sorting setSortOrder={setSortOrder} />
            <Filter setFilter={setFilter} />
          </div>
        </div>
      </div>
      <div className="">
        {displayed && <Table displayed={displayed as Task[]} />}
        {edit && <TaskModel />}
        {openModel && <TaskModel />}
      </div>
    </div>
  );
}
