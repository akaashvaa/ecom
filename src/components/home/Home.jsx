import { lazy, Suspense } from "react";
import "./home.styles.css";
import Footer from "../footer/Footer";

const Landing = lazy(() => import("../landing/Landing"));
const NewArrivals = lazy(() => import("../newArrivals/NewArrivals"));
const TopSelling = lazy(() => import("../topSelling/topSelling"));
const Category = lazy(() => import("../category/category"));
const CustomerReview = lazy(() => import("../customerReview/CustomerReview"));

function Home() {
  return (
    <div className="home-container">
      <Suspense fallback={<div> Landing...</div>}>
        <Landing />
      </Suspense>

      <Suspense fallback={<div>New Arrivals...</div>}>
        <NewArrivals />
      </Suspense>

      <hr />

      <Suspense fallback={<div>Top Selling...</div>}>
        <TopSelling />
      </Suspense>
      <Suspense fallback={<div> Broser style...</div>}>
        <Category />
      </Suspense>
      <Suspense fallback={<div> Review...</div>}>
        <CustomerReview />
      </Suspense>
      <Footer />
    </div>
  );
}
export default Home;
