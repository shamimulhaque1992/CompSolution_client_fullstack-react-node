import React from "react";
import "./FeatureService.css"

const FeatureService = () => {
  return (
    <div className="container mx-auto mt-72">
      <div className="hero fetureHero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://images.unsplash.com/photo-1531765408077-9a1f85f90df1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGludGVybmV0JTIwY29ubmVjdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
            className="w-11/12 max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Feature Service</h1>
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

export default FeatureService;
