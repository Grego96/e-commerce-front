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
import { addAddress } from "../redux/cartActions";

function Checkout() {
  const user = useSelector((state) => state.user.value);
  const cart = useSelector((state) => state.cart.value);

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  let auxTotal = 0;

  for (const product of cart.product_json) {
    auxTotal = auxTotal + product.product.price * product.quantity;
  }
  useEffect(() => {
    setTotal(auxTotal);
  }, []);

  return (
    <>
      <NavHome />
      <div className="container">
        <h1>Checkout</h1>

        <hr />
        <div className="row">
          <div className="col-xl-6 left-col">
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
                      id="credit-cards"
                      className="checkbox-round-pay"
                      name="pay-method"
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
                      id="mercado-pago"
                      className="checkbox-round-pay"
                      name="pay-method"
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
                      id="paypal"
                      className="checkbox-round-pay"
                      name="pay-method"
                    />
                    <label htmlFor="paypal"> PayPal</label>
                    <img src={paypal} alt="PayPal" style={{ width: "20%", marginLeft: "20px" }} />
                  </div>
                </form>
              </div>
              <Button type="submit" className="button-confirm">
                Confirm payment
              </Button>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="data-container">
              <h2>Order details</h2>
              <div className="personal-data">
                <h4 className="subtitle">Personal data</h4>
                <ul>
                  <li>Firstname: {user.first_name}</li>
                  <li>Lastname: {user.last_name}</li>
                  <li>Email: {user.email}</li>
                </ul>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
