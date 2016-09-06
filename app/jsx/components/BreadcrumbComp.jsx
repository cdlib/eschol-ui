// ##### Footer Component ##### //

import React from 'react'

class BreadcrumbComp extends React.Component {
  render() {
		return (
			<nav className="c-breadcrumb">
				<a href="">eScholarship</a>
				<a href="">About</a>
				<a className="c-breadcrumb-link--active" href="">About eScholarship</a>
			</nav>
		)
	}
}

module.exports = BreadcrumbComp;
