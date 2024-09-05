import Subscribe from "../subscribe/Subscribe";
import logo from "../../assets/logo.svg";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/github.svg";
import visa from "../../assets/visa.svg";
import mastercard from "../../assets/mastercard.svg";
import gPay from "../../assets/gPay.svg";
import applePay from "../../assets/applePay.svg";
import paypal from "../../assets/paypal.svg";

import "./footer.styles.css";
import { siteSections } from "../../data/data";

function Footer() {
  return (
    <footer>
      <Subscribe />
      <div className="footer-body">
        <div className="column">
          <img src={logo} alt="logo" className="logo" />
          <p>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="social-media">
            <img src={twitter} alt="twitter" />
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={github} alt="github" />
          </div>
        </div>
        {siteSections.map((el, i) => (
          <div key={i} className="column">
            <h1>{el.title}</h1>
            {el.children.map((links, j) => (
              <p key={`${i}-${j}`}> {links} </p>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="social-media">
          <img src={visa} alt="visa" />
          <img src={mastercard} alt="mastercard" />
          <img src={paypal} alt="paypal" />
          <img src={applePay} alt="applepay" />
          <img src={gPay} alt="gpay" />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
