import React from "react";
import {NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="border-slate-950 bg-slate-900 w-full fixed top-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="./../src/assets/movix-logo.svg"
            className="h-8"
            alt="Logo"
          />
        </NavLink>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <NavLink
                to="/explore/movie"
                className={({ isActive}) =>
                  [
                    isActive ? "text-pink-700" : "text-white",
                  ].join("block py-2 px-3 md:p-0")}
              
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/explore/tv"
                className={({ isActive}) =>
                  [
                    isActive ? "text-pink-700" : "text-white",
                  ].join("block py-2 px-3 md:p-0")}
              
              >
                Tv Shows
          </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive}) =>
                  [
                    isActive ? "text-pink-700" : "text-white",
                  ].join("block py-2 px-3 md:p-0")}
              
              >
                <i class="fa fa-search" aria-hidden="true"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
