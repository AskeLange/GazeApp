

// Imports
import React from 'react';
import View from '../view';
import Dashboard from './subviews/dashboard';

// Dashboard View
export default class SubContainerView
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      identifier: 'subcontainer'
    };
  }

  // Renders
  // Main render
  render () {
    return (

      <View identifier={this.state.identifier} store={this.props.store}>
        <div className="sidebar">
          {/* Sidebar content here */}
        </div>

        <div className="content-container">
          <Dashboard store={this.props.store} />
        </div>
      </View>

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