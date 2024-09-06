import { useState } from "react";
import "./quantityPicker.styles.css";
function QuantityPicker({ quantity, setQuantity }) {
  return (
    <div className="quantity-picker">
      <button
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        className="quantity-button"
      >
        &#8722;
      </button>
      <span className="quantity">{quantity}</span>
      <button
        onClick={() => setQuantity(quantity + 1)}
        className="quantity-button"
      >
        +
      </button>
    </div>
  );
}
export default QuantityPicker;
