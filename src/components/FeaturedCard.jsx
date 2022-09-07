import React from "react";

function FeaturedCard({ bicycleImg }) {
  return (
    <div className="col-6">
      <div className="featured-card">
        <img src={bicycleImg} alt="" className="right-img-card" />
        <h6>Title</h6>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        </p>
        <button className="featured-card-button">View this product</button>
      </div>
    </div>
  );
}

export default FeaturedCard;
