import React from "react";
import Image from "next/image";

interface ThemeCardProps {
  themeImage: string;
  themeName: string;
}

const ThemeCard = ({ themeImage, themeName }: ThemeCardProps) => {
  return (
    <div className="w-[163px] md:w-[348px] h-[87px] md:h-[58px] border border-gray-200 rounded-[8px] flex md:flex-row flex-col items-center justify-center px-[16px] py-[12px] md:p-0">
      <div className="flex md:flex-row flex-col gap-[8px] md:gap-[16px] md:ml-[16px] items-center">
        <div>
          <Image
            src={themeImage}
            alt={themeName}
            width={28}
            height={28}
            className="w-full h-full object-cover rounded-[2.76px] md:w-[34.5px] md:h-[34.5px]"
          />
        </div>
        <div className="text-[14px] md:text-[16px]">{themeName}</div>
      </div>
    </div>
  );
};

export default ThemeCard;
