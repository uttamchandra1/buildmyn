"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SideBar = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (item: string) => {
    setSelected(item);
  };

  return (
    <div className="h-screen w-16 flex flex-col items-center py-4 bg-white md:text-[32px] text-[16px]">
      <div className="space-y-4 w-full">
        <div
          className={`w-full flex justify-center cursor-pointer ${
            selected === "manageproduct" ? "bg-gray-100" : "hover:bg-gray-100"
          }`}
          onClick={() => handleSelect("manageproduct")}
        >
          <Link href="/manageproduct" className="p-2">
            <Image
              src="/assets/account.svg"
              alt="manageproduct"
              width={20}
              height={20}
            />
          </Link>
        </div>
        <div className="w-full flex justify-center hover:bg-gray-100 cursor-pointer">
          <div className="p-2">
            <Image
              src="/assets/award_star.svg"
              alt="award"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="w-full flex justify-center hover:bg-gray-100 cursor-pointer">
          <div className="p-2">
            <Image src="/assets/book.svg" alt="book" width={20} height={20} />
          </div>
        </div>
        <div className="w-full flex justify-center hover:bg-gray-100 cursor-pointer">
          <div className="p-2">
            <Image
              src="/assets/package_2.svg"
              alt="package"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="w-full flex justify-center hover:bg-gray-100 cursor-pointer">
          <div className="p-2">
            <Image
              src="/assets/add_circle.svg"
              alt="plus"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="w-full flex justify-center hover:bg-gray-100 cursor-pointer">
          <div className="p-2">
            <Image
              src="/assets/notifications.svg"
              alt="bell"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="w-full flex justify-center hover:bg-gray-100 cursor-pointer">
          <div className="p-2">
            <Image
              src="/assets/local_activity.svg"
              alt="bookmark"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="w-full flex justify-center hover:bg-gray-100 cursor-pointer">
          <div className="p-2">
            <Image
              src="/assets/currency_rupee_circle.svg"
              alt="rupee"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
