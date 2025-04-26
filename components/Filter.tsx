"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ListFilter } from "lucide-react";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

const filterData = [
  { label: "Priority – High", value: "high" },
  { label: "Priority – Medium", value: "medium" },
  { label: "Priority – Low", value: "low" },
  { label: "Status In Progress", value: "in-progress" },
  { label: "Status  Completed", value: "completed" },
];

const Filter = ({
  setFilter,
}: {
  setFilter: Dispatch<SetStateAction<string>>;
}) => {
  const [innerWidth, setInnerWidth] = useState<number>(800);
  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);
  const FilterHandler = (e: string) => {
    setFilter(e);
  };

  return (
    <div>
      <div className="flex gapx-2 justify-center items-center ">
        <Select name="" onValueChange={(e) => FilterHandler(e)}>
          <SelectTrigger
            value=""
            className="border-[1px] border-primary text-primary "
          >
            <ListFilter color={`#941B0F`} />
            {innerWidth < 600 ? (
              ""
            ) : (
              <SelectValue
                placeholder="Filter"
                className="hidden md:inline-block"
              />
            )}
          </SelectTrigger>
          <SelectContent>
            {filterData.map((data, index) => (
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

export default Filter;
