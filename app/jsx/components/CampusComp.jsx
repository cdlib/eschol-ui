// ##### Campus Heading and Menu Component ##### //

import React from 'react'
import 'details-polyfill'

class CampusComp extends React.Component {
  render() {
    return (
      <div className="c-campus">
        <h2 className="c-campus__heading">
          UC Berkeley
        </h2>
        <details open className="c-campus__menu">
          <summary>[arrow]</summary>
          <div className="c-campus__menu-items">
            <div>eScholarship at &hellip;</div>
            <a href="">UC Berkeley</a>
            <a href="">UC Davis</a>
            <a href="">UC Irvine</a>
            <a href="">UCLA</a>
            <a href="">UC Merced</a>
            <a href="">UC Riverside</a>
            <a href="">UC San Diego</a>
            <a href="">UC San Francisco</a>
            <a href="">UC Santa Barbara</a>
            <a href="">UC Santa Cruz</a>
            <a href="">UC Office of the President</a>
            <a href="">UC Press</a>
          </div>
        </details>
      </div>
    )
  }
}

module.exports = CampusComp;
