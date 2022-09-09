import React from "react";
import bicycle1 from "../img/bicycles/RadCity 4 Electric Commuter Bike/City4HS_Black_side.png";
import { useSelector } from "react-redux";
function NavCart() {
  const user = useSelector((state) => state.user.value);

  return (
    <div className="cartNav">
      <p className="yourcart">Your cart: 2 Items</p>
      <div className="cartItem">
        <div className="img-info">
          <img src={bicycle1} alt="" />
          <div className="cartInfo">
            <h4>RadRover 6 Plus Electric Fat Tire Bike</h4>
            <p>Step-Thru / Charcoal</p>
          </div>
        </div>
        <div className="cartButtons">
          <button className="countButtons featured-card-button">-</button>
          <p>1</p>
          <button className="countButtons featured-card-button">+</button>
          <p>$1,999.00</p>
          <button className="countRbuttons featured-card-button">remove</button>
        </div>
      </div>
      <div className="cartItem">
        <div className="img-info">
          <img src={bicycle1} alt="" />
          <div className="cartInfo">
            <h4>RadRover 6 Plus Electric Fat Tire Bike</h4>
            <p>Step-Thru / Charcoal</p>
          </div>
        </div>
        <div className="cartButtons">
          <button className="countButtons featured-card-button">-</button>
          <p>1</p>
          <button className="countButtons featured-card-button">+</button>
          <p>$1,999.00</p>
          <button className="countRbuttons featured-card-button">remove</button>
        </div>
      </div>
      <div className="subtotal">
        <div className="subtotalP">
          <p>Subtotal:</p>
          <p>$3,998.00</p>
        </div>
        <button className="featured-card-button">Begin Checkout</button>
      </div>
      <div
        className="notloged"
        style={
          Object.keys(user).length === 0 && user.constructor === Object
            ? { display: "block", opacity: 1 }
            : { display: "none" }
        }
      >
        <p>you are not loged</p>
        login?
      </div>
    </div>
  );
}

export default NavCart;
