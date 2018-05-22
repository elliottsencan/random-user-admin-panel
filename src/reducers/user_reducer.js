import { FETCH_USER_SUCCESS, FETCH_USER_FAIL, FETCH_USER_REQUEST } from '../constants/types';

export default function ( state = {}, action ) {
  switch ( action.type ) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case FETCH_USER_FAIL:
      return {
        ...state,
        results: {},
        info: {},
loading: false
      };
    default:
      return state;
  }
}