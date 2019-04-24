

// Imports
import React from 'react';
import Screen from './_screen';
import { signin } from '../actions/user';
import { switch_screen } from '../actions/navigation';

// Signin screen
export default class SigninScreen
  extends React.Component {

  // Renders
  // Main render
  render () { return ( 

    <Screen store={this.props.store} id="signin">
      <div className="content-container">
        <form onSubmit={this.submit.bind (this)}>
        
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />

          <div className="buttons">
            <div className="button register">
              <svg viewBox="0 0 24 24">
                <use xlinkHref="#icon-register">
                </use>
              </svg>
            </div>

            <label>
              <button type="submit" style={{display:'none'}}></button>
              <div className="button signin">
                <svg viewBox="0 0 24 24">
                  <use xlinkHref="#icon-signin">
                  </use>
                </svg>
              </div>
            </label>
          </div>

        </form>
      </div>
    </Screen>

  )}

  // Actions
  // Submit
  submit (e) {

    // Prevent default
    e.preventDefault ();

    // Extracts data
    let fd = new FormData (e.target);
    let un = fd.get ('username');
    let pw = fd.get ('password');

    // Performs sign in
    this.props.store.dispatch (
      signin (un, pw)
    );

  }

  // Life cycle events
  // On store change
  onStoreChange () {


  }

  // Component dud mount
  componentDidMount () {
    this.unsub = this.props.store.subscribe (
      this.onStoreChange.bind (this)
    );
  }

  // Component will unmount
  componentWillUnmount () {
    this.unsub ();
  }

}