import det1 from "../img/bicycles/RadCity 4 Electric Commuter Bike/SafetyCertified-Rover6_10-(2).png";
import det2 from "../img/bicycles/RadCity 4 Electric Commuter Bike/All-Weather-(2).png";
import "./css/ProductDetails.css";

function ProductSugested() {
  return (
    <>
      <section className="details container-fluid">
        <div className="text-center pb-4 ">
          <h3>Engineered to put safety first</h3>
        </div>
        <div className="row ">
          <div className="details-image-wrapper col-lg-6">
            <img src={det1} alt="" className="details-image" />
            <div className="details-text">
              <h4>We go the extra mile.</h4>
              <p>
                Engineered to meet U.S. Consumer Product Safety Commission guidelines, plus the
                stricter criteria laid out by the European Committee for Standardization.
              </p>
            </div>
          </div>
          <div className="details-image-wrapper col-lg-6">
            <img src={det2} alt="" className="details-image" />
            <div className="details-text">
              <h4>Brake confidently in any weather conditions.</h4>
              <p>
                Ride rain or shine. Every bike comes with brakes tested for all-weather stopping
                ability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductSugested;
