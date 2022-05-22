import React from "react";

const BasicInfo = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center md:flex-row gap-10 mb-20 mt-52">
      <div className="card lg:card bg-cyan-200 shadow-xl">
        <div className="card-body flex-row items-center">
          <div className="">
            <i className="fa-solid fa-door-open text-5xl "></i>
          </div>
          <div className="">
            <h2 className="card-title justify-center">Opening Hours</h2>
            <p>We are always at your service!</p>
          </div>
        </div>
      </div>

      <div className="card lg:card bg-gray-500 shadow-xl">
        <div className="card-body flex-row items-center">
          <div className="">
            <i className="fa-solid fa-location-dot text-5xl text-white"></i>
          </div>
          <div className="text-white">
            <h2 className="card-title justify-center">Opening Hours</h2>
            <p>We are always at your service!</p>
          </div>
        </div>
      </div>

      <div className="card lg:card bg-emerald-300 shadow-xl">
        <div className="card-body flex-row items-center">
          <div className="">
            <i className="fa-solid fa-square-phone text-5xl"></i>
          </div>
          <div className="">
            <h2 className="card-title justify-center">Opening Hours</h2>
            <p>We are always at your service!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
