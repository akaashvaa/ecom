import React, { useState } from "react";
import "./productBody.styles.css";
import StarRating from "../../starRating/StarRating";
import Button from "../../button/Button";
import QuantityPicker from "../../quantityPicker/QuantityPicker";

function ProductBody({ product }) {
  const {
    id,
    name,
    rating,
    originalPrice,
    discountedPrice,
    discountPercentage,
    imageUrl,
    images,
    sizes,
    availableColors,
    description,
    categories,
  } = product;
  const [selectedColor, setSelectedColor] = useState(availableColors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);
  // console.log(selectedColor);
  const handleAddToCart = () => {
    const total =
      quantity * (discountPercentage ? discountedPrice : originalPrice);
    const product = {
      id,
      name,
      imageUrl,
      selectedSize,
      selectedColor,
      total,
      quantity,
    };
    console.log(product);
  };
  return (
    <div className="product-container">
      <div className="image-section">
        <div className="thumbnails">
          {images.slice(0, 3).map((img, index) => (
            <img
              key={`Product ${index + 1}`}
              src={img}
              alt={`Product view ${index + 1}`}
              className="thumbnail"
            />
          ))}
        </div>
        <div className="main-image">
          <img
            src={images[0]}
            alt="Main product view"
            className="main-product-image"
          />
        </div>
      </div>

      <div className="product-info">
        <h1 className="product-title">{name}</h1>
        <div className="rating">
          <StarRating rating={rating} />
          <p className="rating-text">
            {rating}/<span>5</span>
          </p>
        </div>
        <div className="price-section">
          <span className="current-price">
            ${discountPercentage ? discountedPrice : originalPrice}
          </span>
          {discountPercentage && (
            <>
              <span className="original-price">${originalPrice}</span>
              <span className="discount">-{discountPercentage}%</span>
            </>
          )}
        </div>
        <p className="description">{description}</p>
        <div className="color-selection">
          <h3 className="section-title">Select Colors</h3>
          <div className="color-options">
            {availableColors.map((color) => (
              <button
                key={color.value}
                onClick={() => setSelectedColor(color)}
                className={`color-button ${selectedColor === color ? "selected-color" : ""}`}
                style={{ backgroundColor: color }}
              >
                {selectedColor === color && (
                  <span className="checkmark">&#10003;</span>
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="size-selection">
          <h3 className="section-title">Choose Size</h3>
          <div className="size-options">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`size-button ${selectedSize === size ? "selected-size" : ""}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="add-to-cart-section">
          <div className="product-adder">
            <QuantityPicker setQuantity={setQuantity} quantity={quantity} />
          </div>
          <div className="add-to-cart-button">
            <Button
              onClick={handleAddToCart}
              title="Add to Cart"
              type="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBody;
