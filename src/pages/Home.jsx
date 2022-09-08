import "./css/Home.css";
import NavHome from "../components/NavHome";
import MainHome from "../components/MainHome";
import FeaturedCollections from "../components/FeaturedCollections";
import StoryHome from "../components/StoryHome";

function Home() {
  return (
    <div className="home">
      <NavHome />
      <MainHome />
      <FeaturedCollections />
      <StoryHome />
    </div>
  );
}

export default Home;
