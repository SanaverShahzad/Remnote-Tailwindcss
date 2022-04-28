import React from "react";
import star from "../../assets/images/Group 143725429.png";
import twitter from "../../assets/images/Icon.png";
import githhub from "../../assets/images/Icon2.png";
import ball from "../../assets/images/Icon3.png";
import Fade from "react-reveal/Fade";

export default function Footer() {
  return (
    <>
      <div className="bg-primary-accent py-10">
        <div className=" w-11/12 lg:w-10/12  ml-auto mr-auto   ">
          <div className="grid grid-row grid-cols-12  gap-4  pb-10 ">
            <div className="col-span-12 sm:col-span-4">
              <Fade left>
                <div className="text-center sm:text-left">
                  <img
                    src={star}
                    width="50px"
                    height="auto"
                    className=" ml-auto sm:ml-0 mr-auto"
                  />
                  <ul className="flex my-4 justify-center sm:justify-start">
                    <li>
                      <img
                        src={twitter}
                        width="20px"
                        height="auto"
                        className=""
                      />
                    </li>
                    <li>
                      <img
                        src={githhub}
                        width="20px"
                        height="auto"
                        className="ml-8"
                      />
                    </li>
                    <li>
                      <img
                        src={ball}
                        width="20px"
                        height="auto"
                        className="ml-8"
                      />
                    </li>
                  </ul>
                </div>
              </Fade>
            </div>
            <Fade top>
              <div className="col-span-6 sm:col-span-2">
                <h1 className="text-primary-light text-sm f-f-sm-b">
                  GETTING STARTED
                </h1>
                <ul>
                  <li className="text-primary-light text-base f-f-r mt-4">
                    Tutorials
                  </li>
                  <li className="text-primary-light text-base f-f-r mt-2">
                    Import
                  </li>
                  <li className="text-primary-light text-base f-f-r mt-2">
                    Download
                  </li>
                  <li className="text-primary-light text-base f-f-r mt-2">
                    Remnote Clipper
                  </li>
                </ul>
              </div>
              <div className="col-span-6 sm:col-span-2">
                <h1 className="text-primary-light text-sm f-f-sm-b">Support</h1>
                <ul>
                  <li className="text-primary-light text-base f-f-r mt-4">
                    Pricing
                  </li>
                  <li className="text-primary-light text-base f-f-r mt-2">
                    Forum
                  </li>
                  <li className="text-primary-light text-base f-f-r mt-2">
                    Youtube
                  </li>
                  <li className="text-primary-light text-base f-f-r mt-2">
                    API Docs
                  </li>
                </ul>
              </div>
              <div className="col-span-6 sm:col-span-2">
                <h1 className="text-primary-light text-sm f-f-sm-b">Company</h1>
                <ul>
                  <li className="text-primary-light text-base f-f-r mt-4">
                    About
                  </li>
                  <li className="text-primary-light text-base f-f-r mt-2">
                    Careers
                  </li>
                  <li className="text-primary-light text-base f-f-r mt-2">
                    Youtube
                  </li>
                  <li className="text-primary-light text-base f-f-r mt-2">
                    Contact Us
                  </li>
                </ul>
              </div>
            </Fade>
            <div className="col-span-6 sm:col-span-2">
              <Fade right>
                <h1 className="text-primary-light text-sm f-f-sm-b">Legal</h1>
                <ul>
                  <li className="text-primary-light text-base f-f-r mt-4">
                    Privacy
                  </li>
                  <li className="text-primary-light text-base f-f-r mt-2">
                    Terms
                  </li>
                </ul>
              </Fade>
            </div>
          </div>
          <Fade bottom>
            <h1 className="text-primary-light text-base f-f-r my-4 text-center ">
              © 2020 Remnote, Inc. All rights reserved.
            </h1>
          </Fade>
        </div>
      </div>
    </>
  );
}
