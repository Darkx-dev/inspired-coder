import ProjectList from "@/components/ProjectList";
import React from "react";

const Projects = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/Darkx-dev/configurations/main/portfolio/creations.json",
  );
  const data = await response.json();
  console.log(data);
  return (
    <section className="bg-gray-dark" id="section-projects">
      <div className="mt-10 w-full px-20 py-12 max-md:px-4">
        <h3 className="text-xl font-medium text-secondary">Skills</h3>
        <h1 className="mt-2 text-5xl font-medium tracking-tighter">
          Top Projects <br />
          That Enhanced my journey
        </h1>
      </div>
      {/* <div className="flex h-screen items-center justify-center">
        <h1 className="text-center text-6xl font-semibold text-secondary max-md:text-5xl">
          Under Construction
        </h1>
      </div> */}
      <div>
        <ProjectList projects={data} />
        <p className="w-full text-center italic">
          Under Construction
        </p>
      </div>
    </section>
  );
};

export default Projects;
