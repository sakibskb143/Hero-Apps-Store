import React from "react";
import hero from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#632EE3] border-b-2 border-[#632EE3] font-bold rounded-none px-5"
              : "text-black font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/apps"
          className={({ isActive }) =>
            isActive
              ? "text-[#632EE3] border-b-2 border-[#632EE3] font-bold rounded-none px-5"
              : "text-black font-bold"
          }
        >
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/installation"
          className={({ isActive }) =>
            isActive
              ? "text-[#632EE3] border-b-2 border-[#632EE3] font-bold rounded-none px-5"
              : "text-black font-bold"
          }
        >
          Installation
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm intel">
      <div className="navbar   max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={'/'}>
            <div className="flex items-center gap-2">
              <img className="w-10 h-10" src={hero} alt="" />
              <a className="uppercase text-[#632EE3] border-[#9F62F2] font-bold ">
                Hero.IO
              </a>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn font-bold bg-linear-to-r from-[#9F62F2] to-[#632EE3] text-white ">
            <FaGithub /> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
