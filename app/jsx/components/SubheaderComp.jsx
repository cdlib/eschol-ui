// ##### Subheader Component ##### //

import React from 'react'
import CampusComp from '../components/CampusComp.jsx'
import Nav2Comp from '../components/Nav2Comp.jsx'

class SubheaderComp extends React.Component {
  render() {
    return (
      <div className="c-subheader">
        <div className="c-subheader__campus">
          <CampusComp />
        </div>
        <div className="c-subheader__nav">
          <Nav2Comp />
        </div>
        <div className="c-subheader__buttons">
          <a href="" className="o-button__3">Deposit</a>
        </div>
        <div className="c-subheader__banner">
          <img className="c-subheader__banner-image" src="http://placehold.it/400x100?text=Campus Logo Here" alt=""/>
        </div>
      </div>
    )
  }
}

module.exports = SubheaderComp;
