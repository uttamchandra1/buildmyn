import React from "react";
import VarientCard from "./VarientCard";
import Image from "next/image";

const varients = [
  {
    varientName: "Varient 1",
  },
  {
    varientName: "Varient 2",
  },
  {
    varientName: "Varient 3",
  },
  {
    varientName: "Varient 4",
  },
  {
    varientName: "Varient 5",
  },
  {
    varientName: "Varient 6",
  },
];

const Varient = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex flex-col gap-[4px]">
        <div className="flex gap-2">
          <div className="text-[20px] font-medium">Varients</div>
          <Image src="/assets/edit.svg" alt="pencil" width={14} height={14} />
        </div>
        <div className="text-[12px] text-gray-500">
          <p>
            This heading will appear on your website by default and can be
            edited using the edit icon.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-[16px]">
        {varients.map((varient) => (
          <VarientCard varientName={varient.varientName} />
        ))}
      </div>
    </div>
  );
};

export default Varient;
