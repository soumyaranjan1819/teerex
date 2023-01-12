import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  remove,
  addQuantity,
  subQuantity,
  getCartTotal,
} from "../Store/cartSlice";
import { MdDelete } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import emptyCartImg from "../../src/emptycart.jpg";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();

  const { cartData, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(getCartTotal());
  });

  const handleRemove = (product) => {
    dispatch(remove(product));
  };

  const handleSubtractQuantity = (product) => {
    product.qty > 1
      ? dispatch(subQuantity(product))
      : alert("Reached Minimum Limit");
  };

  const handleAddQuantity = (product) => {
    product.qty < product.quantity
      ? dispatch(addQuantity(product))
      : alert("Reached Maximum Limit");
  };

  let displayCartDetails = cartData.length ? "block" : "hidden";
  let displayEmptyCartImg = !(cartData.length) ? "block" : "hidden";

  return (
    <>
      <div className={`${displayEmptyCartImg} flex flex-col items-center mt-14`}>
        <img className="w-[60vw] md:w-[360px]" src={emptyCartImg} alt="emptycart" />
        <p className=" text-lg font-medium mb-2">Your cart is empty!</p>
        <p className=" hidden sm:block" >Explore our wide selection and find something you like</p>
        <span className=" font-medium mt-5 hover:bg-orange-500 py-1 p-2 rounded bg-orange-400">
          <Link to={"/"}> Shop Now </Link>
        </span>
      </div>
      <div className="md:flex">
        <div className={`${displayCartDetails} md:w-[75vw] ml-5`}>
          <h3 className="text-2xl font-semibold mb-4">Cart</h3>
          <div className=" flex flex-wrap gap-5">
            {cartData &&
              cartData.map((p) => (
                <div
                  className=" w-[11rem] p-1.5 bg-slate-200 rounded"
                  key={p.id}
                >
                  <img
                    src={p.imageURL}
                    alt={p.name}
                    className=" w-[11rem] h-[11rem] "
                  />
                  <p className="my-2 font-medium text-lg">{p.name}</p>
                  <span className="flex items-center font-semibold text-lg">
                    <BiRupee /> {p.price}
                  </span>
                  <div className="flex justify-between mt-2">
                    <span className="pl-0.5 font-semibold">
                      <span
                        className=" cursor-pointer text-lg px-1.5 pb-1 rounded-full text-white bg-black"
                        onClick={() => handleSubtractQuantity(p)}
                      >
                        -
                      </span>
                      <span className="pt-0.5 pb-1 px-2 mx-2 rounded text-white bg-black">
                        {p.qty}
                      </span>
                      <span
                        className=" cursor-pointer text-lg px-1 pb-1 rounded-full text-white bg-black"
                        onClick={() => handleAddQuantity(p)}
                      >
                        +
                      </span>
                    </span>
                    <span
                      className="text-2xl py-1 px-2  text-red-600 cursor-pointer"
                      onClick={() => handleRemove(p)}
                    >
                      <MdDelete />
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <section
          className={`${displayCartDetails} md:w-[30vw] lg:w-[25vw] bg-slate-300 py-3 md:pt-0 mt-5 md:mt-0`}
        >
          <h3 className=" text-xl font-semibold text-gray-700 ml-5 my-2.5 tracking-wide ">
            PRICE DETAILS
          </h3>
          <hr />
          <div className="px-7 ">
            <div className="flex flex-col gap-2 my-2">
              <p className="flex justify-between">
                Items : <span>{cartData.length}</span>
              </p>
              <p className="flex justify-between">
                Quantity : <span>{totalQuantity}</span>
              </p>
            </div>
            <hr />
            <p className="my-3 font-semibold text-xl lg:text-2xl flex justify-between">
              <span>Total Price :</span> <span>{totalPrice}</span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
