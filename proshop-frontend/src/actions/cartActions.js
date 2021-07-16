import axios from 'axios';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/constants';

export const addToCart = (productId, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${productId}`);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      productId: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      quantity,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_CART, payload: productId });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
