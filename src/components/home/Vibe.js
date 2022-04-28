import React from "react";
import Mens from "../../assets/images/Rectangle 20747.png";
import unsplash from "../../assets/images/unsplash_0K7GgiA8lVE.png";
import unsplash2 from "../../assets/images/unsplash_Fsgzm8N0hIY.png";
import star from "../../assets/images/Group 143725429.png";
import { Fade, Zoom, Bounce, Slide } from "react-reveal";
export default function Vibe() {
  return (
    <>
      <div className=" w-11/12 lg:w-10/12  ml-auto mr-auto my-20  ">
        <Fade left>
          <h1 className="text-primary-dark text-3xl md:text-6xl f-f-b  ">
            What’s the vibe?
          </h1>
        </Fade>
        <div className="grid grid-row grid-cols-3 ">
          <Fade left>
            <div className="col-span-3 block md:hidden">
              <img src={Mens} className="mens-setting lg:mt-0 mt-6 " />
            </div>

            <div className=" col-span-3 md:col-span-2">
              <h2 className="text-primary-dark text-2xl f-f-b  mt-10 ">
                How we work
              </h2>
              <div className=" w-11/12    ">
                <h3 className="text-primary-dark  text-base sm:text-lg f-f-r mt-4">
                  <span className="f-f-b  ">
                    Highly aligned, loosely coupled:
                  </span>
                  Members of our team understand high-level company goals, are
                  autonomous, and show initiative.
                </h3>
                <h3 className="text-primary-dark  text-base sm:text-lg f-f-r mt-4">
                  <span className="f-f-b"> Ambition shapes reality:</span> We
                  are extremely ambitious in what we can accomplish. We set high
                  standards, expecting to fail in the short-term but knowing
                  that failure guides us to learn and ultimately succeed.
                </h3>
                <h3 className="text-primary-dark  text-base sm:text-lg f-f-r mt-4">
                  <span className="f-f-b  "> Product-driven:</span> We invest in
                  a world-class experience that reduces massive friction for our
                  users and speaks for itself.
                </h3>
                <h3 className="text-primary-dark  text-base sm:text-lg f-f-r mt-4">
                  <span className="f-f-b  ">Asynchronous productivity:</span>We
                  are a globally distributed and diverse team that values deep,
                  asynchronous work, effective and clear communication. We
                  invest in helping each other grow as a team and as
                  individuals.
                </h3>
                <h3 className="text-primary-dark  text-base sm:text-lg f-f-r mt-4">
                  <span className="f-f-b  ">Learn through building:</span>It's
                  time to build! We ship frequently, connect with our community,
                  and iterate until we get it perfect.
                </h3>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="col-span-3 md:col-span-1 hidden md:block ">
              <img src={Mens} className="mens-setting lg:mt-0 mt-24 " />
            </div>
          </Fade>
          <Zoom left>
            <div className=" col-span-3 md:col-span-2 mt-14 ">
              <div className=" w-11/12 ">
                <div className="grid grid-row grid-cols-12 gap-5 ">
                  <div className=" col-span-12  md:hidden lg:block md:col-span-10 lg:col-span-5 text-center ">
                    <img src={unsplash2} width="100%" />
                  </div>
                  <div className="col-span-12  md:col-span-10 lg:col-span-5">
                    <img src={unsplash} width="100%" />
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom right>
            <div className=" col-span-3 md:col-span-1  ">
              <h2 className="text-primary-dark text-2xl f-f-b  mt-10 ">
                Benefits
              </h2>
              <h1 className="mt-3">
                🏕
                <span className="text-primary-dark   text-base sm:text-lg f-f-r mt-2 ">
                  Fully remote
                </span>
              </h1>
              <h1 className="mt-1">
                😎
                <span className="text-primary-dark   text-base sm:text-lg f-f-r ">
                  Async-first - flexible working hours
                </span>
              </h1>
              <h1 className="mt-1">
                🚀
                <span className="text-primary-dark   text-base sm:text-lg f-f-r ">
                  Early-stage, well-funded rocket ship
                </span>
              </h1>
              <h1 className="mt-1">
                💸
                <span className="text-primary-dark   text-base sm:text-lg f-f-r ">
                  Competitive salary & eqity
                </span>
              </h1>
              <h1 className="mt-1">
                💻
                <span className="text-primary-dark   text-base sm:text-lg f-f-r ">
                  Premium equitment
                </span>
              </h1>
              <h1 className="mt-1">
                🏝
                <span className="text-primary-dark   text-base sm:text-lg f-f-r ">
                  Flexible time off
                </span>
              </h1>
              <h1 className="mt-1">
                📚
                <span className="text-primary-dark   text-base sm:text-lg f-f-r ">
                  Personal learning budget
                </span>
              </h1>
            </div>
          </Zoom>
        </div>
        {/*  star   */}
        <Bounce left>
          <img
            src={star}
            width="52px"
            height="auto"
            className=" my-24 ml-auto mr-auto  "
          />
        </Bounce>
      </div>
    </>
  );
}
