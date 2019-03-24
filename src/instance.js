

// Imports
import React from 'react';
import SigninView from './views/signin';
import SubContainerView from './views/subcontainer';

// App Instance
export default class Instance
  extends React.Component {

  // Render
  render () { return (

    <div id="views">
      <div id="views-inner">

        <SigninView store={this.props.store} />
        <SubContainerView store={this.props.store} />

      </div>
    </div>

  )}

} 