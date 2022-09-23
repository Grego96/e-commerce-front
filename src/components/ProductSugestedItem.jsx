import "./css/ProductSugestedItem.css";
import { Link } from "react-router-dom";

function SugestedTitem({ item }) {
  return (
    <div className="col-md-6 col-lg-3 suggested-item  mb-lg-0">
      <Link to={`/products/${item.slug}`}>
      <div className="suggested-image-wrapper">
        <img src={item.image1} alt="" className="suggested-image-one" />
        <img src={item.image2} alt="" className="suggested-image-two" />
      </div>
      <div className="pt-4 suggested-item-text">
        <div className="up-title">{item.category}</div>
        <h4>{item.name}</h4>
        <div>${item.price}</div>
      </div>
      </Link>
    </div>
  );
}

export default SugestedTitem;
