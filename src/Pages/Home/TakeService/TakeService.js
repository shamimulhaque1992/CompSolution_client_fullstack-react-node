import React from "react";
import "./TakeSerivce.css";
import engineer from "../../../assets/images/engineer.png"

const TakeService = () => {
  return (
    <div className="mt-96">
      <div className="hero takeServiceHero bg-base-200">
        <div className="relative hero-content flex-col lg:flex-row">
          <img
            src={engineer}
            className="mt-[-100px] w-11/12 max-w-sm " alt=""
          />
          <div className="mb-16">
            <h1 className="text-5xl font-bold">Take serveices</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeService;
