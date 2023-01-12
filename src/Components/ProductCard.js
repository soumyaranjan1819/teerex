import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { add } from "../Store/cartSlice";
import { BiRupee } from "react-icons/bi";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartData);
  const handleAdd = (item) => {
    dispatch(add(item));
  };

  return (
<div className=" sm:min-w-[176px] bg-slate-200 rounded">
      <img
        src={item.imageURL}
        alt={item.name}
        className=" w-[11rem] p-1.5"
      />
      <p className="px-1.5">{item.name}</p>
      <div className="flex justify-between py-1">
        <span className="flex items-center font-semibold text-lg pl-1 ">
          <BiRupee /> {item.price}
        </span>
        <span className="text-sm font-medium cursor-pointer text-white my-1.5 mr-1.5">
          {cart.some((i) => item.id === i.id) ? (
            <span className="py-1 px-2 rounded bg-sky-600">
              <Link to={"/cart"}> Go to Cart </Link>
            </span>
          ) : (
            <span
              className="py-1 px-2 rounded bg-orange-600"
              onClick={() => handleAdd(item)}
            >
              Add to Cart
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
