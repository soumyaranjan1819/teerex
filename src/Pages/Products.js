import { useState, useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import axios from "axios";

const API =
  " https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json ";

const Products = () => {
  const [data, setData] = useState([]);
  const getProducts = async (URL) => {
    try {
      const response = await axios.get(URL);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProducts(API);
  }, []);

  // const getFilteredData = () => {
  //   const response = data.filter((item) => item.color === "black");
  //   setData(response);
  //   console.log(response);
  // };

  const onChangeHandler = (e)=>{
    console.log(e.target.value);
  }

  return (
    <div className="flex relative top-16">
      {/* <aside className="hidden md:block w-[28vw] h-[100vh] bg-slate-300 fixed">
        <h2 className=" text-xl mx-5 my-2 py-1 border-slate-400 border-b-[1.5px]">
          Filters
        </h2>
        <input type="text" name="search" onChange={onChangeHandler} />
      </aside> */}

      <section className="flex flex-wrap gap-5 justify-center my-7 absolute right-0">
        {data.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
};

export default Products;
