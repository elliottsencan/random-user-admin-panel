import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAIL } from '../constants/types';
import { RANDOM_USER_API_BASE_URL } from '../constants/urls';
import get from 'lodash/get';

export const fetchUser = () => async dispatch => {
  let { seedURLParam, storedUserSeed } = await getRandomUserURL();
  const url = `${ RANDOM_USER_API_BASE_URL}${ seedURLParam }`
  return _fetch( dispatch, url, storedUserSeed );
};

export const refreshUser = () => async dispatch => {
  return _fetch( dispatch, RANDOM_USER_API_BASE_URL );
};

const _fetch = async ( dispatch, url, storedUserSeed = '' ) => {
  try {
    dispatch( { type: FETCH_USER_REQUEST } );
    let req = await fetch( url );
    let response = await req.json();
    const fetchedUserSeed = get( response, 'info.seed', '' );
    if ( fetchedUserSeed !== storedUserSeed ) {
      localStorage.setItem( 'user_seed', fetchedUserSeed );
    }
    // Dispatch an action saying FB login is done
    dispatch( { type: FETCH_USER_SUCCESS, payload: response } );
  } catch ( ex ) {
    dispatch( { type: FETCH_USER_FAIL, payload: ex } );
  }
}

const getRandomUserURL = async () => {
  let storedUserSeed = await localStorage.getItem( 'user_seed' );
  const seedURLParam = storedUserSeed === null
    ? ''
    : `?seed=${ storedUserSeed }`;
  return { seedURLParam, storedUserSeed };
}