import React from "react";
import NavCardProduct from "./NavCardProduct";
import bicycle1 from "../img/bicycles/RadCity 4 Electric Commuter Bike/City4HS_Black_side.png";
import bicycle2 from "../img/bicycles/RadCity 5 Plus Electric Commuter Bike/City5STCharcoal_side.png";
import bicycle3 from "../img/bicycles/RadExpand 5 Electric Folding Bike/ExpandBlack_Side.png";
import bicycle4 from "../img/bicycles/RadMission Electric Hybrid Bike/MissionMS_white_side.png";

function Nav_home() {
  return (
    <div>
      <div className="nav-home">
        <h1>RAD POWER BIKES</h1>
        <ul className="nav-home-items">
          <li className="nav-home-item nav-home-item1">
            <p>Ebikes</p>
            <svg
              class="icon icon--arrow-bottom icon--arrow-bottom1"
              viewBox="0 0 14 8"
              role="presentation"
              fill="none"
            >
              <path
                d="M1 1L7 7L13 1"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              ></path>
            </svg>
          </li>
          <li className="nav-home-item nav-home-item2">
            <p>Accessories</p>
            <svg
              class="icon icon--arrow-bottom icon--arrow-bottom2"
              viewBox="0 0 14 8"
              role="presentation"
              fill="none"
            >
              <path
                d="M1 1L7 7L13 1"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              ></path>
            </svg>
          </li>
          <li className="nav-home-item nav-home-item3">
            <p>Service & support</p>
            <svg
              class="icon icon--arrow-bottom icon--arrow-bottom3"
              viewBox="0 0 14 8"
              role="presentation"
              fill="none"
            >
              <path
                d="M1 1L7 7L13 1"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              ></path>
            </svg>
          </li>
          <li className="nav-home-item nav-home-item4">
            <p>About Rad</p>
            <svg
              class="icon icon--arrow-bottom icon--arrow-bottom4"
              viewBox="0 0 14 8"
              role="presentation"
              fill="none"
            >
              <path
                d="M1 1L7 7L13 1"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              ></path>
            </svg>
          </li>
          <div className="menu-hover1">
            <div className="row">
              <div className="col-md-3">
                <div className="left-menu">
                  <h5>Explore our award-winning ebikes</h5>
                  <p>
                    Our electric bikes have won more awards than any other brand from Electric Bike
                    Review.
                  </p>
                  <button className="featured-card-button">See all Ebikes</button>
                  <h6>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.584C12.7674 22.1954 10.5573 22.122 8.53447 21.3747C6.51168 20.6274 4.78465 19.2462 3.61096 17.4372C2.43727 15.6281 1.87979 13.4882 2.02168 11.3364C2.16356 9.18467 2.99721 7.13643 4.39828 5.49718C5.79935 3.85793 7.69279 2.71549 9.79619 2.24025C11.8996 1.76502 14.1003 1.98245 16.07 2.86011"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M22 4L12 14.01L9 11.01"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    14-day free trial
                  </h6>
                  <h6>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.584C12.7674 22.1954 10.5573 22.122 8.53447 21.3747C6.51168 20.6274 4.78465 19.2462 3.61096 17.4372C2.43727 15.6281 1.87979 13.4882 2.02168 11.3364C2.16356 9.18467 2.99721 7.13643 4.39828 5.49718C5.79935 3.85793 7.69279 2.71549 9.79619 2.24025C11.8996 1.76502 14.1003 1.98245 16.07 2.86011"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M22 4L12 14.01L9 11.01"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    1-year warranty
                  </h6>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-4"><NavCardProduct img={bicycle1} categorie={"Off-road"}/></div>
                  <div className="col-md-4"><NavCardProduct img={bicycle2} categorie={"Cargo & ulility"}/></div>
                  <div className="col-md-4"><NavCardProduct img={bicycle3} categorie={"City & commuter"}/></div>
                </div>
                <div className="row">
                  <div className="col-md-4"><NavCardProduct img={bicycle4} categorie={"Folding"}/></div>
                  <div className="col-md-4"><NavCardProduct img={bicycle1} categorie={"Step-thru"}/></div>
                  <div className="col-md-4"><NavCardProduct img={bicycle1} categorie={"High-step"}/></div>
                </div>
              </div>
              <div className="col-md-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam repellat deleniti
                aperiam autem mollitia voluptatibus ipsum officiis numquam possimus quidem optio
                aliquam distinctio repellendus facilis quae accusantium, similique porro
                necessitatibus!
              </div>
            </div>
          </div>
        </ul>

        <div className="utilities-home">
          <p>Test Ride</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Nav_home;
