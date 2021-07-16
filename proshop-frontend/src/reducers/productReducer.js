import { GET_PRODUCT_DETAILS, GET_PRODUCT_LIST } from '../constants/constants';

const initialState = {
  products: [],
  product: { reviews: [] },
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return {
        ...state,
        products: action.payload,
      };

    case GET_PRODUCT_DETAILS:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};
