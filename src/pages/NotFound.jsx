import EmailSection from "../components/EmailSection";
import Footer from "../components/Footer";
import NavBar from "../components/NavHome";
import NotFoundMessage from "../components/NotFoundMessage";

import "./css/NotFound.css";

function NotFound() {
  return (
    <>
      <NavBar />
      <NotFoundMessage />
      <EmailSection />
      <Footer />
    </>
  );
}

export default NotFound;
