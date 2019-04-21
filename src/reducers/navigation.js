

// Initial state
const init_state = {
  current_view: 'signin'
};

// Navigation reducer
export default (( state=init_state, action ) => {
  switch (action.type) {

    // Switch view
    case 'SWITCH_VIEW': {
      return Object.assign ({}, state, {
        current_view: action.payload.identifier
      });
    }

    // Default case
    default: 
      return state;

  }
});