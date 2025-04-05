import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="w-full h-full bg-amber-400">
      <nav>
        <div className="">
          <h1 className="font-bold">Watch</h1>
        </div>
        <ul className=" bg-amber-950">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Product</NavLink>
          </li>
          <li>
            <NavLink to={"/services"}>Service</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
