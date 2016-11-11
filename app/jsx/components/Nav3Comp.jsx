// ##### Navigation - Journal Component ##### //

import React from 'react'
import 'details-polyfill'
import Breakpoints from '../../js/breakpoints.json'

class Nav3Comp extends React.Component {
  render() {
    return (
      <nav className="c-nav3">
        <details className="c-nav3__main">
          <summary className="c-nav3__main-button" role="button">Menu
          </summary>
          <div className="c-nav3__main-items">
            <a href="">Journal Home</a>
            <a href="">Issues >></a>
            <a href="">About Us</a>
            <a href="">Aims &amp; Scope</a>
            <a href="">Editorial Board</a>
            <a href="">Policies</a>
            <a href="">Submission Guidelines</a>
            <a href="">Contact</a>
          </div>
        </details>
      </nav>
    )
  }
}

module.exports = Nav3Comp;
