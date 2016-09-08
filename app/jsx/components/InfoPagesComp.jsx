// ##### Informational Pages Component ##### //

import React from 'react'

class InfoPagesComp extends React.Component {
  render() {
		return (
			<div className="c-infopages">
				<div className="c-infopages__item">
					<div className="c-infopages__heading">The Center for Environmental Design Research <span className="c-infopages__heading-title">In the Press</span></div>
					<p>The University of California awards contract to Symplectic for the implementation of a publication harvesting system to support UC’s Open Access Policy" March, 2014
					</p>
				</div>
				<div className="c-infopages__item">
					<div className="c-infopages__heading">eScholarship <span className="c-infopages__heading-title">Content on this Site: Frequently Asked Questions</span></div>
					<p>eScholarship provides open access, scholarly publishing services to the University of California and delivers a dynamic research platform to scholars worldwide. Learn more about the digital publishing services provided by&hellip;
					</p>
				</div>
				<div className="c-infopages__item">
					<div className="c-infopages__heading">UC Berkeley <span className="c-infopages__heading-title">Content on this Site: Frequently Asked Questions</span></div>
					<p>eScholarship provides open access, scholarly publishing services to the University of California and delivers a dynamic research platform to scholars worldwide. Learn more about the digital publishing services provided by eScholarship&hellip;
					</p>
				</div>
			</div>
		)
	}
}

module.exports = InfoPagesComp;
