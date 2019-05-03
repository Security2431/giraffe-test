import { combineReducers } from 'redux';
import auth from './auth';
import adv from './adv';

export default combineReducers({
  auth,
  adv,
});
