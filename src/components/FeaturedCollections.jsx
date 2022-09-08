import React from "react";
import leftImg from "../img/home/ALLTERRAIN-RoverClimber_1399_750x1000_4d39d73f-91b6-484b-91d0-7d1da1e5427f_700x.webp";
import FeaturedCard from "./FeaturedCard";
import bicycle1 from "../img/bicycles/RadCity 4 Electric Commuter Bike/City4HS_Black_side.png";
import bicycle2 from "../img/bicycles/RadCity 5 Plus Electric Commuter Bike/City5STCharcoal_side.png";
import bicycle3 from "../img/bicycles/RadExpand 5 Electric Folding Bike/ExpandBlack_Side.png";
import bicycle4 from "../img/bicycles/RadMission Electric Hybrid Bike/MissionMS_white_side.png";

function FeaturedCollections() {
  return (
    <div className="featured">
      <div className="title-featured">
        <span>Featured collections</span>
        <h4>A ride style for everyone.</h4>
      </div>
      <div className="container">
        <div className="row g-0">
          <div className="col-md-6 ">
            <img className="featured-img-left" src={leftImg} alt="" />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <FeaturedCard bicycleImg={bicycle1} />
              </div>
              <div className="col-md-6">
                <FeaturedCard bicycleImg={bicycle2} />
              </div>
              <div className="col-md-6">
                <FeaturedCard bicycleImg={bicycle3} />
              </div>
              <div className="col-md-6">
                <FeaturedCard bicycleImg={bicycle4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCollections;
