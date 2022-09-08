import React from "react";

const CategoriesSection = () => {
  return (
    <div>
      <div>
        <p>Bike Style</p>
        <svg class="icon" viewBox="0 0 14 8" role="presentation" fill="none">
          <path
            d="M1 1L7 7L13 1"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
          ></path>
        </svg>
        <ul>
          <li>
            <input type="checkbox" name="Cargo" className="checkbox-round" />
            <label htmlFor="Cargo">Cargo & Utility</label>
          </li>
          <li>
            <input type="checkbox" name="Cargo" className="checkbox-round" />
            <label htmlFor="Cargo">City</label>
          </li>
          <li>
            <input type="checkbox" className="checkbox-round" />
            <label htmlFor="">Folding</label>
          </li>
          <li>
            <input type="checkbox" className="checkbox-round" name="Cargo" />
            <label htmlFor="Cargo">Off-Road</label>
          </li>
        </ul>
        <hr />
      </div>
      <div>
        <p>Model Family</p>
        <ul>
          <li>
            <input type="checkbox" name="Cargo" className="checkbox-round" />
            <label htmlFor="Cargo">RadCity</label>
          </li>
          <li>
            <input type="checkbox" name="Cargo" className="checkbox-round" />
            <label htmlFor="Cargo">RadExpand</label>
          </li>
          <li>
            <input type="checkbox" name="Cargo" className="checkbox-round" />
            <label htmlFor="Cargo">RadMission</label>
          </li>
          <li>
            <input type="checkbox" name="Cargo" className="checkbox-round" />
            <label htmlFor="Cargo">RadRover</label>
          </li>
          <li>
            <input type="checkbox" name="Cargo" className="checkbox-round" />
            <label htmlFor="Cargo">RadRunner</label>
          </li>
          <li>
            <p style={{ fontWeight: "bold" }}>+ Load More</p>
          </li>
        </ul>
        <hr />
      </div>
      <div>
        <p>Frame</p>
        <ul>
          <li>
            <input type="checkbox" name="Cargo" className="checkbox-round" />
            <label htmlFor="Cargo">High-Step</label>
          </li>
          <li>
            <input type="checkbox" name="Cargo" className="checkbox-round" />
            <label htmlFor="Cargo">Mid-Step</label>
          </li>
          <li>
            <input type="checkbox" name="Cargo" className="checkbox-round" />
            <label htmlFor="Cargo">Step-Thru</label>
          </li>

          <a href="/" className="a-link">
            What's the difference?
          </a>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default CategoriesSection;
