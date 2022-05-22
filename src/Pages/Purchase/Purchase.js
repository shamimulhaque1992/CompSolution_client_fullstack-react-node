import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { toolId } = useParams();

  const [tools, setTools] = useState({});
  const url = `http://localhost:5000/tools/${toolId}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTools(data));
  }, [url]);

  return (
    <div>
      <h1>This is purchase</h1>
      <div className="card w-full mx-auto max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Place Order"
                className="btn btn-primary text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
