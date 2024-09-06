import { useEffect, useState } from "react";
import QuantityPicker from "../../quantityPicker/QuantityPicker";
import deleteIcon from "../../../assets/delete.svg";
import "./cartCard.styles.css";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../../store/slices/cart/cart.action";

function CartCard({ item, setTotalBill, totalBill }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleDelete = () => {
    dispatch(deleteItem(item.id));
    console.log("delete " + item.id);
  };
  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.name} className="item-image" />
      <div className="item-details">
        <div className="card-name">
          <h3>{item.name}</h3>
          <img src={deleteIcon} alt="delete" onClick={handleDelete} />
        </div>
        <p className="color-size">
          Size: <span> {item.selectedSize} </span>
        </p>
        <p className="color-size">
          Color:<span> {item.selectedColor}</span>
        </p>
        <div className="item-details-footer">
          <p className="item-price">${item.price * item.quantity}</p>

          <div className="cart-adder">
            <QuantityPicker
              id={item.id}
              setQuantity={setQuantity}
              quantity={quantity}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartCard;
