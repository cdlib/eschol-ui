// ##### Navigation - Journal Component ##### //

import React from 'react'
import 'details-polyfill'

class Nav3Comp extends React.Component {
  render() {
    return (
      <nav className="c-nav3">
        <details open className="c-nav3__main">
          <summary className="c-nav3__main-button" role="button">Menu
          </summary>
          <div className="c-nav3__main-items">
            <a href="">Journal Home</a>
            <details open className="c-nav3__sub">
              <summary className="c-nav3__sub-button">
                Issues
              </summary>
              <div className="c-nav3__sub-items">
                <a href="">Volume 41, Issue 1</a>
                <a href="">Volume 40, Issue 1</a>
                <a href="">Volume 39, Issue 1</a>
                <a href="">Volume 38, Issue 1</a>
                <a href="">Volume 37, Issue 1</a>
                <a href="">Volume 36, Issue 1</a>
                <a href="">Volume 35, Issue 1</a>
                <a href="">Volume 34, Issue 1</a>
                <a href="">Volume 33, Issue 1</a>
                <a href="">Volume 32, Issue 1</a>
                <a href="">Volume 31, Issue 1</a>
                <a href="">Volume 30, Issue 1</a>
              </div>
            </details>
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