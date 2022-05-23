import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";


const Navbar = () => {
  
  const [user] = useAuthState(auth);
  console.log(user);
  const handleSignOut = ()=> {
    signOut(auth)
  };
  const navitem = (
    <>
      <li>
        <Link to="/home">
          <i className="fa-solid fa-house"></i>Home
        </Link>
      </li>
      <li className="">
        <Link to="/about">About</Link>
      </li>
      <li className="">
        <Link to="/reviews">Reviews</Link>
      </li>
      <li className="">
        <Link to="/contactus">Contact Us</Link>
      </li>
    </>
  );
  const search = (
    <>
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered"
        />
      </div>
    </>
  );
  return (
    <div className="flex justify-between navbar bg-base-100 flexitcolumn">
      {/* nav menu dropdown */}
      <div className="flex justify-around">
        <div className="flex-none dropdown hidden showItems">
          <label
            tabIndex="0"
            className=" btn btn-ghost btn-circle dropdown-hover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navitem}
            <div className="hidden showItems">{search}</div>
          </ul>
        </div>

        {/* logo */}
        <div className="flex-none">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <i className="fa-solid fa-desktop text-zinc-700 mr-1"></i>
            CS
          </Link>
        </div>
      </div>
      {/* nav items */}
      <div className="flex-1 w-40 hideItem">
        <ul className="menu menu-horizontal p-0">{navitem}</ul>
      </div>

      <div className="gap-2">
        {/* search */}
        <div className="hideItem">{search}</div>

        {/* cart */}
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex="0"
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* profile */}
        <div className="dropdown dropdown-end">
          {user ? (
            <>
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={user?.photoURL?(user.photoURL):""}
                    alt=""
                  />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
                <li>
                  <Link to="/" onClick={handleSignOut} className="btn btn-sm btn-ghost text-lg normal-case justify-start pt-0">Logout</Link>
                </li>
              </ul>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-sm btn-ghost text-lg normal-case"
              >
                Login
              </Link>
            </>
          )}
        </div>

        {/* notification */}
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
