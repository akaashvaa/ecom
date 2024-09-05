import verifiedIcon from "../../assets/verified.svg";
import "./reviewCard.styles.css";

const ReviewCard = ({ details }) => {
  const { name, rating, verified, review } = details;
  return (
    <div className="review-card">
      <div className="review-header">
        <div className="star-rating">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={index < rating ? "star filled" : "star"}
            >
              ★
            </span>
          ))}
        </div>
        <div className="reviewer-info">
          <span className="reviewer-name">{name}</span>
          {verified && <img src={verifiedIcon} alt="verified" loading="lazy" />}
        </div>
      </div>
      <p className="review-text">{review}</p>
    </div>
  );
};

export default ReviewCard;
