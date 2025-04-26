"use client";

import React, { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { ArrowDownUp } from "lucide-react";

const SortData = [
  { label: "date-asc", value: "asc" },
  { label: "date-desc", value: "desc" },
];
const Sorting = ({
  setSortOrder,
}: {
  setSortOrder: Dispatch<SetStateAction<"asc" | "desc">>;
}) => {

  const SortHandler = (e: "asc" | "desc") => {
    setSortOrder(e);
  };
  return (
    <div>
      <div className="flex gapx-2 justify-center items-center ">
        <Select name="" onValueChange={(e) => SortHandler(e as "asc" | "desc")}>
          <SelectTrigger
            aria-placeholder=""
            className="border-[1px] border-primary text-primary "
          >
            <ArrowDownUp color={`#941B0F`} />
            <div  className="ml-2 hidden md:inline-block">
            <SelectValue
              placeholder="sort"
              aria-disabled
             
            />
            </div>
          </SelectTrigger>
          <SelectContent>
            {SortData.map((data, index) => (
              <SelectItem key={index} value={data.value}>
                {data.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Sorting;
