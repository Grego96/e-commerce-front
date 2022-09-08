import "./css/ProductSugestedItem.css";

function SugestedTitem({ item }) {
  return (
    <div className="col-lg-3 suggested-item">
      <div className="suggested-image-wrapper">
        <img src={item.image1} alt="" className="suggested-image-one" />
        <img src={item.image2} alt="" className="suggested-image-two" />
      </div>
      <div className="pt-4">
        <div className="up-title">{item.category}</div>
        <h4>{item.name}</h4>
        <div>${item.price}</div>
      </div>
    </div>
  );
}

export default SugestedTitem;
