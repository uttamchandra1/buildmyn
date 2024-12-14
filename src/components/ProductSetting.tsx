"use client";
import { useState } from "react";

const ProductSetting = () => {
  const [isToggled, setIsToggled] = useState(true);

  return (
    <div className="flex flex-col gap-[32px] font-[14px]">
      <div className="flex justify-between">
        <div>Do you offer product customization options to the customers?</div>
        <div>
          <ToggleSwitch
            isToggled={isToggled}
            onToggle={() => setIsToggled(!isToggled)}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div>Delivering seamlessly across pan India</div>
        <div>
          <ToggleSwitch
            isToggled={isToggled}
            onToggle={() => setIsToggled(!isToggled)}
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <div>
            Show this product on the website to make it visible to all customers
          </div>
          <div>
            <ToggleSwitch
              isToggled={isToggled}
              onToggle={() => setIsToggled(!isToggled)}
            />
          </div>
        </div>
        <div className="text-xs text-gray-500 font-[12px]">
          <p className="hidden md:block">
            Show on website is disabled by default and can only be changed at
            manage product page.
          </p>
          <p className="md:hidden">
            This product is live on your website.{" "}
            <span className="underline cursor-pointer">Copy Link</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductSetting;

interface ToggleSwitchProps {
  isToggled: boolean;
  onToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isToggled, onToggle }) => {
  return (
    <div
      className={`w-12 h-4 flex items-center bg-[#D1FFED] bg-${
        isToggled ? "blue-300" : "gray-300"
      } rounded-full p-1 cursor-pointer transition-colors duration-300`}
      onClick={onToggle}
    >
      <div
        className={`bg-[#12B981] w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
          isToggled ? "translate-x-6" : ""
        }`}
      ></div>
    </div>
  );
};
