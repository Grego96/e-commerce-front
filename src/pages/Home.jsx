import "./css/Home.css";
import NavHome from "../components/NavHome";
import MainHome from "../components/MainHome";
import FeaturedCollections from "../components/FeaturedCollections";

function Home() {
  return (
    <div className="home">
      <NavHome />
      <MainHome />
      <FeaturedCollections />
    </div>
  );
}

export default Home;
