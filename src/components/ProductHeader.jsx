import img1 from "../img/bicycles/RadCity 4 Electric Commuter Bike/City4HS_Black_angle.png";
import img2 from "../img/bicycles/RadCity 4 Electric Commuter Bike/City4HS_Black_side.png";
import minus from "../img/icons/minus.svg";
import plus from "../img/icons/plus.svg";
import calendar from "../img/icons/calendar.svg";
import shield from "../img/icons/shield.svg";
import headphones from "../img/icons/headphones.svg";
import "./css/ProductHeader.css";

function ProductHeader() {
  return (
    <>
      <section className="container-fluid ">
        <div className="go-back">{/* <a href="">Go back</a> */}</div>
        <div className="row">
          <div className="product-images col-lg-6">
            <img src={img1} alt="" className="bg-light mb-3" />
            <img src={img2} alt="" className="bg-light mb-3" />
          </div>
          <div className="product-info col-lg-6">
            <div>
              <div className="up-title">Electric City Bike</div>
              <h3>RadCity 4 High-Step</h3>
              <div className="product-price-wrapper">
                <div className="product-price">$1,399</div>
              </div>
              <p>
                Dirt path or down pavement, our award-winning commuter ebike is many Rad riders'
                pick for "all-around" ebike. It's high-step frame design delivers a traditional
                ride-feel; commute to work and back with the power of a 750W motor, and up to 45+
                miles per charge.
              </p>
              <div className="d-flex justify-content-around my-4">
                <div className="text-center">
                  <img src={calendar} alt="" />
                  <div className="fw-bold">14-day free trial</div>
                </div>
                <div className="text-center">
                  <img src={shield} alt="" />
                  <div className="fw-bold">1 year warranty</div>
                </div>
                <div className="text-center">
                  <img src={headphones} alt="" />
                  <div className="fw-bold">Ask our experts</div>
                </div>
              </div>
            </div>
            <div className="buy-product-wrapper">
              <div className="quantity-wrapper">
                <div className="quantity-modifier">
                  <img src={minus} alt="" class="quantity-icon"></img>
                </div>
                <input
                  type="number"
                  min="1"
                  defaultValue={1}
                  name=""
                  id=""
                  className="product-quantity"
                />
                <div className="quantity-modifier">
                  <img src={plus} alt="" class="quantity-icon" />
                </div>
              </div>
              <button type="" className="add-to-cart-button">
                Add to my cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductHeader;
