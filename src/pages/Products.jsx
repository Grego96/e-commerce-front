import "./css/Products.css";
import ProductsCard from "../components/ProductsCard";
import product1 from "../img/bicycles/RadRover 6 Plus Electric Fat Tire Bike/High-Step/Rover6HS_charcaol_side.png";
import CategoriesSection from "./CategoriesSection";
import Nav_home from "../components/NavHome";
import ProductsHeader from "../components/ProductsHeader";
import NavProducts from "../components/NavProducts";

function Products() {
  return (
    <>
      <Nav_home />
      <ProductsHeader />
      <NavProducts />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <CategoriesSection />
          </div>

          <div className="col-10 bikes-container">
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
    </>
  );
}

export default Products;
