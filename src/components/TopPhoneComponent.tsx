import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const TopPhoneComponent = () => {
  return (
    <div className="">
      <div className="flex justify-between ">
        <div>
          <span>
            <span className="font-bold underline">Download</span> and use the
            images for marketing of Magazines
          </span>
        </div>
        <div className="cursor-pointer">
          <span className="underline text-[10px] whitespace-nowrap">
            View all
          </span>
        </div>
      </div>
      <div className="mt-[32px]">
        <div className="flex justify-between items-center">
          <div className="">
            <ChevronLeft />
          </div>
          <div className="">
            <Image
              src="/assets/Delivery.png"
              alt="phone"
              width={298}
              height={200}
            />
          </div>
          <div>
            <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPhoneComponent;
