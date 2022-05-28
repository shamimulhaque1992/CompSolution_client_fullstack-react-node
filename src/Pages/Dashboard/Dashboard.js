import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content relative">
        {/* <!-- Page content here --> */}
        <h1 className="text-2xl text-primary">
          Welcome! <br />
          {user.displayName} <br /> to your Dashboard <br /> You have{" "}
          <span className="text-success text-3xl">
            {admin ? "Admin" : "User"}
          </span>{" "}
          Access
        </h1>
        <p>
          {admin ? (
            <i className="fa-solid fa-user-gear text-5xl mb-5"></i>
          ) : (
            <i className="fa-solid fa-user text-5xl mb-5"></i>
          )}
        </p>
        <Outlet></Outlet>
        <div className="drawerbtn absolute z-20 top-80 ml-2">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost drawer-button lg:hidden mt-0 pt-0"
          >
            <i className="fa-solid fa-angles-right"></i>
          </label>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          {!admin && (
            <li>
              <Link to="/dashboard">My orders</Link>
            </li>
          )}
          {!admin && (
            <li>
              <Link to="/dashboard/addreviews">Add Reviews</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="/dashboard/addproduct">Add product</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="/dashboard/makeadmin">Authorization</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="/dashboard/manageorders">Manage Orders</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="/dashboard/manageproduct">Manage Product</Link>
            </li>
          )}
          <li>
            <Link to="/dashboard/myprofile">My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
