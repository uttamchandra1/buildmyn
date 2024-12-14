import React from "react";
import { Textarea } from "./ui/textarea";

const ProductInput = () => {
  return (
    <div className="">
      <div>
        <span className="text-[16px] font-medium hidden md:block">About</span>
        <span className="text-[16px] font-bold md:hidden">
          About the product
        </span>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-[30px] mt-[24px]">
        <div className="w-full md:w-1/2">
          <ProductInputInterface
            label="Product Name"
            type="text"
            placeholder="Cupcake"
          />
        </div>
        <div className="w-full md:w-1/2">
          <ProductInputInterface
            label="Product Type"
            type="dropdown"
            placeholder="Select Product Type"
          />
        </div>
      </div>
      <div className="mt-[32px] gap-2 flex flex-col  ">
        <p className="text-gray-700 text-[14px] font-medium">
          {" "}
          Description of the product <span className="text-[#DC2626]">*</span>
        </p>

        <Textarea className="h-[88px] rounded-[8px]" />
      </div>
      <div className="mt-[32px]">
        <div className="">
          <ProductInputInterface label="Delivery Timeline" />
        </div>
      </div>
    </div>
  );
};

export default ProductInput;

interface ProductInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductInputInterface = ({
  label,
  type,
  placeholder,
  value,
  onChange,
}: ProductInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700 flex gap-[2px]">
        {label}
        <span className="text-[#DC2626]">*</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-[#F4F4F5]"
      />
    </div>
  );
};
