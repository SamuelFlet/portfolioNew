import React from "react";
import python from "../assets/skills/python-plain.svg";
import django from "../assets/skills/django-plain.svg";
import ts from "../assets/skills/typescript-plain.svg";
import express from "../assets/skills/express-original.svg";
import re from "../assets/skills/react-original.svg";
import vue from "../assets/skills/vuejs-original.svg";
import gql from "../assets/skills/graphql-plain.svg";
import heroku from "../assets/skills/heroku-original.svg";
import { ReactSVG } from "react-svg";

export default function Skills() {
  return (
    <div id="skills" className="pt-20 pb-20">
      <h2 className="text-6xl font-bold pb-10">Skills</h2>
      <div className="flex flex-wrap">
        <div className="">
          <div className="w-60">
            <div className="ml-20 w-20">
              <ReactSVG src={python} />
            </div>

            <h2 className="text-center text-xl font-bold pb-10">Python</h2>
          </div>
        </div>
        <div className="px-12">
          <div className="w-60">
            <div className="ml-20 w-20">
              <ReactSVG src={django} />
            </div>

            <h2 className="text-center text-xl font-bold pb-10">Django</h2>
          </div>
        </div>
        <div className="px-12">
          <div className="w-60">
            <div className="ml-20 w-20">
              <ReactSVG src={ts} />
            </div>

            <h2 className="text-center text-xl font-bold pb-10">TypeScript</h2>
          </div>
        </div>
        <div className="px-12">
          <div className="w-60">
          <div className="ml-20 w-20">
              <ReactSVG src={express} />
            </div>

            <h2 className="text-center text-xl font-bold pb-10">Express</h2>
          </div>
        </div>
        <div className="pt-14">
          <div className="w-60">
          <div className="ml-20 w-20">
              <ReactSVG src={re} />
            </div>

            <h2 className="text-center text-xl font-bold pb-10">React</h2>
          </div>
        </div>
        <div className="pt-14 px-12">
          <div className="w-60">
          <div className="ml-20 w-20">
              <ReactSVG src={vue} />
            </div>

            <h2 className="text-center text-xl font-bold pb-10">Vue</h2>
          </div>
        </div>
        <div className="pt-14 px-12">
          <div className="w-60">
          <div className="ml-20 w-20">
              <ReactSVG src={gql} />
            </div>

            <h2 className="text-center text-xl font-bold pb-10">GraphQL</h2>
          </div>
        </div>
        <div className="pt-14 px-12">
          <div className="w-60">
          <div className="ml-20 w-20">
              <ReactSVG src={heroku} />
            </div>

            <h2 className="text-center text-xl font-bold pb-10">Heroku</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
