import "./css/Products.css";

import Nav_home from "../components/NavHome";
import ProductsHeader from "../components/ProductsHeader";
import NavProducts from "../components/NavProducts";
import ProdAndCateg from "../components/ProdAndCateg";
import Footer from "../components/Footer";

function Products() {
  return (
    <>
      <Nav_home />
      <ProductsHeader />
      <NavProducts />
      <ProdAndCateg />
      <Footer />
    </>
  );
}

export default Products;
