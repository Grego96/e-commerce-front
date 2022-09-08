import React from "react";
import ProductsCard from "../components/ProductsCard";
import product1 from "../img/bicycles/RadRover 6 Plus Electric Fat Tire Bike/High-Step/Rover6HS_charcaol_side.png";
import CategoriesSection from "../components/CategoriesSection";

const ProdAndCateg = () => {
  return (
    <div className="products-container">
      <div className="row">
        <div className="col-2 remove-col">
          <CategoriesSection />
        </div>

        <div className="col-10 col-xs-12 bikes-container">
          <ProductsCard productImg={product1} />
          <ProductsCard productImg={product1} />
          <ProductsCard productImg={product1} />
          <ProductsCard productImg={product1} />
          <ProductsCard productImg={product1} />
          <ProductsCard productImg={product1} />
          <ProductsCard productImg={product1} />
          <ProductsCard productImg={product1} />
          <ProductsCard productImg={product1} />
        </div>
      </div>
    </div>
  );
};

export default ProdAndCateg;
