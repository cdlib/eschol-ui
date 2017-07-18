// ##### Campus Selector Component ##### //

import React from 'react'

class CampusSelectorComp extends React.Component {
  render() {
    return (
      <div className="c-campusselector">
        <div className="c-campusselector__heading">
          <a href="">UC Office of the President</a>
        </div>
        <details className="c-campusselector__selector">
          <summary aria-label="select campus"></summary>
          <div className="c-campusselector__menu">
            <div className="c-campusselector__sub-heading" id="c-campusselector__sub-heading">eScholarship at &hellip;</div>
            <div className="c-campusselector__items" aria-labelledby="c-campusselector__sub-heading" role="list">
              <a href="" role="listitem">UC Berkeley</a>
              <a href="" role="listitem">UC Davis</a>
              <a href="" role="listitem">UC Irvine</a>
              <a href="" role="listitem">UCLA</a>
              <a href="" role="listitem">UC Merced</a>
              <a href="" role="listitem">UC Riverside</a>
              <a href="" role="listitem">UC San Diego</a>
              <a href="" role="listitem">UC San Francisco</a>
              <a href="" role="listitem">UC Santa Barbara</a>
              <a href="" role="listitem">UC Santa Cruz</a>
              <a href="" role="listitem">UC Office of the President</a>
              <a href="" role="listitem">UC Press</a>
            </div>
          </div>
        </details>
      </div>
    )
  }
}

module.exports = CampusSelectorComp;
