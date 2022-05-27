import React from "react";
import resume from "../assets/resume.pdf";
import Animate from "../components/animated";

function openResume() {
  window.open(resume);
}

export default function Intro() {
  return (
    <div id="into" className="pt-20 pb-20">
      <div className="grid grid-cols-2 gap-4">
        <div className="pt-40">
          <h1 className="text-6xl font-bold">Hello there,</h1>
          <p className="font-sans pt-4 w-96">
            Hello there, I'm Samuel Fletcher. I am a Fullstack developer who
            works with React, Vue, and multiple backend frameworks
          </p>

          <div className="pt-5"> 
            <button
              id="Open Resume"
              onClick={openResume}
              type="button"
              className="text-white bg-gradient-to-br from-rose-800 to-amber-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-700 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2"
            >
              My Resume
            </button>
          </div>
        </div>
        <div role="img" aria-label="An animated gif">
          <Animate />
        </div>
      </div>
    </div>
  );
}
