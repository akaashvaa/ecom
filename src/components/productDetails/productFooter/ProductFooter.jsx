import { useState } from "react";
import "./productFooter.styles.css";
import filter from "../../../assets/filter.svg";
import dropdown from "../../../assets/dropdown.svg";
import { productReviews } from "../../../data/data";
import ReviewCard from "../../reviewCard/ReviewCard";
import Button from "../../button/Button";

const section = ["Product Details", "Rating & Reviews", "FAQs"];

function ProductFooter({ id }) {
  const reviews = productReviews.filter((review) => review.id === id);
  // console.log(reviews[0].reviews);
  const [active, setActive] = useState(section[1]);
  return (
    <div className="productFooter-container">
      <div className="section-btn">
        {section.map((title) => (
          <p
            className={active === title ? "active" : ""}
            onClick={() => setActive(title)}
            key={title}
          >
            {title}
          </p>
        ))}
      </div>
      <div className="review-section">
        <div className="filter-row">
          <h1>
            ALL Reviews
            <span> ({reviews[0].reviews.length})</span>
          </h1>
          <div className="filter-row-right-side">
            <img src={filter} alt="filter" />
            <div className="filter-latest">
              <p>Latest</p>

              <img src={dropdown} alt="dropdown" />
            </div>
            <div className="add-review">
              <Button type="primary" title="Write a Review" />
            </div>{" "}
          </div>
        </div>
        <div className="productReview-list">
          {reviews[0].reviews.map((review, i) => (
            <ReviewCard
              type="product"
              key={`${review.id}-${i}`}
              details={review}
            />
          ))}
        </div>
        <div className="load-review">
          <Button type="secondary" title="Load More Reviews" />
        </div>
      </div>
    </div>
  );
}
export default ProductFooter;
