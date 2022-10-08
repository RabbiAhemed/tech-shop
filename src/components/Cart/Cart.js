import React from "react";
import { Button } from "react-bootstrap";
import "./Cart.css";
// const Cart = ({ cart, random }) => {
const Cart = ({ cart, clearAll, random }) => {
  return (
    <div className="cart-container bg-warning p-5">
      <h5>Number of Item: {cart.length}</h5>
      {cart.map((item) => (
        <li className="text-white">{item}</li>
      ))}
      <Button onClick={() => random(cart)} className="my-4">
        Checkout
      </Button>
      <br />
      <Button onClick={() => random(cart)} className="my-4">
        Random Product
      </Button>
      <br />
      <Button onClick={() => clearAll(cart)} className="my-1">
        Remove All
      </Button>
    </div>
  );
};

export default Cart;
