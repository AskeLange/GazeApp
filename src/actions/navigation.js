

// Switch view
let switch_view = ( identifier => {
  return { type: 'SWITCH_VIEW', payload: { identifier } };
});

// Exports
export { switch_view };