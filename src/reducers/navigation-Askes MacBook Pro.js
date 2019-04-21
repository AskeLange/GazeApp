

// Initial state
const init_state = {

  current_view: 'signin',
  current_subview: 'dashboard',

  views: [],
  subviews: []

};

// Navigation reducer
export default (( state=init_state, action ) => {
  switch (action.type) {
    
    // Switch view
    case "SWITCH_VIEW": {
      return Object.assign ({}, state, {
        current_view: action.payload.identifier
      });
    }

    // Switch subview
    case "SWITCH_SUBVIEW": {
      return Object.assign ({}, state, {
        current_subview: action.payload.identifier
      });
    }

    // Push view
    case "PUSH_VIEW": {
      
      // Pushes element
      let r = Object.assign ({}, state.views, {
        [action.payload.identifier]: { 
          id: action.payload.identifier
        }
      });

      // Returns
      return Object.assign ({}, state, {
        views: r
      });

    }

    // Push sub view
    case "PUSH_SUBVIEW": {

      // Extracts data
      let id = action.payload.identifier;
      let label = action.payload.label || id;
      let icon = action.payload.icon || '#icon-none';
      let icon_viewbox = action.payload.icon_viewbox || '0 0 24 24';

      // Checks if id is existent
      if (!id) { return state; }

      // Pushes element
      let r = Object.assign ({}, state.subviews, {
        [id]: { id, label, icon, icon_viewbox }
      });

      // Returns
      return Object.assign ({}, state, {
        subviews: r
      });

    }

    // Default
    default: 
      return state;

  }
});