import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/constants';

const initialState = {
  cartItems: [],
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;

      const existingItem = state.cartItems.find((x) => x.productId === item.productId);

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.productId === existingItem.productId ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.productId !== action.payload),
      };
    default:
      return state;
  }
};
