import React from "react";
import { Link } from "react-router-dom";
function NavCardProduct({ img, categorie }) {
  return (
    <div className="card-nav">
      <img src={img} alt="" className="right-img-card" />
      <div className="d-flex align-items-center justify-content-center">
        <h4 className="m-3 categorie-nav">{categorie}</h4>
        <Link to="/products">
          <button className="featured-card-button">See categorie</button>
        </Link>
      </div>
    </div>
  );
}

export default NavCardProduct;
