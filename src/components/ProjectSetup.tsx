import React from "react";

import ProjectSetupCard from "./ProjectSetupCard";

const projectSetup = [
  {
    projectName: "Project 1",
    projectImage: "/assets/calender.svg",
  },
  {
    projectName: "Project 2",
    projectImage: "/assets/rupee.svg",
  },
  {
    projectName: "Project 3",
    projectImage: "/assets/print.svg",
  },
  {
    projectName: "Project 4",
    projectImage: "/assets/print.svg",
  },
];
const ProjectSetup = () => {
  return (
    <div>
      <div className="flex flex-col gap-[4px]">
        <div className="flex">
          <div className="text-[20px] font-medium">Project Setup</div>
        </div>
        <div className="text-[12px] text-gray-500">
          <p>
            This heading will appear on your website by default and can be
            edited using the edit icon.
          </p>
        </div>
      </div>
      <div className="flex grid grid-cols-2 md:flex md:flex-wrap gap-[12px] w-full mt-[24px]">
        {projectSetup.map((project) => (
          <ProjectSetupCard
            projectName={project.projectName}
            projectImage={project.projectImage}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSetup;
