

// Navigation actions
// Switch view
export const switch_view = ( identifier => dispatch => {
  dispatch ({ type: 'SWITCH_VIEW', payload: { identifier }});
});

// Switch subview
export const switch_subview = ( identifier => dispatch => {
  dispatch ({ type: 'SWITCH_SUBVIEW', payload: { identifier }});
});

// Push view
export const push_view = ((identifier, options={}) => dispatch => {
  dispatch ({ type: 'PUSH_VIEW', payload: Object.assign (options, {identifier}) });
});

// Push subview
export const push_subview = ((identifier, options={}) => dispatch => {
  dispatch ({ type: 'PUSH_VIEW', payload: Object.assign (options, {identifier}) });
});