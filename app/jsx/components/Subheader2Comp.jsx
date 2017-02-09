// ##### Subheader 2 Component ##### //

import React from 'react'
import CampusSelectorComp from '../components/CampusSelectorComp.jsx'

class Subheader2Comp extends React.Component {
  render() {
    return (
      <div className="c-subheader2">
        <CampusSelectorComp />
        <img className="c-subheader2__banner" src="images/temp_journal-banner.png" alt=""/>
        <div className="c-subheader2__buttons">
          <button className="o-button__3">Submit</button>
          <button className="o-button__3">Manage <span className="c-subheader2__button-fragment">Submissions</span></button>
        </div>
      </div>
    )
  }
}

module.exports = Subheader2Comp;
