

// Imports
import React from 'react';
import { hot } from 'react-hot-loader';

// Views
import SigninView from './views/signin';
import HomeView from './views/home';

// App Instance
export default hot (module) (class Instance 
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      counter: 0,
    };
  }

  // Render
  render () { return (

    <div id="views">
      <SigninView store={this.props.store} />
      <HomeView store={this.props.store} />
    </div>

  )}

});