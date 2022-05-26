import React from "react";
import weatherapp from "../assets/weatherapp.png"
import headphone from "../assets/headphone.png"
import unsent from "../assets/unsent.png"

export default function Projects(){
    return(
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
                <div className="flex justify-center">
                  <a href="https://nuxt-axios.vercel.app/" tabIndex={-1}>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-br from-rose-800 to-amber-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-700 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2"
                    >
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/SamuelFlet/nuxtweatherapp" tabIndex={-1}>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-br from-rose-800 to-amber-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-700 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2"
                    >
                      Source Code
                    </button>
                  </a>
                </div>
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
                <div className="flex justify-center">
                  <a href="https://samsheadphones.vercel.app/" tabIndex={-1}>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-br from-rose-800 to-amber-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-700 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2"
                    >
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/SamuelFlet/samsheadphones" tabIndex={-1}>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-br from-rose-800 to-amber-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-700 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2"
                    >
                      Source Code
                    </button>
                  </a>
                </div>
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
                <div className="flex justify-center">
                  <a href="https://unsent-letters.vercel.app/" tabIndex={-1}>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-br from-rose-800 to-amber-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-700 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2"
                    >
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/SamuelFlet/unsentLetters" tabIndex={-1}>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-br from-rose-800 to-amber-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-700 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2"
                    >
                      Source Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}