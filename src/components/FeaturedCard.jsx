import React from "react";
import { Link } from "react-router-dom";
import { shortText } from "limit-text-js";

function FeaturedCard({ product }) {

  return (
    <div className="featured-card">
      <img src={`../img/${product.images.image1}`} alt="" className="right-img-card" />
      <h6>{product.name}</h6>
      <p>{shortText(product.description, 100, "...")}</p>
      <Link to={`products/${product.slug}`}>
        <button className="featured-card-button">View this product</button>
      </Link>
    </div>
  );
}

export default FeaturedCard;
