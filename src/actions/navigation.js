

// Switch screen
export const SWITCH_SCREEN = 'SWITCH_SCREEN';
export let switch_screen = ( identifier => {
  return { type: SWITCH_SCREEN, payload: {identifier} };
});

// Switch view
export const SWITCH_VIEW = 'SWITCH_VIEW';
export let switch_view = ( identifier => {
  return { type: SWITCH_VIEW, payload: {identifier} };
});