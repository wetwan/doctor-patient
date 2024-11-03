/* eslint-disable no-unused-vars */
import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { nav } from "../constacnce";
import { useState } from "react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  const naviagte = useNavigate();
  return (
    <nav className=" flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400">
      <img
        src={assets.logo}
        onClick={() => naviagte("/")}
        alt=""
        className=" w-44 cursor-pointer"
      />

      <ul className=" md:flex gap-5 items-center hidden ">
        {nav.map((nav, i) => (
          <NavLink to={nav.link} key={i}>
            <li className="uppercase py-1 ">{nav.title}</li>
            <hr className=" border-none outline-none h-0.5 w-3/5 mx-auto hidden bg-primary " />
          </NavLink>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 group cursor-pointer relative">
            <img
              src={assets.profile_pic}
              alt="profile"
              className="w-8 rounded-full "
            />
            <img
              src={assets.dropdown_icon}
              alt="dropdown"
              className="w-2.5  "
            />
            <div className="capitalize absolute top-0 right-0 pt-14 text-base text-gray-600 gap-x-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex-col flex gap-4 p-4">
                <p
                  onClick={() => {
                    naviagte("/my-profile"), scrollTo(0, 0);
                  }}
                  className=" hover:text-black cursor-pointer "
                >
                  my profile
                </p>
                <p
                  onClick={() => {
                    naviagte("/my-appointments"), scrollTo(0, 0);
                  }}
                  className=" hover:text-black cursor-pointer "
                >
                  {" "}
                  my appointment
                </p>
                <p
                  onClick={() => setToken(false)}
                  className=" hover:text-black cursor-pointer "
                >
                  log out
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="bg-primary text-white font-light px-8 py-3 rounded-full hidden md:block "
            onClick={() => {
              naviagte("/login"), screenTop(0);
            }}
          >
            Login
          </button>
        )}
        <img
          src={assets.menu_icon}
          alt=""
          className="w-6 md:hidden"
          onClick={() => setShowMenu(true)}
        />
        {/* mobile menu  */}
        <div
          className={`md:hidden right-0 top-0 bottom-0 z-50 overflow-hidden text-black bg-white transition-all ${
            showMenu ? "fixed w-full" : "hidden"
          }`}
        >
          <div className=" flex items-center justify-between px-5 py-6">
            <img src={assets.logo} alt="" className="w-36" />
            <img
              src={assets.cross_icon}
              onClick={() => setShowMenu(false)}
              alt=""
              className="w-7"
            />
          </div>
          <ul className=" flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium uppercase">
            {nav.map((nav, i) => (
              <NavLink
                className="px-4 py-2  w-full text-center"
                to={nav.link}
                onClick={() => setShowMenu(false)}
                key={i}
              >
                <li className=" inline-block p-2 rounded">{nav.title}</li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
