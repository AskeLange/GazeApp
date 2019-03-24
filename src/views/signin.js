

// Imports
import React from 'react';
import View from '../view';
import Config from '../../config';
import { user_signingin, user_signin } from '../actions/user';
import { switch_view } from '../actions/navigation';

// Signin View
export default class SigninView
  extends React.Component {
  
  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      identifier: 'signin'
    };
  }

  // Renders
  // Main render
  render () { return (
    
    <View identifier={this.state.identifier} store={this.props.store}>
      <div className="content-container">
      
        <div className="titles">
          <div className="raised">Gaze</div>
          <div className="normal">Sign in</div>
        </div>

        <form id="signin_form" onSubmit={this.signin.bind (this)}>
          <input type="text" name="username" className="username textfield" placeholder="USERNAME" />
          <input type="password" name="password" className="password textfield" placeholder="PASSWORD" />
          
          <button type="submit">
            <svg viewBox="0 0 24 24" className="icon">
              <use xlinkHref="#icon-signin">
              </use>
            </svg>
          </button>
        </form>

      </div>
    </View>

  )}

  // User Singin
  signin (e) {
    
    // Prevent page redirect
    e.preventDefault ();
    
    // Extracts data
    let d = new FormData (e.currentTarget);
    let username = d.get ('username');
    let password = d.get ('password');

    // Dispatches action
    this.props.store.dispatch (
      user_signingin ()
    );

    // Creates request
    let request = new XMLHttpRequest ();
    request.onload = ( r => {

      // Extracts data
      let status = r.target.status;
      let resp = r.target.response;

      // Error handling
      if (status != 200) { throw `HTTP Status: ${status}`; }
      else { resp = JSON.parse (resp); }

      // Dispatches action
      this.props.store.dispatch (
        user_signin (resp.token, resp.uid)
      );

    });

    // Sends request
    let params = `username=${username}&password=${password}`;
    request.open ('GET', `${Config.api_url}/users/token?${params}`, true);
    request.send ();

  }

  // Life cycle events
  // On store change
  onStoreChange () {

    // Extracts data
    let state = this.props.store.getState ();
    let signed_in = state.user.signed_in;
    let current_view = state.navigation.current_view;

    // Changes view
    if (current_view == this.state.identifier && signed_in) {
      this.props.store.dispatch (
        switch_view ('subcontainer')
      );
    }

  }

  // Component did mount
  componentDidMount () {
    if (this.props.store != null) {
      this.unsub = this.props.store.subscribe (
        this.onStoreChange.bind (this)
      );
    }
  }

}