// ##### Alert Objects ##### //

import React from 'react'

class AlertObj extends React.Component {
  constructor(props){
    super(props)
    this.state = {alertClose: false}
  }
  render() {
    return (
      <div>

        <h2>Black Inline Alert</h2>

        <div className="o-alert1" role="alert">
          This item is <strong>not available</strong> for download from eScholarship.
        </div>

        <h2>Full-width with Close Alert</h2>

        <div className={this.state.alertClose ? "o-alert2--close" : "o-alert2"} role="alert">
          <strong className="o-alert2__main-text">New Website In Progress</strong>
          <div className="o-alert2__more-info">
            {/* more info text */}
          </div>
          <button className="o-alert2__button" onClick = {()=> this.setState({alertClose: true})}>Got it!</button>
        </div>

      </div>
    )
  }
}

module.exports = AlertObj;
