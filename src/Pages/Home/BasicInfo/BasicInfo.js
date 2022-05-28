import React from "react";

const BasicInfo = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center md:flex-row gap-10 mb-20 mt-52">
      <div className="card h-80 w-5/12 lg:card bg-cyan-200 shadow-xl">
        <div className="card-body flex-row items-center">
          <div className="">
            <i className="fa-solid fa-door-open text-5xl "></i>
          </div>
          <div className="">
            <h2 className="card-title justify-center">Opening Hours</h2>
            <div className="text-left">
              <p>Sat: 8:00AM-10:30PM</p>
              <p>Sun: 8:00AM-10:30PM</p>
              <p>Mon: 8:00AM-10:30PM</p>
              <p>Tue: 8:00AM-10:30PM</p>
              <p>Wed: 8:00AM-10:30PM</p>
              <p>Thu: 8:00AM-10:30PM</p>
              <p>
                Fri: <span className="text-error">Closed</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card h-80 w-3/12 lg:card bg-gray-500 shadow-xl">
        <div className="card-body flex-row items-center">
          <div className="">
            <i className="fa-solid fa-location-dot text-5xl text-white"></i>
          </div>
          <div className="text-white">
            <h2 className="card-title justify-center">Location</h2>
            <p>We main branch is in Dhaka!</p>
          </div>
        </div>
      </div>

      <div className="card h-80 w-3/12 lg:card bg-emerald-300 shadow-xl">
        <div className="card-body flex-row items-center">
          <div className="">
            <i className="fa-solid fa-square-phone text-5xl"></i>
          </div>
          <div className="">
            <h2 className="card-title justify-center">Contact us</h2>
            <p>We are always at your service!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
