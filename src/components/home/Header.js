import React, { useState } from "react";
import Logo from "../../assets/images/Logo.png";
import Logomark from "../../assets/images/Logomark.png";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Careers from "./Careers";
import Global from "./Global";
import Vibe from "./Vibe";
import Who from "./Who";
import Open from "./Open";
import Footer from "./Footer";
import Login from "./Login";
import Signup from "./Signup";

export default function ButtonAppBar() {
  const [open, setopen] = useState(false);
  return (
    <>
      <nav className=" absolute w-full top-0 bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Fade left>
            <a href="#download" className="flex">
              <img
                src={Logo}
                className=" lg:w-44 md-w-36 h-6 hidden sm:block   "
              />
              <img
                src={Logomark}
                className=" lg:w-44 md-w-36 h-6 sm:hidden block ml-4   "
              />
            </a>
          </Fade>
          <div className="flex items-center md:order-2">
            <Fade right>
              <button
                type="button"
                className="mr-3  hidden sm:block  f-f-sm-b rounded-lg text-primary-main text-sm border-solid border-2  px-4 py-2 border-primary-main  "
                data-modal-toggle="authentication-modal"
              >
                Login
              </button>
              <button
                type="button"
                className=" bg-primary-main lg:px-6  sm:px-5  px-4 py-2  f-f-sm-b rounded-lg text-white flex text-sm "
                data-modal-toggle="signup-modal"
              >
                Sign up
              </button>
            </Fade>
            <div className="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4 dark:bg-gray-700 dark:divide-gray-600"></div>
            <button
              onClick={() => {
                setopen(!open);
              }}
              type="button"
              className="md:hidden ml-1 text-gray-500 hover:bg-gray-100focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg text-sm p-2 inline-flex items-center dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              open ? "hidden" : ""
            } md:flex justify-between items-center w-full md:w-auto md:order-1  z-10 bg-white `}
          >
            <ul className="flex-col md:flex-row flex md:space-x-4 lg:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#download"
                  className=" bg-primary-main  text-white md:text-base  md:bg-transparent text-light block pl-3 pr-4 py-2 md:text-primary-light md:p-0 rounded dark:text-white"
                  aria-current="page"
                >
                  Download
                </a>
              </li>

              <li>
                <a
                  href="#Tutorials"
                  className=" hover:text-white  text-primary-light   md:text-base  hover:bg-primary-main border-b border-gray-100 md:hover:bg-transparent rounded  md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  How We Work
                </a>
              </li>
              <li>
                <a
                  href="#Company"
                  className=" hover:text-white  text-primary-light   md:text-base  hover:bg-primary-main border-b border-gray-100 md:hover:bg-transparent rounded  md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#Careers"
                  className=" hover:text-white   text-primary-light   md:text-base hover:bg-primary-main border-b border-gray-100 md:hover:bg-transparent rounded  md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Login />

      <Signup />

      <div id="download">
        <Careers />
      </div>
      <div id="Pricing">
        <Global />
      </div>
      <div id="Tutorials">
        <Vibe />
      </div>
      <div id="Company">
        <Who />
      </div>
      <div id="Careers">
        <Open />
      </div>

      <Footer />
    </>
  );
}
