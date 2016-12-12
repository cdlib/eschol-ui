// ##### Subheader 2 Component ##### //

import React from 'react'
import CampusSelectorComp from '../components/CampusSelectorComp.jsx'
import Nav3Comp from '../components/Nav3Comp.jsx'

class Subheader2Comp extends React.Component {
  render() {
    return (
      <div className="c-subheader">
        <div className="c-subheader__row1">
          <CampusSelectorComp />
          <img className="c-subheader__banner" src="http://placehold.it/400x100?text=Campus Logo Here" alt=""/>
          <div className="c-subheader__buttons">
            <a href="" className="c-subheader__button-submit">Submit</a>
            <a href="" className="c-subheader__button-manage">Manage <span className="c-subheader__button-fragment">Submissions</span></a>
          </div>
        </div>
        <div className="c-subheader__row2">
          <Nav3Comp />
        </div>
      </div>
    )
  }
}

module.exports = Subheader2Comp;
