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

  return (
    <div className="md:flex">
      <div className="md:w-[75vw] md:border-r-2 ml-5">
        <h3 className="text-2xl font-semibold mb-4">Cart</h3>
        <div className=" flex flex-wrap gap-5">
          {cartData &&
            cartData.map((p) => (
              <div
                className=" w-[190px]  py-3 px-3 bg-slate-200 rounded"
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
                <div className="flex justify-between my-2">
                  <span className="px-2 font-semibold">
                    <span
                      className=" cursor-pointer text-lg px-1.5 pb-1 rounded-full text-white bg-black"
                      onClick={() => handleSubtractQuantity(p)}
                    >
                      -
                    </span>
                    <span className="py-0.5 pb-1 pr-1.5 pl-2.5 mx-2 rounded text-white bg-black">
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
      <section className="md:w-[30vw] lg:w-[25vw] bg-slate-300 py-3 md:pt-0 mt-5 md:mt-0">
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
  );
};

export default Cart;
