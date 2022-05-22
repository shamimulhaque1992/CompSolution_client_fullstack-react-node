import React from "react";
import useTools from "../../../hooks/useTools";
import SingleTool from "./SingleTool";

const Tools = () => {
  const [tools, setTools] = useTools([]);
  return (
    <div className="container mx-auto mt-52">
      <div className="packages mb-36">
        <h4 className="text-xl"> --Services-- Our packages</h4>
        <h2 className="text-3xl text-sky-400 mb-10">
          Some of Our Hot Packages
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row gap-10 mb-20">
        {tools.slice(0, 3).map((tool) => (
          <SingleTool key={tool._id} tool={tool}></SingleTool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
