import EmailSection from "../components/EmailSection";
import Footer from "../components/Footer";
import NavBar from "../components/NavHome";
import NotFoundMessage from "../components/NotFoundMessage";
import { useState } from "react";

import "./css/NotFound.css";

function NotFound() {

  const [show, setShow] = useState(false);


  return (
    <>
      <NavBar show={show} setShow={setShow}/>
      <NotFoundMessage />
      <EmailSection />
      <Footer />
    </>
  );
}

export default NotFound;
