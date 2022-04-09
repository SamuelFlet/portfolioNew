/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/LOGOPNG.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

export default function Header() {
  return (
    <nav className="bg-slate-800 pt-10">
      <div className="container flex flex-wrap justify-start items-center mx-auto">
        <a href="#" className="flex items-center">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="SF Logo" />
          <span className="self-center text-2xl font-mono whitespace-nowrap dark:text-white">
            Samuel Fletcher
          </span>
        </a>
        <div className="ml-40">
          <ul className="flex flex-col font-mono mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li className="pl-4 pr-4">
              <a
                href="#projects"
                className="text-lg block text-white md:bg-transparent hover:text-sky-400"
                aria-current="page"
              >
                Projects
              </a>
            </li>
            <li className="pl-4 pr-4">
              <a
                href="#skills"
                className="text-lg block text-white md:bg-transparent hover:text-sky-400"
              >
                Skills
              </a>
            </li>
          </ul>
        </div>
        <div className="flex ml-96">
          <a href="https://github.com/SamuelFlet">
            <img src={github} className="pr-5 mr-3 h-3 sm:h-7" alt="SF Logo" />
          </a>
          <a href="https://www.linkedin.com/in/samuelrhfletcher/">
            <img src={linkedin} className="mr-3 h-3 sm:h-7" alt="SF Logo" />
          </a>
        </div>
      </div>
    </nav>
  );
}
