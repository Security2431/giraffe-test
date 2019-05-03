/* eslint no-underscore-dangle: 0 */
import * as types from '../constants/adv';
import { redirect } from './services';
import { getStorage, setStorage } from '../utils/localstorage';

export function fetchAllAds() {
  return (dispatch) => {
    const ads = getStorage('ads');

    dispatch({
      type: types.FETCH_ALL_ADS_REQUEST,
    });

    dispatch({
      type: types.FETCH_ALL_ADS_SUCCESS,
      payload: ads,
    });
  };
}

export function fetchAd(adId) {
  return (dispatch) => {
    const ads = getStorage('ads');

    dispatch({
      type: types.FETCH_AD_REQUEST,
    });

    const ad = ads.filter(item => item._id === adId)[0];

    if (!ad) {
      dispatch({
        type: types.FETCH_AD_FAILURE,
        payload: { message: "Requested ad doesn't exist." },
      });

      dispatch(redirect('/'));
    }

    dispatch({
      type: types.FETCH_AD_SUCCESS,
      payload: ad,
    });
  };
}

export function unsetAd() {
  return (dispatch) => {
    dispatch({
      type: types.UNSET_ACTIVE_AD,
    });
  };
}

export function createAd(newAd) {
  return (dispatch) => {
    const { _id: id } = newAd;
    const ads = getStorage('ads');
    const newAds = ads.filter(item => item._id !== newAd._id);

    dispatch({
      type: types.CREATE_AD_REQUEST,
      payload: id,
    });

    setStorage('ads', newAds.concat(newAd));

    dispatch({
      type: types.CREATE_AD_SUCCESS,
      payload: newAd,
    });

    dispatch(redirect(`/${id}`));
  };
}

export function deleteAd(adId) {
  return (dispatch) => {
    const ads = getStorage('ads');

    dispatch({
      type: types.DELETE_AD_REQUEST,
      payload: adId,
    });

    const newAds = ads.filter(item => item._id !== adId);

    setStorage('ads', newAds);

    dispatch({
      type: types.DELETE_AD_SUCCESS,
      payload: newAds,
    });

    dispatch(redirect('/'));
  };
}
