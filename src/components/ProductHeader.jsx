import img1 from "../img/bicycles/RadCity 4 Electric Commuter Bike/City4HS_Black_angle.png";
import img2 from "../img/bicycles/RadCity 4 Electric Commuter Bike/City4HS_Black_side.png";
import minus from "../img/icons/minus.svg";
import plus from "../img/icons/plus.svg";
import calendar from "../img/icons/calendar.svg";
import shield from "../img/icons/shield.svg";
import headphones from "../img/icons/headphones.svg";
import "./css/ProductHeader.css";
import ServiceItem from "./ProductServiceItem";
import { useState } from "react";

function ProductHeader({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      {console.log(product)}
      <section className="container-fluid ">
        <div className="go-back">{/* <a href="">Go back</a> */}</div>
        <div className="row">
          <div className="product-images col-lg-6">
            <img src={img1} alt="" className="bg-light mb-3" />
            <img src={img2} alt="" className="bg-light mb-3" />
          </div>
          <div className="product-info col-lg-6">
            <div>
              <div className="up-title">{product.category.name}</div>
              <h3>{product.name}</h3>
              <div className="product-price-wrapper">
                <div className="product-price">${product.price}</div>
              </div>
              <p>{product.description}</p>
              <div className="d-flex justify-content-around my-4">
                <ServiceItem img={calendar} text={"14-day free trial"} />
                <ServiceItem img={shield} text={"1 year warranty"} />
                <ServiceItem img={headphones} text={"Ask our experts"} />
              </div>
            </div>
            <div className="buy-product-wrapper">
              <div className="quantity-wrapper">
                <div
                  className="quantity-modifier"
                  onClick={() => {
                    if (quantity > 1) setQuantity(quantity - 1);
                  }}
                >
                  <img src={minus} alt="" className="quantity-icon"></img>
                </div>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  name=""
                  id=""
                  className="product-quantity"
                  readOnly
                />
                <div
                  className="quantity-modifier"
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                >
                  <img src={plus} alt="" className="quantity-icon" />
                </div>
              </div>
              <button type="" className="add-to-cart-button">
                Add to my cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductHeader;
