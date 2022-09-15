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
      <div style={{ marginLeft: "16%" }}>
        <h1>Checkout</h1>
        <p>Order #10</p>
      </div>
      <div className="container">
        <hr />
        <div className="row">
          <div className="col left-col">
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
                type="submit"
                style={{ backgroundColor: "orange", border: "1px solid orange", color: "#000" }}
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
                <span>Select payment method</span>
                <form action="">
                  <div>
                    <input type="checkbox" id="credit-cards" className="checkbox-round" />
                    <label htmlFor="credit-cards"> Credit / Debit card</label>
                    <img
                      src={cards}
                      alt="Credit cards"
                      style={{ width: "40%", marginLeft: "20px" }}
                    />
                  </div>
                  <div>
                    <input type="checkbox" id="mercado-pago" className="checkbox-round" />
                    <label htmlFor="mercado-pago"> Mercado Pago</label>
                    <img
                      src={mercadoP}
                      alt="Mercado Pago"
                      style={{ width: "25%", marginLeft: "10px" }}
                    />
                  </div>
                  <div>
                    <input type="checkbox" id="paypal" className="checkbox-round" />
                    <label htmlFor="paypal"> PayPal</label>
                    <img src={paypal} alt="PayPal" style={{ width: "20%", marginLeft: "20px" }} />
                  </div>
                </form>
              </div>
              <Button
                type="submit"
                style={{ backgroundColor: "orange", border: "1px solid orange", color: "#000" }}
              >
                Confirm payment
              </Button>
            </div>
          </div>
          <div className="col">
            <h2>Order details</h2>
            <div className="personal-data">
              <h4 className="subtitle">Personal data</h4>
              <ul>
                <li>Firstname: {user.first_name}</li>
                <li>Lastname: {user.last_name}</li>
                <li>Email: {user.email}</li>
              </ul>
            </div>
            <div>
              <h4 className="subtitle">Address</h4>
              Address: {address}
              <br />
              City: {city} <br />
              Country:{country} <br />
              Postal Code: {postalCode}
            </div>
            <div>
              <h4 className="subtitle">Order Summary</h4>
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
                        <td>{p.product.price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              Total: {total}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
