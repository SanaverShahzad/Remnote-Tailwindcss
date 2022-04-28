import React from "react";
import world from "../../assets/images/Frame 143725651.png";
import world1 from "../../assets/images/Frame 143725660.png";
import world2 from "../../assets/images/Frame 143725653.png";
import Fade from 'react-reveal/Fade';

export default function Global() {
  return (
    <>
    <Fade right >
      <div className=" w-11/12 lg:w-10/12  ml-auto mr-auto my-20  ">
        <div className="grid grid-row grid-cols-3  gap-8  ">
          <div className="col-span-3 sm:col-span-1">
            <img src={world} height="56px" width="56px" />
            <h4 className="text-primary-dark text-xl f-f-sm-b mt-2 ">
              A global and productive team
            </h4>
            <h4 className="text-primary-light  text-base sm:text-lg f-f-r mt-2">
              team.length and growing, we work all across the globe, with
              teammates in X cities and Y countries. We stay close-knit with
              shared team lunches, events, and offsites.
            </h4>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <img src={world1} height="56px" width="56px" />
            <h4 className="text-primary-dark text-xl f-f-sm-b  mt-2 ">
              Dedicated to reinvent learning and thinking
            </h4>
            <h4 className="text-primary-light  text-base sm:text-lg f-f-r mt-2">
              We care deeply about augmenting thinking and making studying fun
              and productive. Let’s “Boost mankind's capability for coping with
              complex, urgent problems”.
            </h4>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <img src={world2} height="56px" width="56px" />
            <h4 className="text-primary-dark text-xl f-f-sm-b  mt-2">
              High curiosity, high impact
            </h4>
            <h4 className="text-primary-light  text-base sm:text-lg f-f-r mt-2">
              We are fiercely protective of our culture, which values community,
              ambition, curiosity, candor, and a perpetual thurst for knowledge.
            </h4>
          </div>
        </div>
      </div>
      </Fade>
    </>
  );
}
