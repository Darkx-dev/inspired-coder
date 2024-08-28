"use client";
import React from "react";
import Card from "./Card";
import { div } from "three/webgpu";
import { useGSAP } from "@gsap/react";

export type project = {
  name: string;
  imgUrl: string;
  liveUrl: string;
  repoUrl: string;
};

type ProjectListParams = {
  projects: project[];
};

const ProjectList = ({ projects }: ProjectListParams) => {
  useGSAP(() => {}, []);
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 pb-24 md:auto-rows-[18rem] md:grid-cols-4">
      {projects.map((project, index) => (
          <div
          key={index}
          className={`card-container animate-pulse min-h-72  bg-white/20 ${index % 5 === 0 ? "col-span-2" : undefined}`}
          >
          <Card
            name={project?.name}
            imgUrl={project?.imgUrl}
            repoUrl={project?.repoUrl}
            liveUrl={project?.liveUrl}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
