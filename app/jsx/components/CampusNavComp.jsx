// ##### Campus Navigation Component ##### //

import React from 'react'
import 'details-polyfill'
import Breakpoints from '../../js/breakpoints.json'

class CampusNavComp extends React.Component {
  componentWillMount() {
    if (matchMedia) {
      this.mq = matchMedia("(min-width:"+Breakpoints.screen2+")")
      this.mq.addListener(this.widthChange)
      this.widthChange()
    }
  }
  widthChange = ()=> {
    this.setState({isOpen: this.mq.matches})
  }
  render() {
    return (
      <nav className="c-campusnav">
        <details open={this.state.isOpen ? "open" : ""} className="c-campusnav__main">
          <summary className="c-campusnav__main-button" role="button">Menu
          </summary>
          <div className="c-campusnav__main-items">
            <a href="">Open Access Policies</a>
            <a href="">Browse Journals</a>
            <a href="">Browse Departments</a>
          </div>
        </details>
      </nav>
    )
  }
}

module.exports = CampusNavComp;
