

// Imports
import React from 'react';

// Dashboard View
export default class DashboardView
  extends React.Component {

  // Renders
  // Main render
  render () {
    return (

      <div id="dashboard" className="sub-view">
        This is da dashboard!
      </div>

    );
  }

  // Life cycle events
  // On store change
  onStoreChange () {

    // Extracts data
    let state = this.props.store.getState ();

  }

  // Component did mount
  componentDidMount () {
    if (this.props.store != null) {
      this.unsub = this.props.store.subscribe (
        this.onStoreChange.bind (this)
      );
    }
  }

  // Component will unmount
  componentWillUnmount () {
    if (this.unsub != null) {
      this.unsub ();
    }
  }

}