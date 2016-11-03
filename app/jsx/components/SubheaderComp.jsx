// ##### Subheader Component ##### //

import React from 'react'
import CampusComp from '../components/CampusComp.jsx'

class SubheaderComp extends React.Component {
  render() {
    return (
      <div className="c-subheader">
        <div className="c-subheader__campus">
          <CampusComp />
        </div>
        <div className="c-subheader__nav">
          [global nav here]
        </div>
        <div className="c-subheader__buttons">
          [deposit buttons here]
        </div>
        <div className="c-subheader__banner">
          <img className="c-subheader__banner-image" src="http://placehold.it/400x100?text=Campus Logo Here" alt=""/>
        </div>
      </div>
    )
  }
}

module.exports = SubheaderComp;
