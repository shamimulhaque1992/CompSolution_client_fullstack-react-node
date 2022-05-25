import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user)
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content relative">
        {/* <!-- Page content here --> */}
        <h1 className="text-2xl text-primary">Dashboard</h1>
        <Outlet></Outlet>
        <div className="drawerbtn absolute z-20 top-80 ml-2">
          <label for="my-drawer-2" class="btn btn-ghost drawer-button lg:hidden mt-0 pt-0">
            <i class="fa-solid fa-angles-right"></i>
          </label>
        </div>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 text-base-content rounded-2xl">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My orders</Link>
          </li>
          <li>
            <Link to="/dashboard/addreview">Add Reviews</Link>
          </li>
          {admin && <li>
            <Link to="/dashboard/makeadmin">Authorization</Link>
          </li>}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
