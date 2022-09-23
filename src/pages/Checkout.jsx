import Footer from "../components/Footer";
import NavHome from "../components/NavHome";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import cards from "../img/others/credit-card.png";
import mercadoP from "../img/others/mercado-pago.png";
import paypal from "../img/others/paypal.png";
import { useSelector, useDispatch } from "react-redux";
import "./css/Checkout.css";
import { useEffect, useState } from "react";
import { addAddress, addPaymentMethod } from "../redux/cartActions";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const user = useSelector((state) => state.user.value);
  const cart = useSelector((state) => state.cart.value);
  const token = useSelector((state) => state.token.value);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [payMessage, setPayMessage] = useState("");

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [paymentMethod, setPaymentMethod] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);
  let auxTotal = 0;

  for (const product of cart.product_json) {
    auxTotal = auxTotal + product.product.price * product.quantity;
  }
  useEffect(() => {
    setTotal(auxTotal);
  }, [auxTotal]);

  async function order() {
    try {
      const result = await axios({
        method: "post",
        baseURL: `${process.env.REACT_APP_API_BASE}/orders`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: cart,
      });
      setPayMessage(result.data.message);
      navigate("/thank");
    } catch (error) {
      setPayMessage(error.response.data.message);
      console.log(error);
    }
  }

  return (
    <>
      <NavHome show={show} setShow={setShow} />
      <div className="container">
        <h1>Checkout</h1>

        <hr />
        <div className="row">
          <div className=" col-xl-6 left-col">
            <h3>Address</h3>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control
                    placeholder="1234 Main St"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>City</Form.Label>
                <Form.Control onChange={(e) => setCity(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control onChange={(e) => setPhone(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Country</Form.Label>
                <Form.Control onChange={(e) => setCountry(e.target.value)} />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control onChange={(e) => setPostalCode(e.target.value)} />
                </Form.Group>
              </Row>

              <Button
                className="button-confirm"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(
                    addAddress({
                      address: address,
                      city: city,
                      country: country,
                      phone_number: phone,
                      postal_code: postalCode,
                    }),
                  );
                }}
              >
                Confirm address
              </Button>
            </Form>
            <div className="payment">
              <h2>Payment</h2>
              <div>
                <p>Select payment method</p>
                <form action="">
                  <div>
                    <input
                      type="radio"
                      id="Credit"
                      className="checkbox-round-pay"
                      name="payment-method"
                      onClick={(e) => {
                        setPaymentMethod(e.target.id);
                        dispatch(addPaymentMethod(e.target.id));
                      }}
                    />
                    <label htmlFor="credit-cards"> Credit / Debit card</label>
                    <img
                      src={cards}
                      alt="Credit cards"
                      style={{ width: "40%", marginLeft: "20px" }}
                    />
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="Mercado pago"
                      className="checkbox-round-pay"
                      name="payment-method"
                      onClick={(e) => {
                        setPaymentMethod(e.target.id);
                        dispatch(addPaymentMethod(e.target.id));
                      }}
                    />
                    <label htmlFor="mercado-pago"> Mercado Pago</label>
                    <img
                      src={mercadoP}
                      alt="Mercado Pago"
                      style={{ width: "25%", marginLeft: "10px" }}
                    />
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="Paypal"
                      className="checkbox-round-pay"
                      name="payment-method"
                      onClick={(e) => {
                        setPaymentMethod(e.target.id);
                        dispatch(addPaymentMethod(e.target.id));
                      }}
                    />
                    <label htmlFor="paypal"> PayPal</label>
                    <img src={paypal} alt="PayPal" style={{ width: "20%", marginLeft: "20px" }} />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="data-container">
              <h2>Order details</h2>

              <div
                className="personal-data"
                style={
                  !(Object.keys(user).length === 0 && user.constructor === Object)
                    ? { display: "block", opacity: 1 }
                    : { display: "none" }
                }
              >
                <h4 className="subtitle">Personal data</h4>
                <ul>
                  <li>Firstname: {user.first_name}</li>
                  <li>Lastname: {user.last_name}</li>
                  <li>Email: {user.email}</li>
                </ul>
              </div>

              <div
                className="personal-data"
                style={
                  Object.keys(user).length === 0 && user.constructor === Object
                    ? { display: "block", opacity: 1 }
                    : { display: "none" }
                }
              >
                <p>You must be logged to continue with the purchase.</p>
                <button
                  className="login-checkout"
                  onClick={() => {
                    handleShow();
                  }}
                >
                  Login
                </button>
              </div>

              <div className="personal-data">
                <h4 className="subtitle" style={{ marginTop: "30px" }}>
                  Address
                </h4>
                <ul>
                  <li> Address: {cart.address}</li>
                  <li> City: {cart.city}</li>
                  <li> Country: {cart.country}</li>
                  <li> Phone number: {cart.phone_number}</li>
                  <li> Postal Code: {cart.postal_code}</li>
                </ul>
              </div>
              <div className="personal-data">
                <h4 className="subtitle" style={{ marginTop: "30px" }}>
                  Order Summary
                </h4>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.product_json.map((p, i) => {
                      return (
                        <tr key={i}>
                          <td>{p.product.name}</td>
                          <td>{p.quantity}</td>
                          <td>${p.product.price}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>

                <h5>Total: ${total}</h5>
                <h5>
                  Payment method:{" "}
                  {paymentMethod ? (
                    paymentMethod
                  ) : (
                    <span style={{ color: " #b51a1a" }}>Select payment method.</span>
                  )}
                </h5>
              </div>
              <Button
                type="submit"
                className="button-order"
                style={{ marginTop: "20px" }}
                onClick={() => {
                  order();
                }}
              >
                Confirm order
              </Button>
              {payMessage === "Order created!" ? (
                <p style={{ color: "#3cb63cd2", fontSize: "1.5rem", fontWeight: "bolder" }}>
                  {payMessage}
                </p>
              ) : (
                <p style={{ color: " #b51a1a", fontSize: "1.5rem", fontWeight: "bolder" }}>
                  {payMessage}
                </p>
              )}
              <p style={{ color: "#4d1818" }}>
                {" "}
                {cart.product_json.length < 1 ? "Add at least one item to cart to continue." : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
