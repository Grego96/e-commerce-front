function FooterItem({ title, items }) {
  return (
    <div className="col-md-3 py-5">
      <div className="footer-item-header">{title}</div>
      <div className="footer-item-list">
        <ul className="list-unstyled">
          {items.map((i, key) => (
            <li key={key}>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FooterItem;
