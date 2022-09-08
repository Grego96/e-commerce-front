import React from "react";
import RadRover from "../img/bicycles/RadRover 6 Plus Electric Fat Tire Bike/High-Step/Rover6HS_charcaol_side.png";
import RadWagon from "../img/bicycles/RadWagon 4 Electric Cargo Bike/WagonOrange_side_3to4.png";
import RadCity from "../img/bicycles/RadCity 5 Plus Electric Commuter Bike/City5STCharcoal_side.png";
import RadExpand from "../img/bicycles/RadExpand 5 Electric Folding Bike/ExpandWhite_27.png";

const ProductsHeader = () => {
  return (
    <div className="header-container">
      <h2 className="header-title">Electric Bikes</h2>
      <div className="header-content">
        <div>
          <img src={RadRover} alt="RadRover High-Step" className="header-img" />
          <h4>Off road</h4>
          <p className="header-text">Fat tires for big adventures.</p>
        </div>
        <div>
          <img src={RadWagon} alt="RadRover High-Step" className="header-img" />
          <h4>Cargo & utility</h4>
          <p className="header-text">Hold everything you'll need.</p>
        </div>
        <div>
          <img src={RadCity} alt="RadRover High-Step" className="header-img" />
          <h4>City & commuter</h4>
          <p className="header-text">Your new way about town.</p>
        </div>
        <div>
          <img src={RadExpand} alt="RadRover High-Step" className="header-img" />
          <h4>Folding</h4>
          <p className="header-text"> Practically for all spaces.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsHeader;
