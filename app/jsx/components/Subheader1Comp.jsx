// ##### Subheader 1 Component ##### //

import React from 'react'
import CampusSelectorComp from '../components/CampusSelectorComp.jsx'
import Nav2Comp from '../components/Nav2Comp.jsx'

class Subheader1Comp extends React.Component {
  render() {
    return (
      <div className="c-subheader">
        <div className="c-subheader__row1">
          <CampusSelectorComp />
          <img className="c-subheader__banner" src="http://placehold.it/400x100?text=Campus Logo Here" alt=""/>
          <div className="c-subheader__buttons">
            <a href="" className="c-subheader__button-deposit">Deposit</a>
          </div>
        </div>
        <div className="c-subheader__row2">
          <Nav2Comp />
        </div>
      </div>
    )
  }
}

module.exports = Subheader1Comp;
