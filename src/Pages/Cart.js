import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div>
      <h3>Cart</h3>
      {products.map((item) => (
        <div className=" w-[190px]  py-3 px-3 bg-slate-200 rounded">
          <img
            src={item.imageURL}
            alt={item.name}
            className=" w-[11rem] h-[11rem] "
          />
          <p className="mt-1">{item.name}</p>
          <div className="flex justify-between mt-2">
            <span className=" font-semibold text-lg">Rs {item.price}</span>
            <span
              className="text-sm py-1 px-2 rounded bg-black text-white cursor-pointer"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
