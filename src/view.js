

// Imports
import React from 'react';

// View Component
export default class View
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      active: false,
    };
  }

  // Render
  render () { return (
    
    <div className={`view ${this.state.active?'active':''}`} id={this.props.identifier}>
      {this.props.children}
    </div>

  )}

  // On Store Change
  onStoreChange () {
    
    // Fetches state
    let state = this.props.store.getState ();
    let current = state.navigation.current_view;

    // Sets state
    this.setState ({
      active: (current==this.props.identifier)
    });

  }

  // Component did mount
  componentDidMount () {
    if (this.props.store != null) {
      
      // Subscribes to store
      this.unsub = this.props.store.subscribe (
        this.onStoreChange.bind (this)
      );

      // Checks if active:
      // Fetches state
      let state = this.props.store.getState ();
      let current = state.navigation.current_view;

      // Sets state
      this.setState ({
        active: (current==this.props.identifier)
      });

    }
  }

  // Component will unmount
  componentWillUnmount () {
    if (this.unsub != null) {
      this.unsub ();
    }
  }

}