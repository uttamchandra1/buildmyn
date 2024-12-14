import React from "react";
import ThemeCard from "./ThemeCard";
import AddThemeCard from "./AddThemeCard";
import { Edit, PencilLine } from "lucide-react";
import Image from "next/image";

const themes = [
  {
    themeImage: "/assets/frame1.png",
    themeName: "Theme 1",
  },
  {
    themeImage: "/assets/frame1.png",
    themeName: "Theme 2",
  },
  {
    themeImage: "/assets/frame1.png",
    themeName: "Theme 3",
  },
  {
    themeImage: "/assets/frame1.png",
    themeName: "Theme 4",
  },
  {
    themeImage: "/assets/frame1.png",
    themeName: "Theme 5",
  },
];

const Themes = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex flex-col gap-[4px]">
        <div className="flex gap-2">
          <div className="text-[20px] font-medium">Themes</div>
          <Image src="/assets/edit.svg" alt="pencil" width={14} height={14} />
        </div>
        <div className="text-[12px] text-gray-500">
          <p>
            This heading will appear on your website by default and can be
            edited using the edit icon.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:flex md:flex-wrap gap-[16px]">
        {themes.map((theme) => (
          <ThemeCard
            themeImage={theme.themeImage}
            themeName={theme.themeName}
          />
        ))}
        <AddThemeCard />
      </div>
    </div>
  );
};

export default Themes;
