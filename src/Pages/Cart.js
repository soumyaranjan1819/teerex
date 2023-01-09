import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, addQuantity, subQuantity } from "../Store/cartSlice";
import { MdDelete } from "react-icons/md";
import { BiRupee } from "react-icons/bi";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
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
    <div>
      <h3 className="text-2xl font-semibold mb-4">Cart</h3>
      <div className=" flex flex-wrap gap-5 ">
        {products &&
          products.map((p) => (
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
                <span className="px-2 font-semibold rounded text-black border-2 border-black">
                  <span
                    className=" cursor-pointer mx-1 text-xl"
                    onClick={() => handleSubtractQuantity(p)}
                  >
                    -
                  </span>
                  <span className="mx-2">{p.qty} </span>
                  <span
                    className=" cursor-pointer text-lg"
                    onClick={() => handleAddQuantity(p)}
                  >
                    +
                  </span>
                </span>
                <span
                  className="text-2xl py-1 px-2  text-red-600 cursor-pointer"
                  onClick={() => handleRemove(p.id)}
                >
                  <MdDelete />
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cart;
