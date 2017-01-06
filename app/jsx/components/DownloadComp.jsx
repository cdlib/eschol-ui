// ##### Download Component ##### //

import React from 'react'

class DownloadComp extends React.Component {
  render() {
    return (
      <div className="c-download">
        <select name="" id="">
          <optgroup label="Main Content">
            <option value="">Download PDF</option>
            <option value="">One</option>
          </optgroup>
          <optgroup label="Citation">
            <option value="">Two</option>
            <option value="">Three</option>
            <option value="">Four</option>
          </optgroup>
        </select>
      </div>
    )
  }
}

module.exports = DownloadComp;
