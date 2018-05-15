import {FETCH_USER_SUCCESS, FETCH_USER_FAIL} from '../constants/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return { ...state, ...action.payload };
    case FETCH_USER_FAIL:
      return { ...state, results: {}, info: {} };
    default:
      return state;
  }
}