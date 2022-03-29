import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-midnight body-font ">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-16">
          <h1 className="title-apps">
            <span className="font-lavender block sm:inline-block">
              {" "}
              Apps &nbsp;{" "}
            </span>
            <span className="font-daffodil block sm:inline-block  ">
              Web sites &nbsp;
            </span>
            <span className="font-tangerine block sm:inline-block">
              {" "}
              games{" "}
            </span>
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 ">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4 min-height "
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-top  rounded"
                  src={project.image}
                />
                <div className="px-8 py-10 relative  w-full border-4 border-gray-800 bg-midnight opacity-0 hover:opacity-100 rounded">
                  <h2 className="tracking-widest text-sm title-font font-medium mb-1 font-tangerine ubuntu capitalize">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium  mb-3 font-daffodil uppercase ubuntu ">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>

                  <div
                    className="bg-midnight flex-container  mt-2 -mb-10 -ml-8 -mr-8 rounded-b
                  "
                  >
                    <div className="py-6 px-12">
                      <a href={project.github} target="_blank">
                        <FaGithub className="mx-auto inline-block text-2xl  github-icon " />
                      </a>
                    </div>
                    <div className="py-6 px-12">
                      <a href={project.link} target="_blank">
                        <BsFillArrowRightCircleFill className="mx-auto inline-block text-2xl  github-icon " />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
