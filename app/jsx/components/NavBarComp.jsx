// ##### Nav Bar Component ##### //

import React from 'react'
import LanguageComp from '../components/LanguageComp.jsx'
import NavComp from '../components/NavComp.jsx'
import SocialIconsComp from '../components/SocialIconsComp.jsx'

class NavBarComp extends React.Component {
  render() {
    return (
      <div className="c-navbar">
        <NavComp />
        <SocialIconsComp />
        <LanguageComp />
      </div>
    )
  }
}

module.exports = NavBarComp;
