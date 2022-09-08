import React from "react";
import svg from "../img/others/filter.png";

const NavProducts = () => {
  return (
    <div className="nav-products">
      <div className="nav-filter-container">
        <div className="nav-filter">
          <img src={svg} alt="Filter" style={{ width: "20px" }} />
          <h5 id="filter">Filter</h5>
        </div>
        <span>11 results</span>
      </div>

      <div className="nav-view grid-view">
        <button>
          <strong>Grid view</strong>
        </button>
      </div>

      <div className="nav-view">
        <button>
          Sort by <strong>Featured</strong>
        </button>
      </div>
    </div>
  );
};

export default NavProducts;
