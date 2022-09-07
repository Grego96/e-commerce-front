import "./css/Product.css";
import img1 from "../img/bicycles/RadCity 4 Electric Commuter Bike/City4HS_Black_angle.png";
import minus from "../img/icons/minus.svg";
import plus from "../img/icons/plus.svg";

function Product() {
  return (
    <section>
      <div className="container-fluid px-5 ">
        <div className="container">
          <div>
            <a class="go-back" href="">
              Go back
            </a>
          </div>
          <div className="d-flex">
            <div className="product-images">
              <img src={img1} alt="" />
            </div>
            <div className="product-info">
              <div>
                <div className="over-name">ELECTRIC CITY BIKE</div>
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
              </div>
              <div className="buy-product-wrapper">
                <div className="quantity-wrapper">
                  <div className="quantity-modifier">
                    <img src={minus} alt="" class="quantity-icon"></img>
                  </div>
                  <input
                    type="number"
                    min="1"
                    value="1"
                    name=""
                    id=""
                    className="product-quantity"
                  />
                  <div className="quantity-modifier">
                    <img src={plus} alt="" class="quantity-icon" />
                  </div>
                </div>
                <button></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
