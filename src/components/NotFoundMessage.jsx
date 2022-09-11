import "./css/NotFoundMessage.css";
import { Link } from "react-router-dom";

const NotFoundMessage = () => {
  return (
    <div className="message-container">
      <h3>Page not found</h3>
      <p>The page you are looking for cannot be found.</p>
      <Link to="/" className="d-inline-block">
        <p>Click here to continue shopping</p>
      </Link>
    </div>
  );
};

export default NotFoundMessage;
