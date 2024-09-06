import { Link } from "react-router-dom";
import "./productCard.styles.css";
import StarRating from "../starRating/StarRating";

function ProductCard({ productDetails }) {
  const {
    id,
    name,
    rating,
    originalPrice,
    discountedPrice,
    discountPercentage,
    imageUrl,
  } = productDetails;

  return (
    <Link to={`/shop/${id}`}>
      <div className="product-card">
        <img src={imageUrl} alt={name} className="product-image" />
        <div className="product-info">
          <h3 className="product-name">
            {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
          </h3>
          <div className="product-rating">
            <StarRating rating={rating} />
            <p className="rating-number">
              {rating}/<span>5</span>
            </p>
          </div>
          <div className="product-price">
            <span className="discounted-price">
              ${!discountPercentage ? originalPrice : discountedPrice}
            </span>

            {discountPercentage && (
              <>
                <span className="original-price">${originalPrice}</span>
                <span className="discount-percentage">
                  -{discountPercentage}%
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
