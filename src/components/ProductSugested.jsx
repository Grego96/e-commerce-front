import img2 from "../img/bicycles/RadCity 4 Electric Commuter Bike/City4HS_Black_side.png";
import img1 from "../img/bicycles/RadCity 4 Electric Commuter Bike/City4HS_Black_angle.png";
import SugestedTitem from "./ProductSugestedItem";

function ProductSugested() {
  return (
    <>
      <section className="container-fluid">
        <div className="pb-4">
          <h3>Other bikes you might like</h3>
        </div>
        <div className="row text-center">
          <SugestedTitem
            item={{
              name: "RadCity 4 High-Step",
              category: "Electric City Bike",
              image1: img1,
              image2: img2,
              price: 1399,
            }}
          />
          <SugestedTitem
            item={{
              name: "RadCity 4 High-Step",
              category: "Electric City Bike",
              image1: img1,
              image2: img2,
              price: 1399,
            }}
          />
          <SugestedTitem
            item={{
              name: "RadCity 4 High-Step",
              category: "Electric City Bike",
              image1: img1,
              image2: img2,
              price: 1399,
            }}
          />
          <SugestedTitem
            item={{
              name: "RadCity 4 High-Step",
              category: "Electric City Bike",
              image1: img1,
              image2: img2,
              price: 1399,
            }}
          />
        </div>
      </section>
    </>
  );
}

export default ProductSugested;
