import { Link } from "react-router-dom";
import close from "../../assets/close.svg";
import "./signUpBanner.css";

function SignUpBanner() {
  return (
    <div className="signUpBanner--container">
      <div className="promo">
        <p> Sign up and get 20% off to your first order. </p>
        <Link className="link-to-signup" to="/signup">
          Sign Up Now
        </Link>
      </div>
      <button className="close-promo">
        <img src={close} alt="close" />
      </button>
    </div>
  );
}
export default SignUpBanner;
