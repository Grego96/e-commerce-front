import React from "react";

function NavCardProduct( {img, categorie} ) {
  return (
    <div className="card-nav">
      <img src={img} alt="" className="right-img-card" />
      <h4>{categorie}</h4>
    </div>
  );
}

export default NavCardProduct;
