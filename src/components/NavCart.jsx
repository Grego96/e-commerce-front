import React, { useEffect, useState } from "react";
import bicycle1 from "../img/bicycles/RadCity 4 Electric Commuter Bike/City4HS_Black_side.png";
import { useDispatch, useSelector } from "react-redux";
import { add, substract, remove } from "../redux/cartActions";
import { Link } from "react-router-dom";

function NavCart() {
  const user = useSelector((state) => state.user.value);
  const cart = useSelector((state) => state.cart.value);
  const [total, setTotal] = useState(0);

  let auxTotal = 0;

  for (const product of cart.product_json) {
    auxTotal = auxTotal + product.product.price * product.quantity;
  }
  useEffect(() => {
    setTotal(auxTotal);
  }, [cart]);

  const dispatch = useDispatch();

  function handleAdd(product, quantity) {
    dispatch(
      add({
        product,
        quantity,
      }),
    );
  }
  function handleSubstract(p) {
    dispatch(substract(p));
  }

  function handleRemove(p) {
    dispatch(remove(p));
  }

  return (
    <div className="cartNav">
      <p className="yourcart">Your cart: {cart.product_json.length} items</p>
      {cart.product_json.map((p) => {
        return (
          <div className="cartItem">
            <div className="img-info">
              <img src={bicycle1} alt="" />
              <div className="cartInfo">
                <h4>{p.product.name}</h4>
              </div>
            </div>
            <div className="cartButtons">
              <button className="countButtons" onClick={() => handleSubstract(p.product)}>
                -
              </button>
              <p>{p.quantity}</p>
              <button className="countButtons" onClick={() => handleAdd(p.product, 1)}>
                +
              </button>
              <p>${p.product.price}</p>
              <button className="countRbuttons" onClick={() => handleRemove(p.product)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 172 172"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#95a5a6">
                      <path d="M74.53333,17.2c-1.53406,-0.02082 -3.01249,0.574 -4.10468,1.65146c-1.09219,1.07746 -1.70703,2.54767 -1.70704,4.08187h-34.32161c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h103.2c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843h-34.32161c-0.00001,-1.53421 -0.61486,-3.00442 -1.70704,-4.08187c-1.09219,-1.07746 -2.57061,-1.67228 -4.10468,-1.65146zM34.4,45.86667v91.73333c0,6.33533 5.13133,11.46667 11.46667,11.46667h80.26667c6.33533,0 11.46667,-5.13133 11.46667,-11.46667v-91.73333z"></path>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        );
      })}
      <div className="subtotal">
        <div className="subtotalP">
          <p>Subtotal:</p>
          <p>${total}</p>
        </div>
        <Link to="/checkout">
          <button className="checkout">Begin Checkout</button>
        </Link>
      </div>
      <div
        className="notloged"
        style={
          Object.keys(user).length === 0 && user.constructor === Object
            ? { display: "block", opacity: 1 }
            : { display: "none" }
        }
      >
        <p>You are not logged.</p>
        <p>Login?</p>
      </div>
    </div>
  );
}

export default NavCart;
