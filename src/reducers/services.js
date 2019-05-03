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
    case types.FETCH_ALL_ADS_FAILURE:
    case types.FETCH_AD_FAILURE:
    case types.CREATE_AD_FAILURE:
    case types.DELETE_AD_FAILURE:
      return { ...state, adv: action.payload.message };
    case types.FETCH_ALL_ADS_SUCCESS:
    case types.FETCH_AD_SUCCESS:
    case types.CREATE_AD_SUCCESS:
    case types.DELETE_AD_SUCCESS:
      return { ...state, adv: null };

    default:
      return state;
  }
};

export default combineReducers({
  errors,
});
