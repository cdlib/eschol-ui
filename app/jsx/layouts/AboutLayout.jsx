// ##### About Layout ##### //

import React from 'react'
import HeaderComp from '../components/HeaderComp.jsx'
import GlobalNavComp from '../components/GlobalNavComp.jsx'
import BreadcrumbComp from '../components/BreadcrumbComp.jsx'
import FooterComp from '../components/FooterComp.jsx'

class AboutLayout extends React.Component {
  render() {
		return (
			<div className="l_about">
				<HeaderComp />
				<GlobalNavComp />
				<BreadcrumbComp />
				<div className="o-columnbox-main">
					<h1 className="o-columnbox-main__heading">About eScholarship</h1>
					<p>eScholarship provides a suite of open access, scholarly publishing services and research tools that enable departments, research units, publishing programs, and individual scholars associated with the University of California to have direct control over the creation and dissemination of the full range of their scholarship.
					<p>With eScholarship, you can publish the following original scholarly works on a dynamic research platform available to scholars worldwide:</p>
					</p>
					<ul>
						<li><a href="">Books</a></li>
						<li><a href="">Journals</a></li>
						<li><a href="">Working Papers</a></li>
						<li><a href="">Previously Published Works</a></li>
						<li><a href="">Conferences</a></li>
					</ul>
					<p>eScholarship also provides deposit and dissemination services for postprints, or previously published articles.</p>
					<p>Publications benefit from manuscript and peer-review management systems, as well as a full range of persistent access and preservation services.</p>
					<p>Learn more about what to expect from publishing with eScholarship.</p>
					<p>eScholarship is a service of the Publishing Group of the California Digital Library.</p>
					<p>Questions? <a href="">Contact us</a>.</p>
				</div>
				<FooterComp />
			</div>
		)
	}
}

module.exports = AboutLayout;
