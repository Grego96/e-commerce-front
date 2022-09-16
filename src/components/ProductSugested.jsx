import SugestedTitem from "./ProductSugestedItem";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductSugested() {
  const [outstading, setOutstading] = useState([]);

  async function getOutstanding() {
    const result = await axios({
      method: "get",
      baseURL: `${process.env.REACT_APP_API_BASE}/products/outstanding`,
    });
    const filteredResult = result.data.filter((product, i) => {
      return i <= 3;
    });
    setOutstading(filteredResult);
  }

  useEffect(() => {
    getOutstanding();
  }, []);

  return (
    <>
      <section className="container-fluid">
        <div className="pb-4">
          <h3>Other bikes you might like</h3>
        </div>
        <div className="row text-center">
          {outstading.map((p) => {
            return (
              <SugestedTitem
                item={{
                  name: p.name,
                  category: p.category,
                  image1: p.images.image1,
                  image2: p.images.image2,
                  price: p.price,
                  slug: p.slug
                }}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default ProductSugested;
