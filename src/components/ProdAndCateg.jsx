import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoriesSection from "../components/CategoriesSection";
import Card from "react-bootstrap/Card";
import product1 from "../img/bicycles/RadRover 6 Plus Electric Fat Tire Bike/High-Step/Rover6HS_charcaol_side.png";
import { Link } from "react-router-dom";
const ProdAndCateg = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await axios({
          method: "get",
          baseURL: `${process.env.REACT_APP_API_BASE}/products`,
        });
        setProducts(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      {products && (
        <div className="products-container">
          <div className="row">
            <div className="col-2 remove-col">
              <CategoriesSection />
            </div>
            <div className="col-10 col-xs-12 bikes-container">
              {products.map((product) => {
                return (
                  <Link key={product.id} to={`/products/${product.slug}`}>
                    <Card style={{ border: "none" }}>
                      <Card.Img variant="top" src={product1} className="product-img" />
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
        </div>
      )}
    </>
  );
};

export default ProdAndCateg;
