import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="fixed top-0 z-50 w-[100%]">
      <nav className="w-screen h-[8vh] flex justify-between items-center bg-dblue">
        <div className="w-fit h-full pl-5 text-white flex text-3xl justify-center items-center font-gtaHeadingText1">
          LSPD
        </div>
        <ul className="nav font-gtaDescriptionText text-whitish justify-self-center w-fit h-[100%] top-[5px] flex flex-row justify-center items-center gap-[5vw] text-[1em]">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#49608E] p-2 rounded-full transition duration-300"
                  : "text-white p-2 rounded-full transition duration-300 hover:bg-[#49608E]"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/most-wanted"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#49608E] p-2 rounded-full transition duration-300"
                  : "text-white p-2 rounded-full transition duration-300 hover:bg-[#49608E]"
              }
            >
              Most Wanted
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/self-defense"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#49608E] p-2 rounded-full transition duration-300"
                  : "text-white p-2 rounded-full transition duration-300 hover:bg-[#49608E]"
              }
            >
              Self Defense
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/lost-and-found"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#49608E] p-2 rounded-full transition duration-300"
                  : "text-white p-2 rounded-full transition duration-300 hover:bg-[#49608E]"
              }
            >
              Lost and Found
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#49608E] p-2 rounded-full transition duration-300"
                  : "text-white p-2 rounded-full transition duration-300 hover:bg-[#49608E]"
              }
            >
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsSection"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#49608E] p-2 rounded-full transition duration-300"
                  : "text-white p-2 rounded-full transition duration-300 hover:bg-[#49608E]"
              }
            >
              News
            </NavLink>
          </li>
        </ul>
        <div className="w-[20%] h-fit flex justify-self-end">
          <NavLink to="/login">
            <button className="bg-white text-black px-10 py-2 border-black border-2 rounded-full hover:bg-[#ecebeb]">
              Login
            </button>
          </NavLink>
          <NavLink to="/signup">
            <button className="bg-gray-800 text-white px-10 py-2 border-white border-2 rounded-full hover:bg-black">
              Sign Up
            </button>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
