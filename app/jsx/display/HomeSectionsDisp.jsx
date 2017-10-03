// ##### Home Sections 1, 2, and 3 Display ##### //

import React from 'react'
import HomeSection1Comp from '../components/HomeSection1Comp.jsx'
import HomeSection2Comp from '../components/HomeSection2Comp.jsx'
import HomeSection3Comp from '../components/HomeSection3Comp.jsx'

class HomeSectionsDisp extends React.Component {
  render() {
    return (
      <div>
        <HomeSection1Comp />
        <HomeSection2Comp />
        <HomeSection3Comp />
      </div>
    )
  }
}

module.exports = HomeSectionsDisp;
