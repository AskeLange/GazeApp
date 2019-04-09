

// Imports
import React from 'react';
import { hot } from 'react-hot-loader';

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
      <div id="views-inner">
        Cool Counter: {this.state.counter}!<br />
        <button onClick={() => {
          this.setState ({ counter: this.state.counter+1 })
        }}>Increment</button>
      </div>
    </div>

  )}

});