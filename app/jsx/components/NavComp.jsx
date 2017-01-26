// ##### Navigation Component ##### //

import React from 'react'
import NavSubComp from '../components/NavSubComp.jsx'
import Breakpoints from '../../js/breakpoints.json'

class NavComp extends React.Component {
  constructor(props){
    super(props)
    this.state = {submenuActive: null}
  }
  componentWillMount() {
    if (matchMedia) {
      this.mq = matchMedia("(min-width:"+Breakpoints.screen3+")")
      this.mq.addListener(this.widthChange)
      this.widthChange()
    }
  }
  widthChange = ()=> {
    this.setState({isOpen: this.mq.matches})
  }
  render() {
    return (
      <nav className="c-nav">
        <details open={this.state.isOpen ? "open" : ""} className="c-nav__main">
          <summary className="c-nav__main-button" role="button">Menu
          </summary>
          <div className={this.state.submenuActive ? "c-nav__main-items--submenu-active" : "c-nav__main-items"} role="list">
            <a href="" role="listitem">Journal Home</a>
            <NavSubComp name="Issues" open={this.state.submenuActive == 1} onSubmenuChanged={(flag)=> this.setState({submenuActive:flag ? 1 : null})}>
              <a href="" role="listitem">Volume 41, Issue 1</a>
              <a href="" role="listitem">Volume 40, Issue 1</a>
              <a href="" role="listitem">Volume 39, Issue 1</a>
              <a href="" role="listitem">Volume 38, Issue 1</a>
              <a href="" role="listitem">Volume 37, Issue 1</a>
              <a href="" role="listitem">Volume 36, Issue 1</a>
              <a href="" role="listitem">Volume 35, Issue 1</a>
              <a href="" role="listitem">Volume 34, Issue 1</a>
              <a href="" role="listitem">Volume 33, Issue 1</a>
              <a href="" role="listitem">Volume 32, Issue 1</a>
              <a href="" role="listitem">Volume 31, Issue 1</a>
              <a href="" role="listitem">Volume 30, Issue 1</a>
            </NavSubComp>
            <NavSubComp name="About" open={this.state.submenuActive == 2} onSubmenuChanged={(flag)=> this.setState({submenuActive:flag ? 2 : null})}>
              <a href="" role="listitem">About Us</a>
              <a href="" role="listitem">Aims &amp; Scope</a>
              <a href="" role="listitem">Editorial Board</a>
            </NavSubComp>
            <a href="" role="listitem" className="c-nav__item--active">Policies</a>
            <a href="" role="listitem">Submission Guidelines</a>
            <a href="" role="listitem">Contact</a>
          </div>
        </details>
      </nav>
    )
  }
}

module.exports = NavComp;
