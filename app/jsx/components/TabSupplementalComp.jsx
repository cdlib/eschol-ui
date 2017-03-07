// ##### Tab Supplemental Material Component ##### //

import React from 'react'
import RefineMediaComp from '../components/RefineMediaComp.jsx'
import MediaFileGridComp from '../components/MediaFileGridComp.jsx'

class TabSupplementalComp extends React.Component {
  render() {
    return (
      <div className="c-tabcontent">
        <h1 className="c-tabcontent__heading">Supplemental Material</h1>
        <RefineMediaComp />
        <MediaFileGridComp />
      </div>
    )
  }
}

module.exports = TabSupplementalComp;
