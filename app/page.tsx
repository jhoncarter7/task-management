import Filter from "@/components/Filter";
import Sorting from "@/components/Sorting";
import Table from "@/components/Table";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Plus, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="p-2 md:p-8 ">
      <div className="flex justify-between items-center">
        
       
      </div>
      <div className="flex justify-between items-center pb-12">
        <div className=" font-semibold space-y-4 text-center">
        <div className="border-[1px] rounded-sm flex flex-col  p-2 items-center tracking-widest">
          Studio137
          <span>LOGO</span>
        </div>
          <div className="tracking-wider">Tasks</div>
        </div>

        <div className="space-y-4">
        <Input icon={<Search size={20} />} placeholder="Search" />
          <div className="flex justify-between items-center gap-x-4">
          <Button className="bg-primary text-white" icon={<Plus />}>
            Add Task
          </Button>

          <Sorting />
          <Filter />
          </div>
        </div>
      </div>
      <div className="">
        <Table />
      </div>
    </div>
  );
}
