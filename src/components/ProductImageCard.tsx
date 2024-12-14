import React from "react";
import Image from "next/image";
import { CloudDownload } from "lucide-react";

const ProductImageCard = ({ ImageSrc }: { ImageSrc: string }) => {
  return (
    <div className="w-[240px] h-[176px] bg-gray-200 rounded-lg relative">
      <div className="absolute bottom-2 right-2 w-[32px] h-[32px] bg-[#EEF5F3] rounded-full flex items-center justify-center bg-gray-300">
        <CloudDownload width={16} height={16} color="gray" />
      </div>
      <div>
        <Image src={ImageSrc} alt="product image" width={240} height={176} />
      </div>
    </div>
  );
};

export default ProductImageCard;
