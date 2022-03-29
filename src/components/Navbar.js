import React, { useRef, useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { FaPhoneAlt, FaEnvelope, FaBars } from "react-icons/fa";

import { useGlobalContext } from "../context";

export default function Navbar() {
  const { scrolling, showLinks, toggleLinks } = useGlobalContext();

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav className=" sticky top-0 z-10 " id="navbar">
      <header>
        <div className="container mx-auto flex flex-wrap p-4  md:flex-row items-center">
          <button className="nav-toggle md:hidden" onClick={toggleLinks}>
            <FaBars />
          </button>
          <a className="hidden md:flex title-font font-medium text-white ">
            <a
              href="#about"
              className="ml-3 text-xl nav-icon"
              onClick={scrolling}
            >
              Lukáš Zelinka
            </a>
          </a>
          <div className="hidden md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	md:flex flex-wrap items-center text-base justify-center">
            <a
              href="#projects"
              className="mr-5 py-1 px-3 text-white nav-icon rounded uppercase tracking-wider "
              onClick={scrolling}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="mr-5 py-1 px-3 text-white nav-icon rounded uppercase tracking-wider"
              onClick={scrolling}
            >
              Skills
            </a>
            <a
              href="#testimonials"
              className="mr-5 py-1 px-3 text-white nav-icon rounded uppercase tracking-wide"
              onClick={scrolling}
            >
              Testimonials
            </a>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center  border-0 py-1 px-3 focus:outline-none text-white nav-icon rounded text-base mt-4 md:mt-0 uppercase tracking-wide"
            onClick={scrolling}
          >
            About me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div id="second-navbar">
          <div className="container mx-auto hidden flex-container  px-12 py-1 ubuntu">
            <div
              className="contact-icons 

          "
            >
              <a
                href="tel:+421944351096"
                className="mr-6 py-1 px-3 text-white  uppercase tracking-wider inline-block nav-icon  "
              >
                <FaPhoneAlt className="inline-block 2xl:ml-7" /> &nbsp; 0944 351
                096
              </a>

              <a
                href="mailto:lukas.zelinka@gmail.com"
                className=" py-1 px-3 text-white   tracking-wider inline-block nav-icon "
              >
                <FaEnvelope className="inline-block mr-3 2xl:ml-7" />
                lukas.zelinka@gmail.com
              </a>
            </div>

            <div
              className="social-icons 
          "
            >
              {/* social-icon-cubes */}
              <div class="direction">
                <ul ontouchstart>
                  <li>
                    <div class="link">
                      <a
                        href="https://www.facebook.com/lukas.zelinka.52"
                        target="_blank"
                      ></a>
                      <a
                        href="https://www.facebook.com/lukas.zelinka.52"
                        target="_blank"
                      ></a>
                      <a
                        href="https://www.facebook.com/lukas.zelinka.52"
                        target="_blank"
                      ></a>
                      <a
                        href="https://www.facebook.com/lukas.zelinka.52"
                        target="_blank"
                      ></a>
                      <div class="cube codepen">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div>
                          <img
                            src="./fb-white.svg"
                            alt="fb-icon"
                            className="nav-icon-cube"
                          />
                        </div>
                        <div>
                          <img
                            src="./fb-white.svg"
                            alt="fb-icon"
                            className="nav-icon-cube"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="link">
                      <a
                        href="https://github.com/lukasZelinka"
                        target="_blank"
                      ></a>
                      <a
                        href="https://github.com/lukasZelinka"
                        target="_blank"
                      ></a>
                      <a
                        href="https://github.com/lukasZelinka"
                        target="_blank"
                      ></a>
                      <a
                        href="https://github.com/lukasZelinka"
                        target="_blank"
                      ></a>
                      <div class="cube codepen">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div>
                          <img
                            src="./gh-white.svg"
                            alt="github icon"
                            className="nav-icon-cube"
                          />
                        </div>
                        <div>
                          <img
                            src="./gh-white.svg"
                            alt="github icon"
                            className="nav-icon-cube"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="link">
                      <a
                        href="https://app.netlify.com/teams/lukaszelinka/overview"
                        target="_blank"
                      ></a>
                      <a
                        href="https://app.netlify.com/teams/lukaszelinka/overview"
                        target="_blank"
                      ></a>
                      <a
                        href="https://app.netlify.com/teams/lukaszelinka/overview"
                        target="_blank"
                      ></a>
                      <a
                        href="https://app.netlify.com/teams/lukaszelinka/overview"
                        target="_blank"
                      ></a>
                      <div class="cube codepen">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div>
                          <img
                            src="./ne-white.svg"
                            alt="netlify icon"
                            className="nav-icon-cube"
                          />
                        </div>
                        <div>
                          <img
                            src="./ne-white.svg"
                            alt="netlify icon"
                            className="nav-icon-cube"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <svg
                  class="clips"
                  viewbox="0 0 0 0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clippath id="clip-right">
                      <polygon id="right" points="48 0 48 96 0 48"></polygon>
                    </clippath>
                    <clippath id="clip-left">
                      <polygon id="left" points="0 0 0 96 48 48"></polygon>
                    </clippath>
                    <clippath id="clip-bottom">
                      <polygon id="bottom" points="96 48 0 48 48 0"></polygon>
                    </clippath>
                    <clippath id="clip-top">
                      <polygon id="top" points="0 0 96 0 48 48"></polygon>
                    </clippath>
                  </defs>
                </svg>
              </div>
              {/* social-icon-cubes */}
            </div>
          </div>
        </div>
      </header>
      <div
        className="links-container text-center md:hidden"
        ref={linksContainerRef}
      >
        <ul className="links" ref={linksRef} id="linksContainer">
          <li>
            <a href="#about" onClick={scrolling}>
              HOME
            </a>
          </li>
          <li>
            <a href="#projects" onClick={scrolling}>
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#skills" onClick={scrolling}>
              SKILLS
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={scrolling}>
              TESTIMONIALS
            </a>
          </li>
          <li>
            <a href="#contact" onClick={scrolling}>
              ABOUT ME
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
