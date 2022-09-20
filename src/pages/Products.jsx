import "./css/Products.css";

import NavHome from "../components/NavHome";
import ProductsHeader from "../components/ProductsHeader";
import NavProducts from "../components/NavProducts";
import ProdAndCateg from "../components/ProdAndCateg";
import Footer from "../components/Footer";
import EmailSection from "../components/EmailSection";
import { useState } from "react";

function Products() {
  const [show, setShow] = useState(false);


  return (
    <>
      <NavHome show={show} setShow={setShow}/>
      <ProductsHeader />
      <NavProducts />
      <ProdAndCateg />
      <EmailSection />
      <Footer />
    </>
  );
}

export default Products;
