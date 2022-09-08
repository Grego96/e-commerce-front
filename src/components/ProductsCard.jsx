import React from "react";
import Card from "react-bootstrap/Card";

const ProductsCard = ({ productImg }) => {
  return (
    <>
      <Card style={{ border: "none" }}>
        <Card.Img variant="top" src={productImg} className="product-img" />
        <Card.Body>
          <Card.Title className="title">RadRunner 2</Card.Title>
          <Card.Text>
            <p className="card-text">Electric Utility Bike</p>
          </Card.Text>
          <Card.Text>
            <p className="card-text">For riders 4'11" - 6'2"</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductsCard;
