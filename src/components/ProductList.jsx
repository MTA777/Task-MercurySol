import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import data from "./dummy.json";
import "../stylesheets/ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // const fetchProducts = async () => {
    //   try {
    //     const response = await fetch(
    //       "https://sore-puce-butterfly-cap.cyclic.app/products"
    //       // "https://jsonplaceholder.typicode.com/todos/1"
    //     );
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     const data = await response.json();
    setProducts(data);
    console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
    // };

    // fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
