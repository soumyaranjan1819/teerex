import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex justify-between bg-slate-500 px-20 py-3 text-white">
      <p className="text-4xl font-semibold">TeeRex</p>
      <div className="flex gap-8">
        <NavLink to={"/"}>Products</NavLink>
        <Link to={"/cart"}>Cart</Link>
      </div>
    </div>
  );
};

export default Navbar;
