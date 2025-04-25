"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ListFilter } from "lucide-react";
import React, { useEffect, useState } from "react";

const filterData = [
  "Priority-Hi",
  "Priority-Lo",
  "Priority-Med",
  "Status-InProgress",
  "Status-Comp",
];

const Filter = () => {
 const [innerWidth, setInnerWidth] = useState<number>(800)
  useEffect(()=>{
    setInnerWidth(window.innerWidth)
  },[])
  const FilterHandler = (e: string) => {
    console.log(e, window.innerWidth);
  };
  console.log( innerWidth);
  return (
    <div>
      <div className="flex gapx-2 justify-center items-center ">
        <Select name="" onValueChange={(e) => FilterHandler(e)} >
          <SelectTrigger value="" className="border-[1px] border-primary text-primary ">
            <ListFilter color={`#941B0F`}/>
           {innerWidth < 600 ? "": <SelectValue placeholder="Filter" className="hidden md:inline-block" />}
          </SelectTrigger>
          <SelectContent>
            {filterData.map((data, index) => (
              <SelectItem key={index} value={data}>
                {data}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Filter;
