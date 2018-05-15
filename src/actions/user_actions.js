import {FETCH_USER_SUCCESS, FETCH_USER_FAIL} from './types';
import get from 'lodash/get';

export const fetchUser = () => async dispatch => {
  try {
    let storedUserSeed = await localStorage.getItem('user_seed');
    const seedURLParam = storedUserSeed === "null"
      ? ''
      : `?seed=${storedUserSeed}`;
    let req = await fetch(`https://randomuser.me/api/1.0/${seedURLParam}`);
    let response = await req.json();
    const fetchedUserSeed = get(response, 'info.seed', '');
    if (fetchedUserSeed !== storedUserSeed) {
      localStorage.setItem('user_seed', fetchedUserSeed);
    }

    // Dispatch an action saying FB login is done
    dispatch({type: FETCH_USER_SUCCESS, payload: response});
  } catch (ex) {
    dispatch({type: FETCH_USER_FAIL, payload: ex});
  }
};