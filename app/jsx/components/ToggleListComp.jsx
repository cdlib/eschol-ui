// ##### Toggle List Component ##### //

import React from 'react'

class ToggleListComp extends React.Component {
  render() {
    return (
      <details className="c-togglelist">
        <summary>California Center for Population Research</summary>
        <ul>
          <li><a href="">Safe Transportation Research & Education Center</a></li>
          <li><a href="">UC Berkeley Center for Future Urban Transport: A Volvo Center of Excellence</a></li>
        </ul>
      </details>
    )
  }
}

module.exports = ToggleListComp;
