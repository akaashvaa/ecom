import { useState } from "react";
import "./productFooter.styles.css";
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
        <h1>
          ALL Reviews
          <span> ({reviews[0].reviews.length})</span>
        </h1>
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
