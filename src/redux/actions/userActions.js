import * as actionTypes from './actionTypes';

export const loginSuccess = (userData) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    userData,
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

// Add other action creators related to user
