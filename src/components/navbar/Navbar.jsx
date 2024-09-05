import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import profile from "../../assets/profile.svg";
import search from "../../assets/search.svg";
import dropdown from "../../assets/dropdown.svg";
import "./navbar.styles.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <div className="shopLink-container">
        <div className="nav-dropdown">
          <p>Shop </p>
          <img src={dropdown} alt="dropdown" />
        </div>
        <p>On Sale </p>
        <p>New Arrivals</p>
        <p>Brands</p>
      </div>
      <div className="search">
        <img src={search} alt="search" />
        <input
          className="search-input"
          type="text"
          placeholder="Search for products..."
        />
      </div>
      <div className="profile-and-cart">
        <Link to="/cart">
          <img src={cart} alt="cart" />
        </Link>
        <Link to="/profile">
          <img src={profile} alt="profile" />
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
