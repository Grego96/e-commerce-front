import React from "react";
import Accordion from "react-bootstrap/Accordion";

const CategoriesSection = ({ setCategorieId }) => {
  return (
    <Accordion defaultActiveKey={["0", "1", "2"]} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Bike Style</Accordion.Header>
        <Accordion.Body>
          <ul className="category">
          <li>
              <input
                id="1"
                type="radio"
                name="categorie"
                className="checkbox-round"
                onClick={(e) => {
                  setCategorieId(null);
                }}
              />
              <label htmlFor="categorie">All</label>
            </li>
            <li>
              <input
                id="1"
                type="radio"
                name="categorie"
                className="checkbox-round"
                onClick={(e) => {
                  setCategorieId(e.target.id);
                }}
              />
              <label htmlFor="categorie">Cargo & Utility</label>
            </li>
            <li>
              <input
                id="2"
                type="radio"
                name="categorie"
                className="checkbox-round"
                onClick={(e) => {
                  setCategorieId(e.target.id);
                }}
              />
              <label htmlFor="categorie">City</label>
            </li>
            <li>
              <input
                id="3"
                type="radio"
                className="checkbox-round"
                name="categorie"
                onClick={(e) => {
                  setCategorieId(e.target.id);
                }}
              />
              <label htmlFor="">Folding</label>
            </li>
            <li>
              <input
                id="4"
                type="radio"
                className="checkbox-round"
                name="categorie"
                onClick={(e) => {
                  setCategorieId(e.target.id);
                }}
              />
              <label htmlFor="categorie">Off-Road</label>
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
