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

  return (
    <div className="flex relative">
      <aside className="w-[30vw] h-[100vh] bg-slate-300 fixed">

      </aside>
      <section className="flex flex-wrap gap-5 justify-center w-[70vw] my-8 ">
        {data.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
};

export default Products;
