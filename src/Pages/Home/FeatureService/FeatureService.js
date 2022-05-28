import React from "react";
import "./FeatureService.css"
import amd from "../../../assets/images/amd.jpg"

const FeatureService = () => {
  return (
    <div className="container mx-auto mt-72">
      <div className="hero fetureHero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={amd}
            className="w-11/12 max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">HOT selling Product</h1>
            <h2 className="text-2xl">AMD Ryzen 3 PRO 4350G Processor</h2>
            <p className="py-6">
              The AMD Ryzen 3 PRO 4350G is a quad-core CPU based on Zen architecture. Whether for work, play, or enjoyment, this AMD Ryzen desktop CPU provides powerful multitasking and multimedia performance at an affordable price. The AMD Ryzen CPU with Radeon Vega integrated graphics is the ideal combo for everyday computing. AMD Ryzen 3 Pro 4350G desktop CPU for socket AM4 with 4 cores and 8 threads. The CPU's basic clock frequency is 3800 MHz, but thanks to Turbo Core technology, it can run at speeds of up to 4000 MHz. The L3 cache has a capacity of 4 MB. Please keep in mind that this chip includes Radeon Vega 6 integrated graphics. The AMD Ryzen 3 PRO 4350G Processor comes with a 03-years warranty.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureService;
