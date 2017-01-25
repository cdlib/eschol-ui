// ##### Subheader Component ##### //

import React from 'react'
import CampusSelectorComp from '../components/CampusSelectorComp.jsx'

class SubheaderComp extends React.Component {
  render() {
    return (
      <div className="c-subheader">
        <CampusSelectorComp />
        <img className="c-subheader__banner" src="http://placehold.it/400x100?text=Campus Logo Here" alt=""/>
        <div className="c-subheader__buttons">
          <button className="o-button__3">Submit</button>
          <button className="o-button__3">Manage <span className="c-subheader__button-fragment">Submissions</span></button>
        </div>
      </div>
    )
  }
}

module.exports = SubheaderComp;
