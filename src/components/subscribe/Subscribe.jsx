import Button from "../button/Button";
import "./subscribe.styles.css";
import email from "../../assets/email.svg";
function Subscribe() {
  return (
    <div className="subscribe-container">
      <h1 className="subscribe-header">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h1>
      <div className="subscribe-form">
        <div className="email-input">
          <img src={email} alt="email" loading="lazy" />
          <input type="text" placeholder="Enter your email address" />
        </div>
        <button type="submit" className="subscribe-submit">
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  );
}
export default Subscribe;
