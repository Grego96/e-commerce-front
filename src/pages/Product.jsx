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

  const [show, setShow] = useState(false);

  async function getBike() {
    try {
      const response = await axios({
        method: "get",
        baseURL: `${process.env.REACT_APP_API_BASE}/products/${params.slug}`,
      });
      if (response) {
        setProduct(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getBike();
  }, []);

  return (
    <>
      {product && (
        <>
          <Navbar show={show} setShow={setShow} />
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
