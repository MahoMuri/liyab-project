import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function NavBar() {
  return (
    // <nav className="flex items-center mx-8 mt-4">
    //   <img className="mr-auto" width={60} src={logo} alt="Liyab Logo" />
    //   <div className="mr-auto text-4xl ">
    //     <h1 className="text-liyab-hot-red">Liyab</h1>
    //   </div>
    // </nav>
    <nav className="p-4 navbar">
      <div className="navbar-start">
        {/* Hamburger Menu */}
        <div className="dropdown">
          <label tabIndex={0} className="text-white swap swap-rotate btn btn-circle btn-outline lg:hidden">
            {/* hidden checkbox to control state */}
            <input type="checkbox" />
            <Icon className="swap-on" icon="line-md:menu" width={24} />
            <Icon
              className="swap-off"
              icon="iconamoon:close-duotone"
              width={24}
            />
          </label>
          <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <img
          className="hidden lg:block"
          width={60}
          src={logo}
          alt="Liyab Logo"
        />
      </div>
      {/* Nav Links */}
      <div className="hidden gap-5 text-xl text-white navbar-center lg:flex font-primary">
        <NavLink to={"/"}>
          {({ isActive }) => (
            <div className="transition duration-300 group">
              Home
              <span
                className={
                  isActive
                    ? "block max-w-full h-0.5 bg-white"
                    : "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"
                }
              ></span>
            </div>
          )}
        </NavLink>
        <NavLink to={"/meetus"}>
          {({ isActive }) => (
            <div className="transition duration-300 group">
              Meet Us
              <span
                className={
                  isActive
                    ? "block max-w-full h-0.5 bg-white"
                    : "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"
                }
              ></span>
            </div>
          )}
        </NavLink>
        <NavLink to={"/contact"}>
          {({ isActive }) => (
            <div className="transition duration-300 group">
              Contact Us
              <span
                className={
                  isActive
                    ? "block max-w-full h-0.5 bg-white"
                    : "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"
                }
              ></span>
            </div>
          )}
        </NavLink>
        <NavLink to={"/events"}>
          {({ isActive }) => (
            <div className="transition duration-300 group">
              Events
              <span
                className={
                  isActive
                    ? "block max-w-full h-0.5 bg-white"
                    : "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"
                }
              ></span>
            </div>
          )}
        </NavLink>
        <NavLink to={"/highlights"}>
          {({ isActive }) => (
            <div className="transition duration-300 group">
              Artist Highlights
              <span
                className={
                  isActive
                    ? "block max-w-full h-0.5 bg-white"
                    : "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"
                }
              ></span>
            </div>
          )}
        </NavLink>
      </div>
      <div className="navbar-end"></div>
    </nav>
  );
}
