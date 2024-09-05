import "./productCard.styles.css";

function ProductCard({ productDetails }) {
  const {
    name,
    rating,
    originalPrice,
    discountedPrice,
    discountPercentage,
    imageUrl,
  } = productDetails;
  const numericRating = parseFloat(rating.split("/")[0]);
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">
          {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
        </h3>
        <div className="product-rating">
          {"★".repeat(Math.floor(numericRating))}
          {"☆".repeat(5 - Math.floor(numericRating))}
          <p className="rating-number">
            {rating}/<span>5</span>
          </p>
        </div>
        <div className="product-price">
          <span className="discounted-price">
            {!discountPercentage ? originalPrice : discountedPrice}
          </span>

          {discountPercentage && (
            <>
              <span className="original-price">${originalPrice}</span>
              <span className="discount-percentage">-{discountPercentage}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
