import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center ">
          <h1 className="title-nice title-skills">Skills </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"></p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full h-32 text-2xl">
              <div className="bg-midnight rounded flex p-4 h-full items-center ">
                <BadgeCheckIcon className="font-tangerine w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white ubuntu">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
