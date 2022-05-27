import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyProfileCont from "./MyProfileCont";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  console.log(email);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = `https://serene-shelf-91638.herokuapp.com/user/${email}`;
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, [email]);

  return (
    <div>
      {users.map((userss, index) => (
        <MyProfileCont key={index} userss={userss}></MyProfileCont>
      ))}
    </div>
  );
};

export default MyProfile;
