

// Imports
import React from 'react';

// Screen Component
export default class Screen
  extends React.Component {

  // Initilization
  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      active: false,
    };
  }

  // Renders
  // Main render
  render () { return (

    <div className={`screen ${this.state.active?'active':''}`} id={this.props.id}>
      { this.props.children }
    </div>

  )}

  // Life cycle events
  // On store change
  onStoreChange () {

    // Extracts state n' sets state
    let state = this.props.store.getState ();
    let current = state.navigation.current_screen; 
    this.setState ({ active: (current==this.props.id) });

  }

  // Component did mount
  componentDidMount () {

    // Subscribes to store
    this.unsub = this.props.store.subscribe (
      this.onStoreChange.bind (this)
    );

    // Initial check
    let state = this.props.store.getState ();
    let current = state.navigation.current_screen;
    this.setState ({ active: (current==this.props.id) });

  }

  // Component will unmount
  componentWillUnmount () {
    this.unsub ();
  }

}