// ##### Subheader 1 Component ##### //

import React from 'react'
import Breakpoints from '../../js/breakpoints.json'
import NavComp from '../components/NavComp.jsx'
import Header2Comp from '../components/Header2Comp.jsx'

class Subheader1Comp extends React.Component {
  render() {
    return (
      <div className="c-subheader1">
        <div className="c-subheader1__header">
          <Header2Comp />
        </div>
        <div className="c-subheader1__nav">
          <NavComp />
        </div>
        <div className="c-subheader1__button">
          <button className="o-button__3">Get Started</button>
        </div>
      </div>
    )
  }
}

module.exports = Subheader1Comp;
