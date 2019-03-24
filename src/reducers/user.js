

// Initial state
const init_state = {
  
  signing_in: false,
  signed_in: false,
  token: null,
  data: { }

};

// Products reducer
export default (state=init_state,action) => {
  switch (action.type) {

    case "USER_SIGNINGIN": {
      return Object.assign ({}, state, {
        signing_in : true, signed_in : false
      });
    }

    case "USER_SIGNIN": {
      
      let token = action.payload.token;
      let data = action.payload.data ? action.payload.data : { };
      if (token == null) { throw "User Signin: No token provided"; }

      return Object.assign ({ }, state, {
        signed_in : true, signing_in : false,
        token, data
      });

    }

    case "USER_SIGNOFF": {
      return Object.assign ({ }, state, {
        signed_in: false, token: null, data: { }
      });
    }

    default:
      return state;

  }
};