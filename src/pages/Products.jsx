import "./css/Products.css";
import Card from "react-bootstrap/Card";

function Products() {
  return (
    <div className="container">
      <div className="row">
        <div className="col cat-section">
          <div>
            <p>Bike style</p>
            <ul>
              <li>
                <input type="checkbox" name="Cargo" />
                <label htmlFor="Cargo">Cargo & Utility</label>
              </li>
              <li>
                <input type="checkbox" name="Cargo" />
                <label htmlFor="Cargo">City</label>
              </li>
              <li>
                <input type="checkbox" name="Cargo" />
                <label htmlFor="Cargo">Folding</label>
              </li>
              <li>
                <input type="checkbox" name="Cargo" />
                <label htmlFor="Cargo">Off-Road</label>
              </li>
            </ul>
            <hr />
          </div>
          <div>
            <p>Model Family</p>
            <ul>
              <li>
                <input type="checkbox" name="Cargo" />
                <label htmlFor="Cargo">RadCity</label>
              </li>
              <li>
                <input type="checkbox" name="Cargo" />
                <label htmlFor="Cargo">RadExpand</label>
              </li>
              <li>
                <input type="checkbox" name="Cargo" />
                <label htmlFor="Cargo">RadMission</label>
              </li>
              <li>
                <input type="checkbox" name="Cargo" />
                <label htmlFor="Cargo">RadRover</label>
              </li>
              <li>
                <input type="checkbox" name="Cargo" />
                <label htmlFor="Cargo">RadRunner</label>
              </li>

              <p>+ Load More</p>
            </ul>
            <hr />
          </div>
          <div>
            <p>Frame</p>
            <ul>
              <li>
                <input type="checkbox" name="Cargo" />
                <label htmlFor="Cargo">High-Step</label>
              </li>
              <li>
                <input type="checkbox" name="Cargo" />
                <label htmlFor="Cargo">Mid-Step</label>
              </li>
              <li>
                <input type="checkbox" name="Cargo" />
                <label htmlFor="Cargo">Step-Thru</label>
              </li>

              <a href="/">What's the difference?</a>
            </ul>
            <hr />
          </div>
        </div>
        <div className="col-10 bikes-container">
          <Card style={{ width: "30rem", border: "none" }}>
            <Card.Img variant="top" src="img/linus-1.jpg" />
            <Card.Body>
              <Card.Title className="title">RadRunner 2</Card.Title>
              <Card.Text>Electric Utility Bike</Card.Text>
              <Card.Text>For riders 4'11" - 6'2"</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "30rem", border: "none" }}>
            <Card.Img variant="top" src="img/linus-1.jpg" />
            <Card.Body>
              <Card.Title className="title">RadRunner 2</Card.Title>
              <Card.Text>Electric Utility Bike</Card.Text>
              <Card.Text>For riders 4'11" - 6'2"</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "30rem", border: "none" }}>
            <Card.Img variant="top" src="img/linus-1.jpg" />
            <Card.Body>
              <Card.Title className="title">RadRunner 2</Card.Title>
              <Card.Text>Electric Utility Bike</Card.Text>
              <Card.Text>For riders 4'11" - 6'2"</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "30rem", border: "none" }}>
            <Card.Img variant="top" src="img/linus-1.jpg" />
            <Card.Body>
              <Card.Title className="title">RadRunner 2</Card.Title>
              <Card.Text>Electric Utility Bike</Card.Text>
              <Card.Text>For riders 4'11" - 6'2"</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Products;
