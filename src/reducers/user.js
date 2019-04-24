

// Imports
import {
  SIGNIN_BEGUN,
  SIGNIN_FAILED,
  SIGNIN_SUCCEEDED
} from '../actions/user';

// Initial state
const init_state = {

  fetching: false,
  fetched: false,
  failed: false,
  error: null,

  info: {
    uid: null,
    token: null
  }
  
};

// User reducer
export default (( state=init_state, action ) => {
  switch (action.type) {

    // Signin begun
    case SIGNIN_BEGUN: {
      return Object.assign ({}, state, {

        fetching: true,

      });
    }

    // Signin failed
    case SIGNIN_FAILED: {
      return Object.assign ({}, state, {
        
        fetching: false,
        fetched: false,
        failed: true,
        error: action.payload.error

      });
    }

    // Signin succeeded
    case SIGNIN_SUCCEEDED: {
      return Object.assign ({}, state, {

        fetching: false,
        fetched: true,
        failed: false,

        info: {
          uid: action.payload.uid,
          token: action.payload.token
        }

      });
    }

    // Default case
    default: return state;

  }
});