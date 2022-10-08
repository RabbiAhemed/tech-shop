import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //   state for cart
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  // generate a random index and replace it to the previous state
  const random = (itemsCart) => {
    console.log(itemsCart);
    const randomItem = itemsCart[Math.floor(Math.random() * itemsCart.length)];

    setCart([randomItem]);
  };

  const clearAll = (items) => {
    setCart([]);
  };

  return (
    <div className="d-flex justify-content-center align-items-top">
      <div className="products-container my-5 container">
        {products.map((product) => (
          <Product
            product={product}
            addToCart={addToCart}
            key={product.id}
          ></Product>
        ))}
      </div>
      <div>
        <Cart
          cart={cart}
          key={cart.Idx}
          clearAll={clearAll}
          random={random}
        ></Cart>
      </div>
    </div>
  );
};

export default Products;
