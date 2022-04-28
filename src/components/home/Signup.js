import React from "react";
import Fade from "react-reveal/Fade";
export default function Signup() {
  return (
    <div>
      <div
        id="signup-modal"
        aria-hidden="true"
        className=" login-bg hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
      >
        <Fade right >
        <div className="relative px-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="signup-modal"
              >
                <svg
                  className="w-5 h-5"
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
            <form
              className="px-6 pb-4 space-y-4 lg:px-8 sm:pb-6 xl:pb-8"
              action="#"
            >
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Signup to our platform
              </h3>
              <div>
                <label
                  htmlFor="First Name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="First Name"
                  id="First Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:primary-main focus:border-primary-main focus-visible:border-primary-main block w-full p-2.5 "
                  placeholder=" First Name"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="Last Name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {" "}
                  Last Name
                </label>
                <input
                  type="text"
                  name="Last Name"
                  id="Last Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:primary-main focus:border-primary-main focus-visible:border-primary-main block w-full p-2.5 "
                  placeholder="Last Name"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {" "}
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:primary-main focus:border-primary-main focus-visible:border-primary-main block w-full p-2.5 "
                  placeholder="Your Email Address"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {" "}
                  Password
                </label>
                <input
                  type="password"
                  name="email"
                  id="email"
                  className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create your account
              </button>
            </form>
          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
}
