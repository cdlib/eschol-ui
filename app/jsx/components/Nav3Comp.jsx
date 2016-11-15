// ##### Navigation - Journal Component ##### //

import React from 'react'
import 'details-polyfill'

class Nav3Comp extends React.Component {
  constructor(props){
    super(props)
    this.state = {submenuActive: false}
  }
  render() {
    return (
      <nav className="c-nav3">
        <details open className="c-nav3__main">
          <summary className="c-nav3__main-button" role="button">Menu
          </summary>
          <div className={this.state.submenuActive ? "c-nav3__main-items--submenu-active" : "c-nav3__main-items"}>
            <a href="">Journal Home</a>
            { /* the 'open' attribute below should toggle onClick but isn't working */ }
            <details open={this.state.submenuActive ? "" : "open"} className="c-nav3__sub">
              <summary className="c-nav3__sub-button" onClick = {()=> this.setState({submenuActive: true})}>
                Issues &#62;&#62;
              </summary>
              <div className="c-nav3__sub-items">
                <button className="c-nav3__sub-button-main-menu" onClick = {()=> this.setState({submenuActive: false})}>&#60;&#60; Main Menu</button>
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
