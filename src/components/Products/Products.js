import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-top">
      <div className="products-container my-5 container">
        {products.map((product) => (
          <Product product={product} key={product.id}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
