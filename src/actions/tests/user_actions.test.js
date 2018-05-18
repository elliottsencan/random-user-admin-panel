import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from '../../actions';
import * as types from '../../constants/types';
import { RANDOM_USER_API_BASE_URL } from '../../constants/urls';
import { storageMock } from './utils/localStorageMock';

const middlewares = [ thunk ];
const mockStore = configureMockStore( middlewares );

describe( 'async actions', () => {
  beforeEach( () => {
    window.localStorage = storageMock();
  } );

  afterEach( () => {
    fetchMock.reset()
    fetchMock.restore()
  } );

  it( 'creates FETCH_USER_SUCCESS when fetching random user completes', () => {
    fetchMock.getOnce( RANDOM_USER_API_BASE_URL, {
      body: {
        "results": [
          {
            "gender": "female"
          }
        ],
        "info": {
          "seed": "2f18c2ec37c0b8c8"
        }
      }
    } );

    const expectedActions = [
      {
        type: types.FETCH_USER_REQUEST
      }, {
        type: types.FETCH_USER_SUCCESS,
        payload: {
          "results": [
            {
              "gender": "female"
            }
          ],
          "info": {
            "seed": "2f18c2ec37c0b8c8"
          }
        }
      }
    ];
    const store = mockStore( {} );

    return store.dispatch( actions.fetchUser() ).then( () => {
      expect( store.getActions() ).toEqual( expectedActions )
    } );
  } );

  it( 'stores userSeed in localStorage after a successfully fetching random user', () => {
    fetchMock.getOnce( RANDOM_USER_API_BASE_URL, {
      body: {
        "results": [
          {
            "gender": "female"
          }
        ],
        "info": {
          "seed": "testRadNewSeed"
        }
      }
    } );

    const store = mockStore( {} );
    return store.dispatch( actions.fetchUser() ).then( () => {

      expect( localStorage.getItem( 'user_seed' ) ).toEqual( "testRadNewSeed" )
    } );
  } );
} );