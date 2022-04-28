import React from "react";
import Fade from "react-reveal/Fade";

export default function Careers() {
  return (
    <>
      <Fade left>
        <div className=" w-10/12 md:w-9/12 lg:w-6/12 ml-auto mr-auto my-20  ">
          <h1 className="text-primary-dark text-3xl md:text-6xl f-f-b ">
            RemNote
          </h1>
          <h5 className="text-primary-light  text-base sm:text-lg f-f-r mt-2  ">
            The world needs better ways to think and learn. We combine latest
            research in neuroscience and psychology with cutting-edge web
            technology to build the #1 integrated thinking and learning tool.
          </h5>
          <h5 className="text-primary-light text-base sm:text-lg f-f-r my-5 sm:my-8 ">
            The world needs better ways to think and learn. We combine latest
            research in neuroscience and psychology with cutting-edge web
            technology to build the #1 integrated thinking and learning tool.
          </h5>
          <button
            type="button"
            className=" bg-primary-main lg:px-6 sm:px-5 px-4 py-2 f-f-sm-b rounded-md text-white flex text-sm "
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="dropdown"
          >
            Download
          </button>
        </div>
      </Fade>
    </>
  );
}
