import { useEffect, useState } from "react";

const useTools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("https://com-solution-server.vercel.app/tools")
      .then((response) => response.json())
      .then((data) => setTools(data));
  }, []);

  return [tools, setTools];
};

export default useTools;
