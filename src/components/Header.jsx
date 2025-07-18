import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <nav className="border-slate-950 bg-slate-900 w-full fixed top-0  z-10">
      <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="./../src/assets/movix-logo.svg"
            className="h-8"
            alt="Logo"
          />
        </NavLink>
        <GiHamburgerMenu
          className="hidden max-md:block"
          onClick={() => setToggleNav((prev) => !prev)}
        />
        <div className="w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul
            className={`flex flex-col  mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-right ${
              toggleNav ? "" : "max-md:hidden"
            }`}
          >
            <li>
              <NavLink
                to="/explore/movie"
                className={({ isActive }) =>
                  `${isActive ? "text-pink-700" : "text-white"} py-2`
                }
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/explore/tv"
                className={({ isActive }) =>
                  `${isActive ? "text-pink-700" : "text-white"} py-2`
                }
              >
                Tv Shows
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "text-pink-700" : "text-white"} py-2`
                }
              >
                <i className="fa fa-search" aria-hidden="true"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
