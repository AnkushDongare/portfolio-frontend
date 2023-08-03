import React from "react";

const ProjectCard = ({ title, description, link, imageUrl }) => {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-gray-100 rounded-2xl h-72 sm:h-80 md:h-72 lg:h-64 xl:h-80">
      <div className="relative flex items-center justify-center flex-shrink-0 h-full group">
        <img
          className="w-9/10 sm:w-10/12 lg:w-9/10 xl:w-10/12 h-auto rounded-lg shadow-md mx-auto object-cover object-left-top transition ease-in-out duration-300"
          alt={title}
          data-lazy-loader-target="entry"
          src={imageUrl}
        />
        <div className="absolute inset-0 transition duration-200 bg-gray-900 opacity-0 rounded-2xl group-hover:opacity-60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center transition duration-200 opacity-0 group-hover:opacity-100">
          <div className="shadow-sm w-33 rounded-2xl">
            <a
              className="w-full justify-center inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-2xl shadow-sm text-white transition duration-150 bg-cool-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cool-indigo-500"
              href={link}
            >
              View projects details
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-between flex-1 px-6 pt-6 pb-0">
          <div className="flex-1">
            <a className="block group" href={link}>
              <div className="flex items-center justify-between">
                <h3 className="flex items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">
                  {title}
                </h3>
              </div>
              <p className="mt-1 text-base font-medium leading-6 text-gray-500">
                {description}
              </p>
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
