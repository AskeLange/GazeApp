

// Imports
import React from 'react';
import Screen from './_screen';

// Home screen
export default class HomeScreen
  extends React.Component {

  // Render
  render () { return ( 

    <Screen store={this.props.store} id="home">
      <div className="content-container">

        {/* Sidebar */}
        <div className="sidebar">
          <div className="navigation">

            <div className="nav-elem dashboard active">
              <svg className="icon" viewBox="0 0 24 24">
                <use xlinkHref="#icon-dashboard">
                </use>
              </svg>

              <div className="label">
                Dashboard
              </div>
            </div> 

            
            <div className="nav-elem burndown">
              <svg className="icon" viewBox="0 0 24 24">
                <use xlinkHref="#icon-chart">
                </use>
              </svg>

              <div className="label">
                Burndown
              </div>
            </div> 

            
            <div className="nav-elem settings">
              <svg className="icon" viewBox="0 0 24 24">
                <use xlinkHref="#icon-settings">
                </use>
              </svg>

              <div className="label">
                Settings
              </div>
            </div> 

          </div>
        </div>

        {/* Views */}
        <div className="views">
        </div>

      </div>
    </Screen>

  )}

}