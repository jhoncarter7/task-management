import Filter from "@/components/Filter";
import Sorting from "@/components/Sorting";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Plus, Search } from "lucide-react";


export default function Home() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center font-semibold gap-x-4">
          <div className="border-[1px] rounded-sm flex flex-col  p-2 items-center tracking-widest">
            Studio137
            <span>LOGO</span>
          </div>
          <div className="tracking-wider">Tasks</div>
        </div>

        <div className="flex justify-between items-center gap-x-4">
          <Button className="bg-primary text-white" icon={<Plus />}>Add Task</Button>
          <Input icon={<Search size={20}/>} placeholder="Search"/>
          
          <Sorting/>
          <Filter/>
        </div>
      </div>
    </div>
  );
}
