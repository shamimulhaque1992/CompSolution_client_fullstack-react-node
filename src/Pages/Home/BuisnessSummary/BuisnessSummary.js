import React from "react";

import MovingComponent from "react-moving-text";

const BuisnessSummary = () => {
  return (
    <div className="w-11/12 shadow-xl mx-auto mt-28 mb-14">
      <MovingComponent
        className="sm:text-2xl md:text-3xl lg:text-4xl text-indigo-700"
        type="fadeIn"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="infinite"
        fillMode="none"
      >
        Buisness Overview...
      </MovingComponent>
      <div className="flex sm:flex-col md:flex-row justify-around items-center pt-5 pb-5">
        <div className="stats shadow w-5/12 bg-zinc-200">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Monthly sell</div>
            <div className="stat-value">3001K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">New Customer</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Return Customer</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
        <div className="stats shadow w-5/12 bg-primary text-primary-content sm:mt-5 md:mt-0">
          <div className="stat">
            <div className="stat-title">Account balance</div>
            <div className="stat-value">$89,400k</div>
            <div className="stat-actions">
              <button className="btn btn-sm btn-success">See stats</button>
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Monthly Revenue</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions">
              <button className="btn btn-sm">all revinue state</button>
              <button className="btn btn-sm">Revinue last month</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuisnessSummary;
