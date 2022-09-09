import React from "react";
import { Link } from "react-router-dom";

function FeaturedCard({ bicycleImg }) {
  return (
    <div className="featured-card">
      <img src={bicycleImg} alt="" className="right-img-card" />
      <h6>Title</h6>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <Link to="products/1">
        <button className="featured-card-button">View this product</button>
      </Link>
    </div>
  );
}

export default FeaturedCard;
