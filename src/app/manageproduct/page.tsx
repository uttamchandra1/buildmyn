import ProductImage from "@/components/ProductImage";
import ProductInput from "@/components/ProductInput";
import ProductSetting from "@/components/ProductSetting";
import ProjectSetup from "@/components/ProjectSetup";
import Segments from "@/components/Segments";
import Themes from "@/components/Themes";
import TopPhoneComponent from "@/components/TopPhoneComponent";

import Varient from "@/components/Varient";
import { ArrowLeft, Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

const ManageProduct = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start w-full px-[24px] md:px-0 md:pl-[32px] h-screen bg-white md:bg-transparent">
      <div className="hidden md:block w-2/5 mt-[100px] h-[80vh] fixed">
        <div className="w-[90%]">
          <div className="flex justify-between ">
            <div className="text-[16px] font-bold">
              Uploaded products images
            </div>
            <div className="underline text-[16px] ">Upload more images</div>
          </div>
          <div className="mt-[52px] h-[70vh] overflow-scroll scrollbar-hide">
            <ProductImage />
          </div>
        </div>
      </div>

      <div className="w-full md:w-3/5 md:pl-[52px] md:pr-[52px] md:px-0 overflow-y-scroll scrollbar-hide bg-white flex flex-col items-center md:items-start ml-auto">
        <div className="mt-[50px] md:hidden">
          <TopPhoneComponent />
        </div>
        <div className="flex justify-between mt-[24px] md:mt-[100px] w-full md:px-0">
          <div className="flex gap-[8px] items-start">
            <div className="cursor-pointer w-[20px] h-[20px] md:w-[24px] md:h-[24px] flex items-center justify-center mt-1 md:mt-2">
              <ArrowLeft
                width={12}
                height={12}
                className="md:w-[15px] md:h-[15px]"
              />
            </div>
            <div className="flex flex-col gap-[2px]">
              <div className="text-[14px] md:text-[32px] font-medium">
                Manage Product
              </div>
              <p className="text-[12px] md:text-[14px] text-[#3E3C3C]">
                Lorem ipsum dolor sit
              </p>
            </div>
          </div>
          <div>
            <button className="flex items-center gap-[4px] md:gap-[8px] bg-[#FEE2E1] rounded-[4px] px-[6px] py-[3px] md:px-[8px] md:py-[4px]">
              <Image
                src="/assets/trash.svg"
                alt="delete"
                width={12}
                height={12}
              />
              <div className="text-[12px] md:text-[14px] text-[#DC2626]">
                Delete
              </div>
            </button>
          </div>
        </div>
        <div className="mt-[52px] w-full">
          <ProductInput />
        </div>

        <div className="mt-[32px] w-[95%] md:w-full">
          <ProductSetting />
        </div>
        <div className="mt-[32px] w-full ">
          <Themes />
        </div>
        <div className="mt-[32px]">
          <Varient />
        </div>
        <div className="mt-[32px]">
          <ProjectSetup />
        </div>
        <div className="mt-[32px] md:w-full">
          <Segments />
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
