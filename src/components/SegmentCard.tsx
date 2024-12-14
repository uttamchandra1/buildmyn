import { PencilLine, Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

interface SegmentCardProps {
  segmentName: string;
  segmentDescription: string;
}

const SegmentCard = ({ segmentName, segmentDescription }: SegmentCardProps) => {
  return (
    <div className="w-full h-[124px] border border-gray-200 rounded-[8px] p-[12px]">
      <div className="flex justify-between">
        <div>{segmentName}</div>
        <div className="flex gap-4">
          <Image src="/assets/edit.svg" alt="pencil" width={13} height={13} />
          <Image src="/assets/trash.svg" alt="delete" width={12} height={12} />
        </div>
      </div>
      <div>
        <div className="text-gray-500 text-[12px] mt-2">
          {segmentDescription
            .split("•")
            .filter(Boolean)
            .map((point, index) => (
              <div key={index}>• {point.trim()}</div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SegmentCard;
