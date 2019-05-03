import * as types from '../constants/auth';
import { redirect } from './services';
import {
  getStorage, setStorage, addStorage, deleteStorage,
} from '../utils/localstorage';

export function signup(username, password) {
  return (dispatch) => {
    dispatch({
      type: types.SIGNUP_REQUEST,
    });

    try {
      setStorage('activeUser', username);
      addStorage('users', { username, password });

      return dispatch({
        type: types.SIGNUP_SUCCESS,
        payload: username,
      });
    } catch (e) {
      return dispatch({
        type: types.SIGNUP_FAILURE,
        payload: { message: `Error exceed: ${e}` },
      });
    }
  };
}

export function login(username, password) {
  return (dispatch) => {
    const users = getStorage('users');
    const userData = users.filter(item => item.username === username)[0];

    dispatch({
      type: types.LOGIN_REQUEST,
    });

    if (!(password === userData.password)) {
      return dispatch({
        type: types.LOGIN_FAILURE,
        payload: { message: 'Check your login/password' },
      });
    }

    setStorage('activeUser', username);

    return dispatch({
      type: types.LOGIN_SUCCESS,
      payload: username,
    });
  };
}

export function auth(username, password) {
  return (dispatch) => {
    const users = getStorage('users');
    const isUserExist = users.filter(item => item.username === username)[0];

    if (!isUserExist) {
      dispatch(signup(username, password));
    }

    dispatch(login(username, password));
  };
}

export function logout() {
  return (dispatch) => {
    deleteStorage('activeUser');

    dispatch({
      type: types.LOGOUT_SUCCESS,
    });

    dispatch(redirect('/'));
  };
}

export function recieveAuth() {
  return (dispatch) => {
    const user = getStorage('activeUser');

    if (!user) {
      return dispatch({
        type: types.RECIEVE_AUTH_FAILURE,
      });
    }

    return dispatch({
      type: types.RECIEVE_AUTH_SUCCESS,
      payload: user,
    });
  };
}
