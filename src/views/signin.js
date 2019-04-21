

// Imports
import React from 'react';
import View from '../view';

// Singin View
export default class SinginView
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      signin_load: false,
      notification: null,
    };
  }
  
  // Render
  render () { return (

    <View identifier="signin" store={this.props.store}>
      <div className="content-container">

        {/*<div className="title">
          Deepli
        </div>*/}

        <form className="signin-form" onSubmit={this.signin.bind (this)}>
          <div className={`notification ${this.state.notification?'active':''}`}>
            Oops, something went wrong!
          </div>
          
          <input type="text" placeholder="USERNAME" className="username" />
          <input type="password" placeholder="PASSWORD" className="password" />

          <div className="buttons">
            <div className="button">
              <svg className="main-icon" viewBox="0 0 24 24">
                <use xlinkHref="#icon-register">
                </use>
              </svg>
            </div>

            <label>
              <button type="submit" style={{display:'none'}} />
              <div className={`button ${this.state.signin_load?'loading':''}`} >

                <svg className="main-icon" viewBox="0 0 24 24">
                  <use xlinkHref="#icon-signin">
                  </use>
                </svg>

                <svg className="load-icon" viewBox="0 0 24 24">
                  <use xlinkHref="#icon-tmp-load">
                  </use>
                </svg>

              </div>
            </label>
          </div>
        </form>

      </div>
    </View>

  )}

  // Sign in
  signin (e) {

    e.preventDefault ();
    
    // Initial set state
    this.setState ({
      signin_load: true,
      notification: null,
    });

    // Tmp. timeout
    setTimeout ( _ => {
      this.setState ({
        signin_load: false,
        notification: 'Invalid Credentials',
      });
    }, 1000);

  }

}