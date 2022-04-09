import React from "react";
import resume from "../assets/resume.pdf";
import Animate from "../components/animated";

export default function Intro() {
  return (
    <div id="into" className="pt-20 pb-20">
      <div className="grid grid-cols-2 gap-4">
        <div className="pt-40">
          <h2 className="text-6xl font-bold">Hello there,</h2>
          <p className="font-sans pt-4 w-96">
            Hello there, I'm Samuel Fletcher. I am a Fullstack developer who
            works with React, Vue, and multiple backend frameworks
          </p>

          <div className="pt-5">
            <a href={resume}>
              <button
                type="button"
                className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2"
              >
                My Resume
              </button>
            </a>
          </div>
        </div>
        <div className="">
          <Animate />
        </div>
      </div>
    </div>
  );
}
