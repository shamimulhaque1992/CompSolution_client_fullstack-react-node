import { useEffect, useState } from "react";

const useTools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tools")
      .then((response) => response.json())
      .then((data) => setTools(data));
  }, []);

  return [tools, setTools];
};

export default useTools;
