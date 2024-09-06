import {
  ADD_ITEM,
  DECREASE_QUANTITY,
  DELETE_ITEM,
  INCREASE_QUANTITY,
} from "./cart.action";

const initialState = {
  cartItems: [],
  subTotalBill: 0,
};

const calculateTotalBill = (cartItems) => {
  return cartItems.reduce((total, item) => {
    // console.log({ item });
    const itemTotal = item.price * item.quantity;
    const discount =
      ((item.discountPercentage === null ? 0 : item.discountPercentage) / 100) *
      itemTotal;
    return total + (itemTotal - discount);
  }, 0);
};

const cartReducer = (state = initialState, action) => {
  let updatedCartItems;

  switch (action.type) {
    case ADD_ITEM:
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        updatedCartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        updatedCartItems = [...state.cartItems, { ...action.payload }];
      }
      const totalBill = calculateTotalBill(updatedCartItems);
      // console.log({ updatedCartItems, totalBill });
      return {
        ...state,
        cartItems: updatedCartItems,
        subTotalBill: totalBill,
      };

    case DELETE_ITEM:
      updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );

      return {
        ...state,
        cartItems: updatedCartItems,
        subTotalBill: calculateTotalBill(updatedCartItems),
      };

    case INCREASE_QUANTITY:
      updatedCartItems = state.cartItems.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );

      return {
        ...state,
        cartItems: updatedCartItems,
        subTotalBill: calculateTotalBill(updatedCartItems),
      };

    case DECREASE_QUANTITY:
      updatedCartItems = state.cartItems.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: Math.max(item.quantity - 1) }
          : item,
      );

      return {
        ...state,
        cartItems: updatedCartItems,
        subTotalBill: calculateTotalBill(updatedCartItems),
      };

    default:
      return state;
  }
};

export default cartReducer;
