import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <nav>
        <div className=""></div>
        <ul>
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
