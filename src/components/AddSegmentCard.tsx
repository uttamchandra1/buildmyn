import { CirclePlus, Plus } from "lucide-react";
import React from "react";

const AddSegmentCard = () => {
  return (
    <div className="w-full h-[49px] border border-gray-200 rounded-[8px] border-dashed p-[12px] mb-[60px] bg-gray-100">
      <div className="flex items-center gap-[12px] justify-center ">
        <CirclePlus width={16} height={16} />
        <div className="text-[14px] font-medium">Add Segment</div>
      </div>
    </div>
  );
};

export default AddSegmentCard;
