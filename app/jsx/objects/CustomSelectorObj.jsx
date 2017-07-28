// ##### Custom Selector Objects ##### //

import React from 'react'

class CustomSelectorObj extends React.Component {
  render() {
    return (
      <div>

        <h2>Custom Selector 1</h2>
        <ul>
          <li>Right-aligned heading</li>
          <li>Item group sub-heading</li>
        </ul>

        <div className="o-customselector">
          <a className="o-customselector__heading" href="">UC Office of the President</a>
          <details className="o-customselector__selector">
            <summary aria-label="select campus"></summary>
            <div className="o-customselector__menu">
              <div className="o-customselector__sub-heading" id="o-customselector__sub-heading">eScholarship at &hellip;</div>
              <div className="o-customselector__items" aria-labelledby="o-customselector__sub-heading" role="list">
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

        <h2>Custom Selector 2</h2>
        <ul>
          <li>Left-aligned heading</li>
          <li>No item group sub-heading</li>
        </ul>

        <div className="o-customselector">
          <a className="o-customselector__heading" href="">Volume 6, Issue 2, 2016</a>
          <details className="o-customselector__selector">
            <summary aria-label="select campus"></summary>
            <div className="o-customselector__menu">
              <div className="o-customselector__items" role="list">
                <a href="" role="listitem">Volume 6, Issue 1, 2016</a>
                <a href="" role="listitem">Volume 5, Issue 2, 2015</a>
                <a href="" role="listitem">Volume 5, Issue 1, 2015</a>
                <a href="" role="listitem">Volume 4, Issue 2, 2014</a>
                <a href="" role="listitem">Volume 4, Issue 1, 2014</a>
                <a href="" role="listitem">Volume 3, Issue 2, 2013</a>
                <a href="" role="listitem">Volume 3, Issue 1, 2013</a>
                <a href="" role="listitem">Volume 2, Issue 2, 2012</a>
                <a href="" role="listitem">Volume 2, Issue 1, 2012</a>
                <a href="" role="listitem">Volume 1, Issue 2, 2011</a>
                <a href="" role="listitem">Volume 1, Issue 1, 2011</a>
              </div>
            </div>
          </details>
        </div>

      </div>
    )
  }
}

module.exports = CustomSelectorObj;
