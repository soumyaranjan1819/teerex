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

  return (
    <div className="my-8">
      <div className="flex flex-wrap gap-5 justify-center">
        {data.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
