import React from "react";

interface VarientCardProps {
  varientName: string;
}

const VarientCard = ({ varientName }: VarientCardProps) => {
  return (
    <div className="w-[140px] h-[35px] border border-gray-200 rounded-[8px] flex items-center px-[12px] py-[8px]">
      <div className="">{varientName}</div>
    </div>
  );
};

export default VarientCard;
