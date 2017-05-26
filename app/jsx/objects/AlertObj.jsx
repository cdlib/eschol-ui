// ##### Alert Objects ##### //

import React from 'react'

class AlertObj extends React.Component {
  render() {
    return (
      <div>

        <h2>Black Inline Alert</h2>

        <div className="o-alert1" role="alert">
          This item is <strong>not available</strong> for download from eScholarship.
        </div>

        <h2>Full-width with Close Alert</h2>

        <div className="o-alert2" role="alert">
          <div className="o-alert2__text">
            New Website In Progress
          </div>
          <button className="o-alert2__button">Got it!</button>
        </div>

      </div>
    )
  }
}

module.exports = AlertObj;
