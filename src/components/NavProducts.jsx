import React from "react";
import svg from "../img/others/filter.png";

const NavProducts = () => {
  return (
    <div className="nav-container">
      <div className="nav-products container">
        <div className="nav-filter">
          <img src={svg} alt="Filter" style={{ width: "25px" }} />
          <h5 className="filter">Filter</h5>
        </div>

        <span>11 results</span>

        <button>
          Sort by <strong>Featured</strong>
        </button>
      </div>
    </div>
  );
};

export default NavProducts;
