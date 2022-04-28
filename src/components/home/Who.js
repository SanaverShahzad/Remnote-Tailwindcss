import React from "react";
import chiniesMens from "../../assets/images/Rectangle 20744.png";
import whoimg from "../../assets/images/Rectangle 20745.png";
import computermen from "../../assets/images/Rectangle 20746.png";
import randomimg from "../../assets/images/Frame 143725606.png";
import randomimg2 from "../../assets/images/Frame 1437256067.png";
import star from "../../assets/images/Group 143725432.png";
import { Fade, Roll, LightSpeed } from "react-reveal";
export default function Who() {
  return (
    <>
      <div className=" w-11/12 lg:w-10/12  ml-auto mr-auto mb-20  ">
        <Fade left>
          <h1 className="text-primary-dark text-3xl md:text-6xl f-f-b  ">
            Who are we?
          </h1>
        </Fade>
        <div className="grid grid-row grid-cols-2 my-5 gap-10 lg:gap-20">
          <Fade left>
            <div className=" col-span-2 md:col-span-1">
              <img src={chiniesMens} className="who-img" />
            </div>
          </Fade>
          <Fade right>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-primary-dark text-xl f-f-sm-b lg:mt-10 ">
                People at RemNote typically share a strong sense of mission,
                desire for autonomy and ownership over a domain, and a strong
                generalist skillset within a domain or across domains.
              </h4>
              <h4 className="text-primary-dark text-xl f-f-sm-b mt-4 ">
                People here are passionate about learning and gaining mastery
                over one or multiple domains.
              </h4>
            </div>
          </Fade>
          {/* drop    */}
          <Fade left>
            <div className="col-span-2 md:col-span-1 hidden sm:block ">
              <h2 className="text-primary-dark text-2xl f-f-b ">
                Individuals at RemNote are{" "}
              </h2>
              <ul className="list-disc ml-7">
                <li className="text-primary-dark text-lg f-f-sm-b ">
                  {" "}
                  Productivity enthusiasts
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  8th at US memory championships
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  Founders of SaaS company at ag﻿e 19{" "}
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  MIT AI PhD dropouts
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  Aspiring Polymaths
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  Capable of riding a 6 foot unicycle
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  Pioneer.app winners
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  College dropouts
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  Emergent Ventures fellowship winners
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  Experts on incremental reading
                </li>
              </ul>
            </div>
          </Fade>
          <Fade right>
            <div className="col-span-2 md:col-span-1">
              <div className="grid grid-row grid-cols-2 gap-5 ">
                <div className="col-span-2 md:col-span-1">
                  <img src={whoimg} width="100%" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <img src={computermen} width="100%" />
                </div>
                <div className="col-span-2 md:hidden ">
                  <h2 className="text-primary-dark text-2xl f-f-b ">
                    Individuals at RemNote are{" "}
                  </h2>
                  <ul className="list-disc ml-7">
                    <li className="text-primary-dark text-lg f-f-sm-b ">
                      {" "}
                      Productivity enthusiasts
                    </li>
                    <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                      8th at US memory championships
                    </li>
                    <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                      Founders of SaaS company at ag﻿e 19{" "}
                    </li>
                    <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                      MIT AI PhD dropouts
                    </li>
                    <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                      Aspiring Polymaths
                    </li>
                    <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                      Capable of riding a 6 foot unicycle
                    </li>
                    <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                      Pioneer.app winners
                    </li>
                    <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                      College dropouts
                    </li>
                    <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                      Emergent Ventures fellowship winners
                    </li>
                    <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                      Experts on incremental reading
                    </li>
                  </ul>
                </div>
              </div>

              <img src={randomimg} width="100%" className="mt-10" />
            </div>
          </Fade>
          <Roll left>
            <div className="col-span-2 md:hidden ">
              <h2 className="text-primary-dark text-2xl f-f-b ">
                Individuals at RemNote are{" "}
              </h2>
              <ul className="list-disc ml-7">
                <li className="text-primary-dark text-lg f-f-sm-b ">
                  {" "}
                  Productivity enthusiasts
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  8th at US memory championships
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  Founders of SaaS company at ag﻿e 19{" "}
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  MIT AI PhD dropouts
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  Aspiring Polymaths
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  Capable of riding a 6 foot unicycle
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  Pioneer.app winners
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  College dropouts
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  Emergent Ventures fellowship winners
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  Experts on incremental reading
                </li>
              </ul>
            </div>
          </Roll>
          <Roll left>
            <div className="col-span-2 md:col-span-1">
              <img src={randomimg2} width="100%" className="" />
            </div>
          </Roll>
          <Roll right>
            <div className="col-span-2 md:col-span-1 hidden sm:block ">
              <h2 className="text-primary-dark text-2xl f-f-b ">
                Individuals at RemNote have{" "}
              </h2>
              <ul className="list-disc ml-7">
                <li className="text-primary-dark text-lg f-f-sm-b ">
                  300k SRS practice interactions
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  Worked on world’s largest physics experiment
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  Built two social media platforms{" "}
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  Solved a rubik’s cube in 13s
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  Built a bank
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  Used SRS to learn coding from scratch
                </li>
                <li className="text-primary-dark text-lg f-f-sm-b mt-1 ">
                  Built a racing game
                </li>
              </ul>
            </div>
          </Roll>
          {/*        drop   down  */}
        </div>
        <LightSpeed left>
          <img
            src={star}
            width="52px"
            height="auto"
            className=" my-20 ml-auto mr-auto  "
          />
        </LightSpeed>
      </div>
    </>
  );
}
