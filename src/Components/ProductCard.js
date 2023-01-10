import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { add } from "../Store/cartSlice";
import { BiRupee } from "react-icons/bi";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const handleAdd = (item) => {
    dispatch(add(item));
  };

  // console.log(cart);
  return (
    <div className=" min-w-[190px]  py-3 px-3 bg-slate-200 rounded">
      <img
        src={item.imageURL}
        alt={item.name}
        className=" w-[11rem] h-[11rem] "
      />
      <p className="mt-1">{item.name}</p>
      <div className="flex justify-between mt-2">
        <span className="flex items-center font-semibold text-lg"><BiRupee/> {item.price}</span>
        <span className="text-sm font-medium cursor-pointer">
          {cart.some((i) => item.id === i.id) ? (
            <span className="py-1 px-2 rounded bg-sky-600 text-white">
              <Link to={"/cart"}>Go to Cart</Link>
            </span>
          ) : (
            <span className="py-1 px-2 rounded bg-orange-600 text-white" onClick={() => handleAdd(item)}>Add to Cart</span>
          )}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
