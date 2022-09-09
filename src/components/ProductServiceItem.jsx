function ProductServiceItem({ img, text }) {
  return (
    <div className="text-center">
      <img src={img} alt="" />
      <div className="fw-bold">{text}</div>
    </div>
  );
}

export default ProductServiceItem;
