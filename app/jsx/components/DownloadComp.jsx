// ##### Download Component ##### //

import React from 'react'

class DownloadComp extends React.Component {
  render() {
    return (
      <select className="c-download" name="" id="">
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
    )
  }
}

module.exports = DownloadComp;
