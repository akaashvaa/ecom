import { customerReviews } from "../../data/data";
import ReviewCard from "../reviewCard/ReviewCard";
import prev from "../../assets/left.svg";
import next from "../../assets/right.svg";
import "./customerReview.styles.css";

function CustomerReview() {
  return (
    <div className="customerReview-container">
      <div className="customerReview-header">
        <h1>OUR HAPPY CUSTOMERS</h1>
        <div className="controller">
          <img src={prev} alt="prev" />
          <img src={next} alt="next" />
        </div>
      </div>
      <div className="reviewCard-container">
        {customerReviews.map((review) => (
          <ReviewCard key={review.name} details={review} />
        ))}
      </div>{" "}
      <div className="left-opacity" />
      <div className="right-opacity" />
    </div>
  );
}
export default CustomerReview;
