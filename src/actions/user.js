

// Imports
import config from '../../config';
import { switch_screen } from './navigation'; // <- tmp

// Signin Begun
export const SIGNIN_BEGUN = 'SIGNIN_BEGUN'; 
export let signin_begun = (( _ ) => {
  return { type: SIGNIN_BEGUN };
});

// Singin Failure
export const SIGNIN_FAILED = 'SIGNIN_FAILED';
export let signin_failed = (( error ) => {
  return { type: SIGNIN_FAILED, payload: {error} };
});

// Signin Succeeded
export const SIGNIN_SUCCEEDED = 'SIGNIN_SUCCEEDED';
export let signin_succeeded = (( uid, token ) => {
  return { type: SIGNIN_SUCCEEDED, payload: { uid, token } };
});

// Singin
export let signin = (( username='', password='' ) => ( dispatch ) => {

  // Singin begun
  dispatch (signin_begun ());

  // Creates request
  let request = new XMLHttpRequest ();
  request.onload = (( r ) => {
    
    // Failed
    if (r.target.status != 200) {
      dispatch (signin_failed ({
        status: r.target.status,
        response: r.target.response
      })); return;
    }

    // Success
    let response = JSON.parse (r.target.response);
    dispatch (signin_succeeded (
      response.uid,
      response.token
    ));

    // TMP!
    dispatch (switch_screen ('home'));

  });

  // Opens and sends the request
  let parameters = `username=${username}&password=${password}`;
  request.open ('GET', `${config.api_url}/users/token?${parameters}`);
  request.send ();

});