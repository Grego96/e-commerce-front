import React from "react";
import { Link } from "react-router-dom";
import { shortText } from "limit-text-js";
// import img1 from "../img/bicycles/City4HS_Black_angle.png"
// import { useState, useEffect } from "react";

function FeaturedCard({ product }) {
  console.log(product.images.image1);
  // const [img, setImg] = useState("");
  // useEffect(() => {
  //   setImg(product.images.image1);
  // }, []);

  return (
    <div className="featured-card">
      <img src={`../img/${product.images.image1}`} alt="" className="right-img-card" />
      {/* <img src={`../img/bicycles/${img}`} alt="" className="right-img-card" /> */}
      <h6>{product.name}</h6>
      <p>{shortText(product.description, 100, "...")}</p>
      <Link to={`products/${product.slug}`}>
        <button className="featured-card-button">View this product</button>
      </Link>
    </div>
  );
}

export default FeaturedCard;
