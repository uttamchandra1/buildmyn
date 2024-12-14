import React from "react";
import SegmentCard from "./SegmentCard";
import AddSegmentCard from "./AddSegmentCard";

const segments = [
  {
    segmentName: "Introduction",
    segmentDescription:
      "• Lorem ipsum dolor sit amet" +
      "• consectetur adipiscing elit" +
      "• sed do eiusmod tempor" +
      "• incididunt ut labore",
  },
  {
    segmentName: "Introduction",
    segmentDescription:
      "• Lorem ipsum dolor sit amet" +
      "• consectetur adipiscing elit" +
      "• sed do eiusmod tempor" +
      "• incididunt ut labore",
  },
  {
    segmentName: "Introduction",
    segmentDescription:
      "• Lorem ipsum dolor sit amet" +
      "• consectetur adipiscing elit" +
      "• sed do eiusmod tempor" +
      "• incididunt ut labore",
  },
  {
    segmentName: "Introduction",
    segmentDescription:
      "• Lorem ipsum dolor sit amet" +
      "• consectetur adipiscing elit" +
      "• sed do eiusmod tempor" +
      "• incididunt ut labore",
  },
  {
    segmentName: "Introduction",
    segmentDescription:
      "• Lorem ipsum dolor sit amet" +
      "• consectetur adipiscing elit" +
      "• sed do eiusmod tempor" +
      "• incididunt ut labore",
  },
];

const Segments = () => {
  return (
    <div>
      <div className="flex flex-col gap-[4px]">
        <div className="text-[20px] font-[14px]">Segments</div>
        <div className="text-[12px] text-gray-500">
          <p>
            This heading will appear on your website by default and can be
            edited using the edit icon.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full gap-[24px] mt-[28px]">
        {segments.map((segment) => (
          <SegmentCard
            segmentName={segment.segmentName}
            segmentDescription={segment.segmentDescription}
          />
        ))}
        <AddSegmentCard />
      </div>
    </div>
  );
};

export default Segments;
