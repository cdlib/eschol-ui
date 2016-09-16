// ##### Search Layout ##### //

import React from 'react'
import HeaderComp from '../components/HeaderComp.jsx'
import GlobalNavComp from '../components/GlobalNavComp.jsx'
import ExportComp from '../components/ExportComp.jsx'
import FooterComp from '../components/FooterComp.jsx'

class SearchLayout extends React.Component {
  render() {
		return (
			<div className="l_search">
				<HeaderComp />
				<GlobalNavComp />
				<ExportComp />
				<FooterComp />
			</div>
		)
	}
}

module.exports = SearchLayout;
