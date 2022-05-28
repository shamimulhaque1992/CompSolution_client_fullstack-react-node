import React from "react";
import { Link } from "react-router-dom";
import useTools from "../../../hooks/useTools";
import SingleTool from "./SingleTool";

const Tools = () => {
  const [tools, setTools] = useTools([]);
  return (
    <div className="container mx-auto mt-52">
      <div className="packages mb-36">
        <h2 className="text-3xl text-sky-400 mb-10">
          Some of Our Hot Products
        </h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mb-20">
        {tools.slice(0, 6).map((tool) => (
          <SingleTool key={tool._id} tool={tool}></SingleTool>
        ))}
      </div>
      <Link to="/allproducts">
        <button className="btn btn-primary mb-10">View all Products</button>
      </Link>
    </div>
  );
};

export default Tools;
