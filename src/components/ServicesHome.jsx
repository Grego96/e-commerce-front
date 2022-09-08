import React from "react";
import img1 from "../img/ser/ALLTERRAIN-RoverClimber_1399_750x1000_4d39d73f-91b6-484b-91d0-7d1da1e5427f_700x.webp";
import img2 from "../img/ser/IMG_2775_750x1000_1102f72a-6236-4c4f-905c-5b68af326849_320x.webp";
import img3 from "../img/ser/ImperialBeach-Showroom-RPB-ChrisWellhausen-258-edited_750x1000_87ce9abf-78fd-4a98-addf-dbc75e29d54b_320x.webp";

function ServicesHome() {
  return (
    <div className="services">
      <div className="container">
        <div className="main-services">
          <span>Best-in-class service</span>
          <h5>Reliable service & support.</h5>
          <p>
            As pioneers of the ebike movement, we cracked the code for a seamless customer
            experience. Enjoy expert support wherever your ride takes you.
          </p>
        </div>

        <div className="services-types">
          <div className="row">
            <div className="col-md-4">
              <div className="service">
                <img src={img1} alt="" />
                <h4>Rad retail</h4>
                <p>
                  Our Rad Retail team can show you our full line-up, answer your questions, and set
                  you up with a free test ride. Need help with your ebike? We have a full service
                  center on site!
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service">
                <img src={img2} alt="" />
                <h4>Live support</h4>
                <p>
                  With lifetime customer support, you'll have an expert a phone call away. Call
                  1-800-939-0310 to speak directly with our team.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service">
                <img src={img3} alt="" />
                <h4>Local service</h4>
                <p>
                  We partner with neighborhood bike shops and mobile service providers to give you
                  the support you need. Let us connect you with a Rad-approved mechanic in your
                  area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesHome;
