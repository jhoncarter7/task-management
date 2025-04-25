"use client"

import React, { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

import { ArrowDownUp } from 'lucide-react'

const SortData = ["date-asc", "date-desc"]
const Sorting = () => {
const [innerWidth, setInnerWidth] = useState<number>(800)
  useEffect(()=>{
    setInnerWidth(window.innerWidth)
  },[])
    const SortHandler = (e:string)=>{
      console.log(e)
    }
  return (
    <div>
      <div className="flex gapx-2 justify-center items-center ">
        <Select name="" onValueChange={(e) => SortHandler(e)} >
          <SelectTrigger value="" className="border-[1px] border-primary text-primary ">
            <ArrowDownUp  color={`#941B0F`}/>
           {innerWidth < 600 ? "": <SelectValue placeholder="Sort" className="hidden md:inline-block" />}
          </SelectTrigger>
          <SelectContent>
            {SortData.map((data, index) => (
              <SelectItem key={index} value={data}>
                {data}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default Sorting