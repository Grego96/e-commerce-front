import "./css/Products.css";

import NavHome from "../components/NavHome";
import ProductsHeader from "../components/ProductsHeader";
import NavProducts from "../components/NavProducts";
import ProdAndCateg from "../components/ProdAndCateg";
import Footer from "../components/Footer";
import EmailSection from "../components/EmailSection";

function Products() {
  return (
    <>
      <NavHome />
      <ProductsHeader />
      <NavProducts />
      <ProdAndCateg />
      {/* <EmailSection /> */}
      <Footer />
    </>
  );
}

export default Products;
