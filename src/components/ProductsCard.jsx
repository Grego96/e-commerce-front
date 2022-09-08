import React from "react";
import Card from "react-bootstrap/Card";

const ProductsCard = ({ productImg }) => {
  return (
    <>
      <Card style={{ border: "none" }}>
        <Card.Img variant="top" src={productImg} className="product-img" />
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title className="title">RadRunner 2</Card.Title>
            <Card.Title>$1.999</Card.Title>
          </div>

          <Card.Text>Electric Utility Bike</Card.Text>
          <Card.Text>For riders 4'11" - 6'2"</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductsCard;
