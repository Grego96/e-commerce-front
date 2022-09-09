import React from "react";
import NavCardProduct from "./NavCardProduct";
import LoginHome from "./LoginHome";
import bicycle1 from "../img/bicycles/RadCity 4 Electric Commuter Bike/City4HS_Black_side.png";
import bicycle2 from "../img/bicycles/RadCity 5 Plus Electric Commuter Bike/City5STCharcoal_side.png";
import bicycle3 from "../img/bicycles/RadExpand 5 Electric Folding Bike/ExpandBlack_Side.png";
import bicycle4 from "../img/bicycles/RadMission Electric Hybrid Bike/MissionMS_white_side.png";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavCart from "./NavCart";
import { Link } from "react-router-dom";

function Nav_home() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" className="px-5" bg="white">
        <Navbar.Brand>
          <Link to="/">RAD POWER BIKES</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="me-auto">
            <Nav.Link>
              <div className="nav-home-item nav-home-item1">
                <p className="m-0 p-0 p-lg-3">Ebikes</p>
                <svg
                  className="icon icon--arrow-bottom icon--arrow-bottom1 d-none d-lg-block"
                  viewBox="0 0 14 8"
                  role="presentation"
                  fill="none"
                >
                  <path
                    d="M1 1L7 7L13 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  ></path>
                </svg>
              </div>
              <div className="menu-hover1">
                <div className="row">
                  <div className="col-md-3">
                    <div className="left-menu">
                      <h5>Explore our award-winning ebikes</h5>
                      <p>
                        Our electric bikes have won more awards than any other brand from Electric
                        Bike Review.
                      </p>
                      <Link to="/products">
                        <button className="featured-card-button">See all Ebikes</button>
                      </Link>
                      <h6>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.584C12.7674 22.1954 10.5573 22.122 8.53447 21.3747C6.51168 20.6274 4.78465 19.2462 3.61096 17.4372C2.43727 15.6281 1.87979 13.4882 2.02168 11.3364C2.16356 9.18467 2.99721 7.13643 4.39828 5.49718C5.79935 3.85793 7.69279 2.71549 9.79619 2.24025C11.8996 1.76502 14.1003 1.98245 16.07 2.86011"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M22 4L12 14.01L9 11.01"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        14-day free trial
                      </h6>
                      <h6>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.584C12.7674 22.1954 10.5573 22.122 8.53447 21.3747C6.51168 20.6274 4.78465 19.2462 3.61096 17.4372C2.43727 15.6281 1.87979 13.4882 2.02168 11.3364C2.16356 9.18467 2.99721 7.13643 4.39828 5.49718C5.79935 3.85793 7.69279 2.71549 9.79619 2.24025C11.8996 1.76502 14.1003 1.98245 16.07 2.86011"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M22 4L12 14.01L9 11.01"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        1-year warranty
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6">
                        <NavCardProduct img={bicycle1} categorie={"Off-road"} />
                      </div>
                      <div className="col-md-6">
                        <NavCardProduct img={bicycle2} categorie={"Cargo & ulility"} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <NavCardProduct img={bicycle4} categorie={"Folding"} />
                      </div>
                      <div className="col-md-6">
                        <NavCardProduct img={bicycle3} categorie={"Step-thru"} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam repellat deleniti
                    aperiam autem mollitia voluptatibus ipsum officiis numquam possimus quidem optio
                    aliquam distinctio repellendus facilis quae accusantium, similique porro
                    necessitatibus!
                  </div>
                </div>
              </div>
            </Nav.Link>
            <Nav.Link>
              <div className="nav-home-item">
                <p className="m-0 p-0 p-lg-3">Accessories</p>
                <svg
                  className="icon icon--arrow-bottom icon--arrow-bottom2 d-none d-lg-block"
                  viewBox="0 0 14 8"
                  role="presentation"
                  fill="none"
                >
                  <path
                    d="M1 1L7 7L13 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  ></path>
                </svg>
              </div>
            </Nav.Link>
            <Nav.Link>
              <div className="nav-home-item">
                <p className="m-0 p-0 p-lg-3">Service & support</p>
                <svg
                  className="icon icon--arrow-bottom icon--arrow-bottom3 d-none d-lg-block"
                  viewBox="0 0 14 8"
                  role="presentation"
                  fill="none"
                >
                  <path
                    d="M1 1L7 7L13 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  ></path>
                </svg>
              </div>
            </Nav.Link>
            <Nav.Link>
              <div className="nav-home-item">
                <p className="m-0 p-0 p-lg-3">About Rad</p>
                <svg
                  className="icon icon--arrow-bottom icon--arrow-bottom4 d-none d-lg-block"
                  viewBox="0 0 14 8"
                  role="presentation"
                  fill="none"
                >
                  <path
                    d="M1 1L7 7L13 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  ></path>
                </svg>
              </div>
            </Nav.Link>
          </Nav>
          <Nav className="flex-row justify-content-between">
            <Nav.Link>Test Ride</Nav.Link>
            <div className="login-register-container d-flex flex-row">
              <Nav.Link className="px-2">
                <svg
                  onClick={() => {
                    handleShow();
                  }}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </Nav.Link>
              <Nav.Link className="px-2">
                <svg
                  onClick={() => {
                    handleShow2();
                  }}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <LoginHome />
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas show={show2} onHide={handleClose2} placement="end">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <NavCart />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Nav_home;
