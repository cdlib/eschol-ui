// ##### Search Layout ##### //

import React from 'react'
import HeaderComp from '../components/HeaderComp.jsx'
import GlobalNavComp from '../components/GlobalNavComp.jsx'
import ExportComp from '../components/ExportComp.jsx'
import FilterComp from '../components/FilterComp.jsx'
import InfoPagesComp from '../components/InfoPagesComp.jsx'
import ScholWorksComp from '../components/ScholWorksComp.jsx'
import FooterComp from '../components/FooterComp.jsx'

class SearchLayout extends React.Component {
  render() {
		return (
			<div className="l_search">
				<HeaderComp />
				<GlobalNavComp />
				<ExportComp />
				<div className="c-columns">
					<aside>
					 	<FilterComp />
					</aside>
				  <main>
				  	<section className="o-columnbox-main">
							<header>
								<h2 className="o-columnbox-main__heading">Informational Pages (12 results)</h2>
							</header>
							<InfoPagesComp />
						</section>
						<section className="o-columnbox-main">
							<header>
								<h2 className="o-columnbox-main__heading">Scholarly Works (12,023 results)</h2>
							</header>
							[ScholWorksComp to go here]
						</section>
				  </main>
				</div>
				<FooterComp />
			</div>
		)
	}
}

module.exports = SearchLayout;
