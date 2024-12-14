import React from "react";
import Image from "next/image";
interface ProjectSetupCardProps {
  projectName: string;
  projectImage: string;
}

const ProjectSetupCard = ({
  projectName,
  projectImage,
}: ProjectSetupCardProps) => {
  return (
    <div className="w-[165px] md:w-[169px] h-[122px] border border-gray-200 rounded-[8px] p-[16px] flex flex-col justify-between">
      <div className="">
        <Image src={projectImage} alt={projectName} width={24} height={24} />
      </div>
      <div className="text-[14px] font-medium">{projectName}</div>
    </div>
  );
};

export default ProjectSetupCard;
