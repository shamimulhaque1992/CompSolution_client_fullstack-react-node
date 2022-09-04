import React from "react";
import Countdown from "react-countdown";

const Countdowns = () => {
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="font-mono sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl xxl:text-6xl">
              <span>{days}</span>
            </span>
            days
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="font-mono sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl xxl:text-6xl">
              <span>{hours}</span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="font-mono sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl xxl:text-6xl">
              <span>{minutes}</span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="font-mono sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl xxl:text-6xl">
              <span>{seconds}</span>
            </span>
            sec
          </div>
        </div>
      );
    }
  };
  return <Countdown date={Date.now() + 500000000} renderer={renderer} />;
};

export default Countdowns;
