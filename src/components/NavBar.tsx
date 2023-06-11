import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    // <nav className="flex items-center mx-8 mt-4">
    //   <img className="mr-auto" width={60} src={logo} alt="Liyab Logo" />
    //   <div className="mr-auto text-4xl ">
    //     <h1 className="text-liyab-hot-red">Liyab</h1>
    //   </div>
    // </nav>
    <nav className="navbar ">
      <div className="navbar-start">
        {/* Hamburger Menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
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
        <img className="mr-auto" width={60} src={logo} alt="Liyab Logo" />
      </div>
      <div className="hidden navbar-center lg:flex">
        <NavLink to={"/"}>Home</NavLink>
      </div>
    </nav>
  );
}
