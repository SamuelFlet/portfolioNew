/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/App.css";
import weatherapp from "../assets/weatherapp.png";
import unsent from "../assets/unsent.png";
import headphone from "../assets/headphone.png";

export default function App() {
  return (
    <div className="bg-slate-800">
      <div id="into" className="pt-20 pb-20">
        <h2 className="text-6xl font-bold">Hello there,</h2>
        <p className="font-sans pt-4 w-96">
          Hello there, I'm Samuel Fletcher. I am a Fullstack developer who works
          with React, Vue, and multiple backend frameworks
        </p>
        <div className="pt-5">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2"
          >
            My Resume
          </button>
        </div>
      </div>
      <div className="w-24 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl font-medium rounded-md px-1 py-1.5 mr-1 mb-2" />
      <div id="projects" className="pt-16 pb-20">
        <h2 className="text-6xl font-bold pb-10">Projects</h2>
        <div className="flex flex-wrap">
          <div className="p-10">
            <div className="w-96 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src={weatherapp} alt="" />

              <div className="p-5 text-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Sam's Weather Site
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Sam's weather site displays the current forecast or 3-day
                  forecast for a location the user inputs. All data is pulled
                  from weatherapi.com.
                </p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Tech Stack
                </h5>
                <div className="flex justify-center pb-3">
                  <p className="px-2">Vue </p>
                  <p className="px-2">NuxtJS </p>
                </div>
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2"
                >
                  My Resume
                </button>
              </div>
            </div>
          </div>
          <div className="p-10 mx-44 text-center">
            <div className="w-96  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src={headphone} alt="" />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Headphone Database
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Headphone Database is a site where users can submit headphones
                  to the database. Users can leave reviews and list headphones
                  for sale.
                </p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Tech Stack
                </h5>
                <div className="flex justify-center pb-3">
                  <p className="px-2">Django </p>
                  <p className="px-2">React </p>
                  <p className="px-2">Django-Rest</p>
                </div>
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2"
                >
                  My Resume
                </button>
              </div>
            </div>
          </div>
          <div className="p-10">
            <div className="w-96  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src={unsent} alt="" />

              <div className="p-5 text-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Unsent Letters
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Unsent Letters exists to allow people to write out letters.
                  Each letter can be edited or deleted upon request.
                </p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Tech Stack
                </h5>
                <div className="flex justify-center pb-3">
                  <p className="px-2">Express </p>
                  <p className="px-2">React </p>
                  <p className="px-2">GraphQL</p>
                </div>
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2"
                >
                  My Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
