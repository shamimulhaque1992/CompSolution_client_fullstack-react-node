import { useEffect, useState } from "react";

const useToken = (user) => {
  console.log("hellow", user);
  const [token, setToken] = useState("");
  useEffect(() => {
    console.log("user inside use token: ");
    const email = user?.user?.email;
    const name = user?.user?.displayName;
    const photo = user?.user?.photoURL;
    const currentUser = { email: email, name: name, photo: photo };
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentUser),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("data inside use token", data);
          const accesstoken = data.token;
          localStorage.setItem("accessToken", accesstoken);
          setToken(accesstoken);
        });
    }
  }, [user]);

  return [token, setToken];
};

export default useToken;
