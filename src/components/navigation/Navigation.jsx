import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import SignUpBanner from "../signUpBanner/SignUpBanner";
import Footer from "../footer/Footer";
import "./navigation.styles.css";
function Navigation() {
  return (
    <div className="navigation-container ">
      <SignUpBanner />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Navigation;
