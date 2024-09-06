import { useState } from "react";
import "./quantityPicker.styles.css";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../store/slices/cart/cart.action";
import { useDispatch } from "react-redux";

function QuantityPicker({ id, quantity, setQuantity }) {
  const dispatch = useDispatch();

  const handleDecrease = () => {
    setQuantity((q) => Math.max(1, q - 1));
    dispatch(decreaseQuantity(id));
  };
  const handlerIncrease = () => {
    setQuantity((q) => q + 1);
    dispatch(increaseQuantity(id));
  };

  return (
    <div className="quantity-picker">
      <button onClick={handleDecrease} className="quantity-button">
        &#8722;
      </button>
      <span className="quantity">{quantity}</span>
      <button onClick={handlerIncrease} className="quantity-button">
        +
      </button>
    </div>
  );
}
export default QuantityPicker;
