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
        baseURL: `${process.env.REACT_APP_API_BASE}/products/${params.id}`,
      });
      if (response) {
        setProduct(response.data);
      }
      console.log(response);
    }
    getBike();
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
