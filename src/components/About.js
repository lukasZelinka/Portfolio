import React from "react";
import { useGlobalContext } from "../context";

export default function About() {
  const { scrolling } = useGlobalContext();
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 pt-10 md:pt-0 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-16  items-center text-center xl:mb-20">
          <h1 className=" title-font sm:text-4xl text-3xl xl:text-7xl mb-4 font-bold ubuntu font-twilight main-heading ">
            Hi, I'm Lukas.
          </h1>
          <p className="mb-8 leading-relaxed font-twilight xl:text-3xl xl:leading-relaxed ">
            <span className="font-lavender font-bold"> JavaScript, React </span>
            developer.
          </p>
          <div className="flex justify-center ubuntu">
            <a
              href="#contact"
              className="inline-flex text-white   border-0 py-2 px-6 focus:outline-none  rounded text-lg button-1 but-text"
              onClick={scrolling}
            >
              Work with Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex   border-0 py-2 px-6 focus:outline-none  text-white rounded text-lg button-2 but-text"
              onClick={scrolling}
            >
              My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded image1"
            alt="hero"
            src="./lukas.png"
          />
          <img
            className="object-cover object-center rounded image2"
            alt="hero"
            src="./lukas-small.png"
          />
        </div>
      </div>
    </section>
  );
}
