import { combineReducers } from 'redux';
import auth from './auth';
import adv from './adv';
import services from './services';

export default combineReducers({
  auth,
  adv,
  services,
});
