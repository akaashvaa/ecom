import verifiedIcon from "../../assets/verified.svg";
import dot from "../../assets/3Dot.svg";
import StarRating from "../starRating/StarRating";
import "./reviewCard.styles.css";

function ReviewCard({ details, type = "customer" }) {
  const { name, rating, verified, review, date } = details;
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  };

  const formatedDate = formatDate(date);
  return (
    <div className="review-card">
      <div className="review-header">
        <div className="top-header">
          <StarRating rating={rating} />
          {type === "product" && <img src={dot} alt="3dot" />}
        </div>
        <div className="reviewer-info">
          <span className="reviewer-name">{name}</span>
          {verified && <img src={verifiedIcon} alt="verified" loading="lazy" />}
        </div>
        <p className="review-text">{review}</p>
      </div>
      {type === "product" && <p className="date">Posted on {formatedDate} </p>}
    </div>
  );
}

export default ReviewCard;
