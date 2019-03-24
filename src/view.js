

// Imports
import React from 'react';

// View Parent Class
export default class View
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      active: false,
    };
  }

  // Renders
  // Main Render
  render () {
    return (

      <div id={this.props.identifier} 
        className={'view' + (this.state.active ? ' active' : '')}>
        {this.props.children}
      </div>

    );
  }

  // Life cycle events
  // On store change
  onStoreChange () {

    // Extracts data
    let state = this.props.store.getState ();
    let current_view = state.navigation.current_view;

    // Sets state
    this.setState ({
      active: this.props.identifier == current_view
    });

  }

  // Component did mount
  componentDidMount () {
    if (this.props.store != null) {
      
      // Subscribes to store
      this.unsub = this.props.store.subscribe (
        this.onStoreChange.bind (this)
      );

      // Checks for active
      let identifier = this.props.identifier;
      let current_view = this.props.store.getState ().navigation.current_view;
      if (current_view == identifier) { this.setState ({ active : true }); }

    }
  }

  // Component will unmount
  ComponentWillUnmount () {
    if (this.unsub != null) {
      this.unsub ();
    }
  }

}
