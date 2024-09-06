import BreadScrumb from "../breadScrumb/BreadScrumb";
import "./cart.styles.css";
import p1 from "../../assets/p1.png";
import promo from "../../assets/coupon.svg";
import Button from "../button/Button";
import { useEffect, useState } from "react";
import CartCard from "./cartCard/CartCard";

const cartItems = [
  {
    id: 342,
    name: "Kurta",
    imageUrl: p1,
    selectedSize: "Medium",
    selectedColor: "red",
    price: 200,
    discountPercentage: 10,
    quantity: 2,
  },
  {
    id: 9452,
    name: "T-SHIRT WITH TAPE DETAILS",
    imageUrl: p1,
    selectedSize: "Medium",
    selectedColor: "red",
    price: 200,
    discountPercentage: 10,
    quantity: 2,
  },
];

function CartPage() {
  const [promoCode, setPromoCode] = useState("");
  const [totalBill, setTotalBill] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => {
      const discountAmount = item.price * (item.discountPercentage / 100);
      const discountedPrice = item.price - discountAmount;
      const itemTotal = discountedPrice * item.quantity;
      return acc + itemTotal;
    }, 0);
  };

  const deliveryFee = 15;
  useEffect(() => {
    const calsubtotal = calculateSubtotal();
    setSubtotal(() => calsubtotal);
    const calDiscount = calsubtotal * 0.2;
    // console.log("=", calsubtotal, calDiscount);
    setDiscount(calsubtotal * 0.2);
    const total = calsubtotal - calDiscount + deliveryFee;
    // console.log("cart", total);
    setTotalBill(total);
  }, []);
  return (
    <div className="cart-container">
      <BreadScrumb pwd={["Cart"]} />
      <h1 className="cart-title">YOUR CART</h1>
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map((item, i) => (
            <CartCard
              key={` ${item.id}--${i} `}
              setTotalBill={setTotalBill}
              totalBill={totalBill}
              item={item}
            />
          ))}
        </div>
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="summary-row ">
            <span>Discount (-20%)</span>
            <span className="discount-cart">-${discount.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${totalBill.toFixed(2)}</span>
          </div>
          <div className="promo-code">
            <div className="input-row">
              <img src={promo} alt="promo" />
              <input
                type="text"
                placeholder="Add promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
            </div>
            <div className="promo-apply-btn">
              <Button
                title="Apply"
                type="primary"
                onClick={() => console.log("Apply promo code")}
              />
            </div>
          </div>
          <div>
            <Button
              title="Go to Checkout"
              type="primary"
              onClick={() =>
                console.log("Go to checkout for the bill : ", totalBill)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
