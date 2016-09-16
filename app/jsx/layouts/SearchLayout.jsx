// ##### Search Layout ##### //

import React from 'react'
import HeaderComp from '../components/HeaderComp.jsx'
import GlobalNavComp from '../components/GlobalNavComp.jsx'
import FooterComp from '../components/FooterComp.jsx'

class SearchLayout extends React.Component {
  render() {
		return (
			<div className="l_search">
				<HeaderComp />
				<GlobalNavComp />
				<div>
					[Search layout to go here]
				</div>
				<FooterComp />
			</div>
		)
	}
}

module.exports = SearchLayout;
