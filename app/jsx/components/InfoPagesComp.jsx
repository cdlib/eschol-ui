// ##### Informational Pages Component ##### //

import React from 'react'
import $ from 'jquery'
import dotdotdot from 'jquery.dotdotdot'

class InfoPagesComp extends React.Component {
  componentDidMount() {
    $('.c-infopages__text').dotdotdot({watch:"window"});
  }
  render() {
    return (
      <div className="c-infopages">
        <div className="c-infopages__item">
          <h2>
            <a href="">The Center for Environmental Design Research <span className="c-infopages__heading-title">In the Press</span>
            </a>
          </h2>
          <div className="c-infopages__text">The University of California awards contract to Symplectic for the implementation of a publication harvesting system to support UC’s Open Access Policy" March, 2014
          </div>
        </div>
        <div className="c-infopages__item">
          <h2>
            <a href="">eScholarship <span className="c-infopages__heading-title">Content on this Site: Frequently Asked Questions</span>
            </a>
          </h2>
          <div className="c-infopages__text">eScholarship provides open access, scholarly publishing services to the University of California and delivers a dynamic research platform to scholars worldwide. Learn more about the digital publishing services provided by&hellip;
          </div>
        </div>
        <div className="c-infopages__item">
          <h2>
            <a href="">UC Berkeley <span className="c-infopages__heading-title">Content on this Site: Frequently Asked Questions</span>
            </a>
          </h2>
          <div className="c-infopages__text">eScholarship provides open access, scholarly publishing services to the University of California and delivers a dynamic research platform to scholars worldwide. Learn more about the digital publishing services provided by eScholarship&hellip;
          </div>
        </div>
      </div>
    )
  }
}

module.exports = InfoPagesComp;
