

// Imports
import React from 'react';
import View from '../view';
import { switch_view } from '../actions/navigation';

// Home View
export default class HomeView
  extends React.Component {
  
  // Render
  render () { return (

    <View identifier="home" store={this.props.store}>
      <div className="content-container">

        Home View
        <div className="button" onClick={this.switchView.bind (this)}>
          Switch To Signin
        </div>

      </div>
    </View>

  )}

  // Switch view
  switchView () {
    if (this.props.store != null) {
      this.props.store.dispatch (
        switch_view ('signin')
      );
    }
  }

}