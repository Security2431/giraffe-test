import { combineReducers } from 'redux';
import * as types from '../constants';

const initialState = {
  errors: {
    auth: null,
    adv: null,
  },
};

export const errors = (state = initialState.errors, action) => {
  switch (action.type) {
    case types.SIGNUP_FAILURE:
    case types.LOGIN_FAILURE:
    case types.LOGOUT_FAILURE:
      return { ...state, auth: action.payload.message };
    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.LOGOUT_SUCCESS:
      return { ...state, auth: null };
    default:
      return state;
  }
};

export default combineReducers({
  errors,
});
