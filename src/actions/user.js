

// Imports
import Config from '../../config';

// User signing in
export const user_signingin = ( _ => dispatch => {
  dispatch ({ type: 'USER_SIGNINGIN' });
});

// User set token
export const user_signin = (( token, uid ) => dispatch => {
  dispatch ({ type: 'USER_SIGNIN', payload: {token, uid} });
});

// User signoff
export const user_signoff = ( _ => dispatch => {
  dispatch ({ type: "USER_SIGNOFF" });
});