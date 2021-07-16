const { default: axios } = require('axios');
const {
  ASYNC_ACTION_START,
  ASYNC_ACTION_ERROR,
  ASYNC_ACTION_FINISH,
  GET_PRODUCT_LIST,
  GET_PRODUCT_DETAILS,
} = require('../constants/constants');

export const fetchProductList = () => async (dispatch) => {
  dispatch({ type: ASYNC_ACTION_START });
  try {
    const resp = await axios.get('/api/products');
    dispatch({ type: GET_PRODUCT_LIST, payload: resp.data });
    dispatch({ type: ASYNC_ACTION_FINISH });
  } catch (error) {
    dispatch({
      type: ASYNC_ACTION_ERROR,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const fetchProduct = (productId) => async (dispatch) => {
  dispatch({ type: ASYNC_ACTION_START });
  try {
    const resp = await axios.get(`/api/products/${productId}`);
    dispatch({ type: GET_PRODUCT_DETAILS, payload: resp.data });
    dispatch({ type: ASYNC_ACTION_FINISH });
  } catch (error) {
    dispatch({
      type: ASYNC_ACTION_ERROR,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
