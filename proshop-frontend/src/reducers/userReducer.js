const { USER_LOGIN_SUCCESS, USER_LOGOUT } = require('../constants/constants');

const initialState = {
  userInfo: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        userInfo: null,
      };
    default:
      return state;
  }
};
