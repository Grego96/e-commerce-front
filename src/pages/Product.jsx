import "./css/Product.css";
import ProductHeader from "../components/ProductHeader";
import ProductDetails from "../components/ProductDetails";
import ProductSugested from "../components/ProductSugested";
import Navbar from "../components/NavHome";
import Footer from "../components/Footer";

function Product() {
  return (
    <>
      <Navbar />
      <ProductHeader />
      <ProductDetails />
      <ProductSugested />
      <Footer />
    </>
  );
}

export default Product;
