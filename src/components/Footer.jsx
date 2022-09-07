import "./css/Footer.css";
import FooterItem from "./FooterItem";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <FooterItem
            title={"Shop"}
            items={["Shop All", "Accesories", "Replacement Parts", "Gift Cards"]}
          />
          <FooterItem title={"About"} items={["Our story", "Our Values", "Reviews"]} />
          <FooterItem
            title={"Customer Care"}
            items={["Contact Us", "FAQs", "Return & Exchanges"]}
          />
          <FooterItem title={"Wholesale"} items={["Overview", "Register as a Wholesaler"]} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
