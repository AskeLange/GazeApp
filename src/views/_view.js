

// Imports
import React from 'react';

// View Component
export default class View
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

    <div className="view" id={this.props.identifier}>
      { this.props.children }
    </div>

  )}

  // Life cycle events
  // On store change
  onStoreChange () {

    // Extracts state
    let state = this.props.store.getState ();
    let current = state.navigation.current_view;

    // Sets state
    this.setState ({
      active: (current==this.props.identifier)
    });

  }

  // Component did mount
  componentDidMount () {
    this.unsub = this.props.store.subscribe (
      this.onStoreChange.bind (this)
    ); this.onStoreChange ();
  }

  // Component will unmount
  componentWillUnmount () {
    this.unsub ();
  }

}