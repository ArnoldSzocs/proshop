const { default: axios } = require('axios');
const {
  ASYNC_ACTION_START,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_ERROR,
  USER_LOGIN_SUCCESS,
} = require('../constants/constants');

export const loginUser = (email, password) => async (dispatch) => {
  dispatch({ type: ASYNC_ACTION_START });

  try {
    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      { headers: { 'Content-Type': 'application/json' } }
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
    dispatch({ type: ASYNC_ACTION_FINISH });
  } catch (error) {
    dispatch({
      type: ASYNC_ACTION_ERROR,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  } finally {
    dispatch({ type: ASYNC_ACTION_FINISH });
  }
};
