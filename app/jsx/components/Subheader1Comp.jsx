// ##### Subheader 1 Component ##### //

import React from 'react'
import Breakpoints from '../../js/breakpoints.json'
import NavComp from '../components/NavComp.jsx'

class Subheader1Comp extends React.Component {
  render() {
    return (
      <div className="c-subheader1">
        <div className="c-subheader1__logo">
          <a href="">
            <picture>
              <source srcSet="images/logo_escholarship.svg" media={"(min-width: "+Breakpoints.screen3+")"}/>
              <img src="images/logo_temp-eschol-mobile.png" alt="escholarship"/>
            </picture>
          </a>
        </div>
        <div className="c-subheader1__search">
          Search goes here
        </div>
        <div className="c-subheader1__nav">
          <NavComp />
        </div>
        <div className="c-subheader1__button">
          <button className="o-button__3">Get Started</button>
        </div>
      </div>
    )
  }
}

module.exports = Subheader1Comp;
