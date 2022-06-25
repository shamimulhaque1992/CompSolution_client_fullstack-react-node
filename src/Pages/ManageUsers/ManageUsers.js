import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading/Loading";

const ManageUsers = () => {
  const { data: users, isloading,refetch } = useQuery("users", () =>
    fetch("https://serene-shelf-91638.herokuapp.com/user", {
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then((res) => res.json())
  );
  if (isloading) {
    return <Loading></Loading>;
  }
  const makeAdmin = (user) =>{
      const {email} =  user;
      const url = `https://serene-shelf-91638.herokuapp.com/user/admin/${email}`
      console.log(url);
      fetch(url,{
          method: 'PUT',
          headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
      })
      .then((res) => {

          if(res.status===403){
              toast.error('failed to make an admin')
          }
          return res.json()
          
          })
      .then(data => {
          if(data.modifiedCount>0){
              refetch();
          toast.success("Admin Authorization given Successfully!")
          }
          
          
      })
  }

  const removeUsers = (user)=>{
    const email = user.email;
    const url = `https://serene-shelf-91638.herokuapp.com/user/${email}`;
      fetch(url, {
        method: "DELETE",
        headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success('data deleted')
            refetch()
          }
        });
  }
  return (
    <div>
      <h1 className="text-2xl pt-8 pb-8">Available Users: {users?.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>S.NO</th>
              <th>User ID.</th>
              <th>Name</th>
              <th>Make Admin</th>
              <th>Remove User</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>{index + 1}</td>
                <td>{user?._id}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user?.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.name}</div>
                      <div className="text-sm opacity-50">{user?.email}</div>
                    </div>
                  </div>
                </td>

                <th>
                  {user?.role !== "admin" && <button onClick={()=>makeAdmin(user)} className="btn btn-success btn-outline btn-sm w-36 flex justify-between items-center"><i className="fa-solid fa-lock-open text-green"></i><span>Make Admin</span></button>}
                </th>
                <th>
                  <button onClick = {()=>removeUsers(user)} className="btn btn-error btn-outline btn-sm w-36 flex justify-between items-center"><i className="fa-solid text-red fa-trash-can"></i><span>Remove User</span></button>
                </th>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <th></th>
              <th>S.NO</th>
              <th>User ID.</th>
              <th>Name</th>
              <th>Make Admin</th>
              <th>Remove User</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
