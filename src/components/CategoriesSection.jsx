import React from "react";
import Accordion from "react-bootstrap/Accordion";

const CategoriesSection = () => {
  return (
    <Accordion defaultActiveKey={["0", "1", "2"]} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Bike Style</Accordion.Header>
        <Accordion.Body>
          <ul className="category">
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
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Model Familiy</Accordion.Header>
        <Accordion.Body>
          <ul className="category">
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
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Frame</Accordion.Header>
        <Accordion.Body>
          <ul className="category">
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
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default CategoriesSection;
