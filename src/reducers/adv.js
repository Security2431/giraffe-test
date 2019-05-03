/* eslint no-use-before-define: 0 */
/* eslint no-underscore-dangle: 0 */
import { combineReducers } from 'redux';
import * as types from '../constants/adv';

const initialState = {
  allAds: [],
  ad: null,
};

const allAds = (state = initialState.allAds, action) => {
  switch (action.type) {
    case types.FETCH_ALL_ADS_SUCCESS:
      return action.payload || [];
    case types.CREATE_AD_SUCCESS:
      return {
        ...state,
        [getAdId(action.payload)]: action.payload,
      };
    case types.DELETE_AD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const ad = (state = initialState.ad, action) => {
  switch (action.type) {
    case types.FETCH_AD_SUCCESS:
      return action.payload;
    case types.UNSET_ACTIVE_AD:
      return null;
    case types.DELETE_AD_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  allAds,
  ad,
});

export const getAdId = adv => adv._id;
export const getById = (state, id) => state.byIds[id];
export const getByIds = (state, ids) => ids.map(id => getById(state, id));
export const getValues = obj => Object.values(obj);
