import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import SignUpBanner from "../signUpBanner/SignUpBanner";

function Navigation() {
  return (
    <div className="flex flex-col gap-y-2">
      <SignUpBanner />
      <Navbar />
      <Outlet />
    </div>
  );
}
export default Navigation;
