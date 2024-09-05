import { customerReviews } from "../../data/data";
import ReviewCard from "../reviewCard/ReviewCard";
import "./customerReview.styles.css";
function CustomerReview() {
  return (
    <div className="customerReview-container">
      <h1 className="reviewCard-header">OUR HAPPY CUSTOMERS</h1>
      <div className="reviewCard-container">
        {customerReviews.map((review) => (
          <ReviewCard details={review} />
        ))}
      </div>{" "}
      <div className="left-opacity" />
      <div className="right-opacity" />
    </div>
  );
}
export default CustomerReview;
