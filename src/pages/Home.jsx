import "./css/Home.css";
import NavHome from "../components/NavHome";
import MainHome from "../components/MainHome";
import FeaturedCollections from "../components/FeaturedCollections";
import StoryHome from "../components/StoryHome";
import ServicesHome from "../components/ServicesHome";
import Footer from "../components/Footer";
import EmailSection from "../components/EmailSection";

function Home() {
  return (
    <div className="home">
      <NavHome />
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
