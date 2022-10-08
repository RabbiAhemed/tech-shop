import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Product.css";
const Product = ({ product }) => {
  let text = product.description;
  let description = text.slice(0, 100).concat("...");
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={product.image}
          className="p-5 product-image"
        />
        <Card.Body>
          <p style={{ height: "90px" }} className="fw-bold">
            {product.title}
          </p>
          <Card.Text style={{ height: "40px" }} className="mt-2 text-muted">
            {description}
          </Card.Text>
          <br />
          <br />
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
