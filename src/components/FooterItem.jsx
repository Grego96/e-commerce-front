import { Link } from "react-router-dom";

function FooterItem({ title, items }) {
  return (
    <div className="col-md-3 py-5">
      <div className="footer-item-header">{title}</div>
      <div className="footer-item-list">
        <ul className="list-unstyled">
          {items.map((i, key) => (
            <Link key={key} to="/products">
              <li>{i}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FooterItem;
