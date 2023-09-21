import * as actionTypes from '../actions/actionTypes';

const initialState = {
  user: null,
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.userData,
        isLoggedIn: true,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    // Add other cases
    default:
      return state;
  }
};

export default userReducer;
