// ##### Alert Objects ##### //

import React from 'react'

class AlertObj extends React.Component {
  render() {
    return (
      <div>

        <h1>Colorless Inline Alert</h1>

        <div className="o-alert1" role="alert">
          This item is <strong>not available</strong> for download from eScholarship.
        </div>

      </div>
    )
  }
}

module.exports = AlertObj;
