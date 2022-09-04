import { useEffect, useState } from "react";

const useTools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("https://serene-shelf-91638.herokuapp.com/tools")
      .then((response) => response.json())
      .then((data) => setTools(data));
  }, []);

  return [tools, setTools];
};

export default useTools;
