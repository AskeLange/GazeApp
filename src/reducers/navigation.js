

// Imports
import {
  SWITCH_SCREEN,
  SWITCH_VIEW
} from '../actions/navigation';

// Initial state
const init_state = {
  current_screen: 'signin',
  current_view: 'dashboard'
};

// Navigation reducer
export default (( state=init_state, action ) => {
  switch (action.type) {

    // Switch screen
    case SWITCH_SCREEN: {
      return Object.assign ({}, state, {
        current_screen: action.payload.identifier
      });
    }

    // Switch view
    case SWITCH_VIEW: {
      return Object.assign ({}, state, {
        current_view: action.payload.identifier
      });
    }

    // Default case
    default: return state;

  }
});