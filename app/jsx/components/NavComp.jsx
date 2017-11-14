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
        <details open={this.state.isOpen ? "open" : ""} className="c-nav__main" ref={(domNode)=> this.details = domNode}>
          <summary className="c-nav__main-button" onClick = {(event)=>{
            this.setState({isOpen: !this.details.open})
            event.preventDefault()
          }}><span>Menu</span>
          </summary>
          <ul className={this.state.submenuActive ? "c-nav__main-items--submenu-active" : "c-nav__main-items"}>
            <li><a href="">Journal Home</a></li>
            <li>
              <NavSubComp name="Issues" open={this.state.submenuActive == 1} onSubmenuChanged={(flag)=> this.setState({submenuActive:flag ? 1 : null})}>
                <ul>
                  <li><a href="">Volume 41, Issue 1</a></li>
                  <li><a href="">Volume 40, Issue 1</a></li>
                  <li><a href="">Volume 39, Issue 1</a></li>
                  <li><a href="">Volume 38, Issue 1</a></li>
                  <li><a href="">Volume 37, Issue 1</a></li>
                  <li><a href="">Volume 36, Issue 1</a></li>
                  <li><a href="">Volume 35, Issue 1</a></li>
                  <li><a href="">Volume 34, Issue 1</a></li>
                  <li><a href="">Volume 33, Issue 1</a></li>
                  <li><a href="">Volume 32, Issue 1</a></li>
                  <li><a href="">Volume 31, Issue 1</a></li>
                  <li><a href="">Volume 30, Issue 1</a></li>
                </ul>
              </NavSubComp>
            </li>
            <li>
              <NavSubComp name="About" open={this.state.submenuActive == 2} onSubmenuChanged={(flag)=> this.setState({submenuActive:flag ? 2 : null})}>
                <ul>
                  <li><a href="">About Us</a></li>
                  <li><a href="">Aims &amp; Scope</a></li>
                  <li><a href="">Editorial Board</a></li>
                </ul>
              </NavSubComp>
            </li>
            <li><a href=""  className="c-nav__item--active">Policies</a></li>
            <li><a href="">Submission Guidelines</a></li>
          </ul>
        </details>
      </nav>
    )
  }
}

module.exports = NavComp;
