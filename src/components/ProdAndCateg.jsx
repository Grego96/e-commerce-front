import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoriesSection from "../components/CategoriesSection";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const ProdAndCateg = () => {
  const [products, setProducts] = useState(null);
  const [categorieId, setCategorieId] = useState(null);

  const getProducts = async () => {
    try {
      const result = await axios({
        method: "get",
        baseURL: `${process.env.REACT_APP_API_BASE}/products`,
        params: {
          categoryId: categorieId,
        },
      });
      setProducts(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [categorieId]);

  return (
    <>
      {products && (
        <div className="products-container">
          <div className="col-2 remove-col">
            <CategoriesSection setCategorieId={setCategorieId} />
          </div>
          <div className="col-10 col-xs-12 bikes-container">
            {products.map((product) => {
              return (
                <Link key={product.id} to={`/products/${product.slug}`}>
                  <Card style={{ border: "none" }}>
                    <Card.Img
                      variant="top"
                      src={`../img/${product.images.image1}`}
                      className="product-img"
                    />
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Title>${product.price}</Card.Title>
                      </div>
                      <Card.Text>Electric Utility Bike</Card.Text>
                      <Card.Text>For riders 4'11" - 6'2"</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default ProdAndCateg;
