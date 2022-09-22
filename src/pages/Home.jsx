import "./css/Home.css";
import NavHome from "../components/NavHome";
import MainHome from "../components/MainHome";
import FeaturedCollections from "../components/FeaturedCollections";
import StoryHome from "../components/StoryHome";
import ServicesHome from "../components/ServicesHome";
import Footer from "../components/Footer";
import EmailSection from "../components/EmailSection";
import { useState } from "react";

function Home() {
   const [show, setShow] = useState(false);


  return (
    <div className="home">
      <NavHome show={show} setShow={setShow}/>
      <MainHome />
      <FeaturedCollections />
      <StoryHome />
      <ServicesHome />
      <EmailSection />
      <Footer />
    </div>
  );
}

export default Home;
