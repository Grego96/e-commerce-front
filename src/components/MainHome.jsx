import React from "react";
import arrow from "../img/others/right-arrow.png";
import background from "../img/home/HP-Desktop-2048x1152_59e2b83b-10aa-4b54-aa87-7b40b6e59bb1_2000x.webp";

function MainHome() {
  return (
    <div className="main-img" style={{ backgroundImage: `url(${background})` }}>
      <h3>In-Stock & Ready to Ride</h3>
      <p>Our award-winning ebikes are in stock! Find them in-store or shop online.</p>
      <button>
        Shop Now <img className="arrow-main-button" src={arrow} alt="" />
      </button>
    </div>
  );
}

export default MainHome;
