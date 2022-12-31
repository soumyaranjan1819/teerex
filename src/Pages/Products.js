import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  const [storeItems, setStoreItems] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        " https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json "
      );
      setStoreItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(storeItems);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="my-8">
      <div className="flex flex-wrap gap-5 justify-center">
        {storeItems.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
