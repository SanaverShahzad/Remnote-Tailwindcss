import React from "react";
import arrow_right from "../../assets/images/arrow_right.png";
import Zoom from "react-reveal/Zoom";

export default function Open() {
  const Position = [
    { id: 1, postitionname: "Position Name", name: "Remote" },
    { id: 2, postitionname: "Position Name", name: "Remote" },
    { id: 3, postitionname: "Position Name", name: "Remote" },
    { id: 4, postitionname: "Position Name", name: "Remote" },
  ];

  return (
    <>
      <Zoom bottom>
        <div className="   w-10/12   md:w-9/12 lg:w-6/12  ml-auto mr-auto my-20  ">
          <h1 className="text-primary-dark text-3xl md:text-6xl f-f-b text-center  ">
            Open positions
          </h1>
          <div className="my-10">
            {Position.map((data) => {
              return (
                <>
                  <h4
                    className="text-primary-dark text-base f-f-sm-b mt-4 "
                    key={data.id}
                  >
                    {data.postitionname}
                  </h4>
                  <img src={arrow_right} className="ml-auto" />
                  <h4 className="text-primary-light text-base f-f-r -mt-4">
                    {data.name}
                  </h4>
                  <div className="border-b mt-3" />
                </>
              );
            })}
          </div>
        </div>
      </Zoom>
    </>
  );
}
