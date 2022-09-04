import React from "react";
import engineer from "../../../assets/images/engineer.png";
import motherboard from "../../../assets/images/motherboard.jpg";
import service from "../../../assets/images/services.gif";

const TakeService = () => {
  return (
    <div
      className="w-11/12 shadow-xl mx-auto mt-10 mb-10"
      style={{
        backgroundImage: `url(${service})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "contain",
      }}
    >
      <div className="flex flex-col lg:flex-row-reverse justify-between items-center w-full p-5">
        <img
          src={motherboard}
          className="sm:w-18/12 sm:h-48 md:w-4/12 md:h-48 lg:w-4/12 lg:h-full sm:pb-5 md:pb-5 lg:pb-0 max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div
          className="sm:w-11/12 md:w-10/12 lg:w-3/12 sm:p-5 md:p-10 rounded-md text-rose-100"
          style={{ backgroundColor: "rgb(220 86 244 / 90%)" }}
        >
          <h1 className="font-bold sm:text-xl md:text-2xl xl:text-3xl">
            Take serveices
          </h1>
          <p className="py-6 sm:text-sm md:text-sm xl:text-lg text-left font-bold">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-sm btn-primary">Read Details</button>
        </div>
      </div>
    </div>
  );
};

export default TakeService;
