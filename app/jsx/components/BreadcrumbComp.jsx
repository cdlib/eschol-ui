// ##### Breadcrumb Component ##### //

import React from 'react'

class BreadcrumbComp extends React.Component {
  render() {
    return (
      <nav className="c-breadcrumb">
        <ul>
          <li><a href="">eScholarship</a></li>
          <li><a href="">About</a></li>
          <li><a className="c-breadcrumb-link--active" href="">About eScholarship</a></li>
        </ul>
      </nav>
    )
  }
}

module.exports = BreadcrumbComp;
