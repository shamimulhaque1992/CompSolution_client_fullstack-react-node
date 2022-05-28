import React from "react";
import useTools from "../../hooks/useTools";
import SingleTool from "../Home/Tools/SingleTool";

const AllProducts = () => {
    const [tools, setTools] = useTools([]);
  return (
    <div className="container mx-auto mt-52">
      <div className="packages mb-36">
        <h2 className="text-3xl text-sky-400 mb-10">
          Some of Our Hot Products
        </h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <SingleTool key={tool._id} tool={tool}></SingleTool>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
