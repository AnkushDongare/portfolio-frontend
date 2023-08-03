import React from "react";
import { projects } from "../data/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center text-gray-900">
        Projects
      </h1>
      <div className="max-w-lg px-4 pt-12 mx-auto md:max-w-screen-2xl md:px-6 xl:px-8 2xl:px-12">
        <div data-controller="pagination lazy-loader">
          <div
            id="resources"
            className="grid mx-auto gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 2xl:gap-x-12 2xl:gap-y-16 xl:gap-y-14"
          >
            {projects.slice(0, 6).map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
