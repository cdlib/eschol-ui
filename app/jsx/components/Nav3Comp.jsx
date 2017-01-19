// ##### Navigation - Journal Component ##### //

import React from 'react'
import NavSubComp from '../components/NavSubComp.jsx'
import Breakpoints from '../../js/breakpoints.json'

class Nav3Comp extends React.Component {
  constructor(props){
    super(props)
    this.state = {submenuActive: false}
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
      <nav className="c-nav3">
        <details open={this.state.isOpen ? "open" : ""} className="c-nav3__main">
          <summary className="c-nav3__main-button" role="button">Menu
          </summary>
          <div className={this.state.submenuActive ? "c-nav3__main-items--submenu-active" : "c-nav3__main-items"}>
            <a href="">Journal Home</a>
            <NavSubComp name="Issues" onSubmenuChanged={(flag)=> this.setState({submenuActive:flag})}>
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
            </NavSubComp>
            <NavSubComp name="About" onSubmenuChanged={(flag)=> this.setState({submenuActive:flag})}>
              <a href="">About Us</a>
              <a href="">Aims &amp; Scope</a>
              <a href="">Editorial Board</a>
            </NavSubComp>
            <a href="" className="c-nav3__item--active">Policies</a>
            <a href="">Submission Guidelines</a>
            <a href="">Contact</a>
          </div>
        </details>
      </nav>
    )
  }
}

module.exports = Nav3Comp;
