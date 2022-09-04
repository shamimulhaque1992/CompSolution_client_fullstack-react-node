import React from "react";
import Countdowns from "../Countdown/Countdown";
import MovingComponent from "react-moving-text";

const Announcement = () => {
  return (
    <div className="flex justify-center items-center flex-col shadow-lg mt-10 p-5 w-11/12 mx-auto">
      <div className="mb-5">
        <MovingComponent
        className="sm:text-2xl md:text-3xl lg:text-4xl text-indigo-700"
          type="shakeVertical"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="infinite"
          fillMode="none"
        >
          Flash Cell! Grab you item soon...
        </MovingComponent>
      </div>
      <div className="">
        <Countdowns></Countdowns>
      </div>
    </div>
  );
};

export default Announcement;
