import "./starRating.styles.css";
function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span key={index} className={index < rating ? "star filled" : "star"}>
          ★
        </span>
      ))}
    </div>
  );
}
export default StarRating;
