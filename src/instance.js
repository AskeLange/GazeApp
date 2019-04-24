

// Imports
import React from 'react';
import { hot } from 'react-hot-loader';

// Screens
import HomeScreen from './screens/home';
import SigninScreen from './screens/signin';

// App Instance
export default hot (module) (class Instance 
  extends React.Component {

  // Render
  render () { return (

    <div id="app-instance">
      <div className="screens">
        
        <SigninScreen store={this.props.store} />
        <HomeScreen store={this.props.store} />

      </div>
    </div>

  )}

});