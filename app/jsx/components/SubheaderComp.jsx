// ##### Subheader Component ##### //

import React from 'react'
import CampusSelectorComp from '../components/CampusSelectorComp.jsx'

class SubheaderComp extends React.Component {
  render() {
    return (
      <div className="c-subheader">
        <CampusSelectorComp />
        <a className="c-subheader__banner" href="">
          <img src="images/temp_journal-banner.png" alt=""/>
        </a>
        <div className="c-subheader__sidebar">
          <button className="o-button__3">Submit</button>
          <button className="o-button__3">Manage <span className="c-subheader__button-fragment">Submissions</span></button>
        </div>
      </div>
    )
  }
}

module.exports = SubheaderComp;
