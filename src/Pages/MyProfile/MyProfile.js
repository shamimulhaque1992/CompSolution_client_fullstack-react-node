import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import MyProfileCont from "./MyProfileCont";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;

  const {
    data: users,
    isloading,
    refetch,
  } = useQuery("userss", () =>
    fetch(`https://serene-shelf-91638.herokuapp.com/user/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isloading) {
    return <Loading></Loading>;
  }











  /* const [users, setUsers] = useState([]);
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
  }, [email]); */

  return (
    <div>
      {users?.map((userss, index) => (
        <MyProfileCont key={index} refetch={refetch} userss={userss}></MyProfileCont>
      ))}
    </div>
  );
};

export default MyProfile;
