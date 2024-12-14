import { CirclePlus } from "lucide-react";
import React from "react";

const AddThemeCard = () => {
  return (
    <div className="w-[163px] md:w-[348px] h-[87px] md:h-[58.55px] border border-dashed border-gray-200 rounded-[8px] flex flex-col md:flex-row items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row items-center gap-[8px]">
        <CirclePlus width={15} height={15} />
        <div>Add theme</div>
      </div>
    </div>
  );
};

export default AddThemeCard;
