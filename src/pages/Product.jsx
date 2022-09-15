import "./css/Product.css";
import ProductHeader from "../components/ProductHeader";
import ProductDetails from "../components/ProductDetails";
import ProductSugested from "../components/ProductSugested";
import Navbar from "../components/NavHome";
import Footer from "../components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const [product, setProduct] = useState();
  const params = useParams();

  useEffect(() => {
    async function getBike() {
      const response = await axios({
        method: "get",
        baseURL: `${process.env.REACT_APP_API_BASE}/products/${params.slug}`,
      });
      if (response) {
        setProduct(response.data);
      }
    }
    getBike();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {product && (
        <>
          <Navbar />
          <ProductHeader product={product} />
          <ProductDetails />
          <ProductSugested />
          <Footer />
        </>
      )}
    </>
  );
}

export default Product;
