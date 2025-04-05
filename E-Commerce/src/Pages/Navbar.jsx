import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../public/Image/Logo.png"

const Navbar = () => {
  return (
    <header className="w-full h-full text-cyan-50 ">
      <nav className="w-1/1  mx-auto align-middle justify-between flex px-35 py-2 bg-amber-700">
        <div className="">
          <img src={logo} className="w-[80px]" alt="" />
        </div>
        <ul className="flex align-middle justify-center gap-5 ">
          <li className="hover:text-blue-300">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="hover:text-blue-300">
            <NavLink to={"/products"}>Product</NavLink>
          </li>
          <li className="hover:text-blue-300">
            <NavLink to={"/services"}>Service</NavLink>
          </li>
          <li className="hover:text-blue-300">
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className="flex align-middle justify-center">
            <NavLink to={"/cart"} >
              <FaShoppingCart />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
