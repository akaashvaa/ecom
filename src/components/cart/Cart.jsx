import BreadScrumb from "../breadScrumb/BreadScrumb";
import "./cart.styles.css";
import p1 from "../../assets/p1.png";
import promo from "../../assets/coupon.svg";
import Button from "../button/Button";
import { useEffect, useState } from "react";
import CartCard from "./cartCard/CartCard";
import { useSelector } from "react-redux";

function CartPage() {
  const { cartItems, subTotalBill } = useSelector((state) => state.cart);
  // console.log(cartItems.length, subTotalBill);
  const [promoCode, setPromoCode] = useState("");
  const [totalBill, setTotalBill] = useState(0);

  const [discount, setDiscount] = useState(0);

  const deliveryFee = 15;
  const lastDiscountPercentage = 0.2;
  useEffect(() => {
    const calDiscount = subTotalBill * lastDiscountPercentage;
    // console.log("=", calsubtotal, calDiscount);
    setDiscount(calDiscount);

    const total = subTotalBill - calDiscount + deliveryFee;
    // console.log("cart", total);
    setTotalBill(total);
  }, [subTotalBill]);

  return (
    <div className="cart-container">
      <BreadScrumb pwd={["Cart"]} />
      <h1 className="cart-title">YOUR CART</h1>
      {cartItems.length !== 0 ? (
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
              <span>${subTotalBill}</span>
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
                  alert("Go to checkout for the bill : " + totalBill.toFixed(2))
                }
              />
            </div>
          </div>
        </div>
      ) : (
        <center>
          <h1>Your Cart is empty </h1>
        </center>
      )}
    </div>
  );
}

export default CartPage;
