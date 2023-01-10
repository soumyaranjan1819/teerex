import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className=" flex justify-between bg-slate-500 px-20 py-3 text-white">
      <Link to={"/"} className="text-4xl font-semibold">
        TeeRex
      </Link>
      <div className="flex gap-8 items-center">
        <NavLink to={"/"} className="text-xl">
          Products
        </NavLink>
        <Link to={"/cart"} className="flex text-[2rem] font-medium relative">
          <FaShoppingCart />
          {items.length > 0 ? (
            <span className=" text-sm text-white bg-orange-600 px-1.5 pb-0.5 rounded-full font-semibold absolute left-[55%] top-[-32%] ">
              {items.length}
            </span>
          ) : (
            ""
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
