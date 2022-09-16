import React from "react";
import leftImg from "../img/home/ALLTERRAIN-RoverClimber_1399_750x1000_4d39d73f-91b6-484b-91d0-7d1da1e5427f_700x.webp";
import FeaturedCard from "./FeaturedCard";
import axios from "axios";
import { useEffect, useState } from "react";

function FeaturedCollections() {
  const [outstading, setOutstading] = useState([]);

  async function getOutstanding() {
    const result = await axios({
      method: "get",
      baseURL: `${process.env.REACT_APP_API_BASE}/products/outstanding`,
    });
    const filteredResult = result.data.filter((product, i) => {
      return i <= 3
    })
    setOutstading(filteredResult);
  }

  useEffect(() => {
    getOutstanding();
  }, []);

  return (
    <div className="featured">
      <div className="title-featured">
        <span>Featured collections</span>
        <h4>A ride style for everyone.</h4>
      </div>
      <div className="container">
        <div className="row g-0">
          <div className="col-xl-6 ">
            <img className="featured-img-left" src={leftImg} alt="" />
          </div>
          <div className="col-xl-6">
            <div className="row">
              {outstading.map((product, i) => {
                return (
                  <div className="col-md-6" key={i}>
                    <FeaturedCard product={product}/>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCollections;
