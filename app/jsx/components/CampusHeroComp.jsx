// ##### Campus Hero Component ##### //

import React from 'react'

class CampusHeroComp extends React.Component {
  render() {
    return (
      <div className="c-campushero" style={{backgroundImage: "url('images/hero-ucb.jpg')"}}>
        <div className="c-campushero__lede">
          Share your research with a global audience
        </div>
        <div className="c-campushero__text">
          The eScholarship suite of open access publishing services gives UC scholars direct control over the creation and dissemination of the full range of their research.
        </div>
        <a href="" className="c-campushero__link">Get started</a>
      </div>
    )
  }
}

module.exports = CampusHeroComp;
