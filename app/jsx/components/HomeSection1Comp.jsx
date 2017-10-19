// ##### Home Section 1 Component ##### //

import React from 'react'

class HomeSection1Comp extends React.Component {
  render() {
    return (
      <div className="c-homesection__1">
        <div className="c-homesection__1-description">
          <h3>Good for Authors</h3>
          <p>Open access research is read and cited more than access-restricted scholarship, increasing the academic impact of and public engagement with your ideas.</p>
          <h3>Good for Readers</h3>
          <p>The University of California’s Open Access policies extend the University’s public mission to share broadly &mdash; throughout California, the nation, and the world &mdash; the research and knowledge produced at our campuses.</p>
        </div>
        <h3 className="c-homesection__1-metrics-heading">Metrics of Use</h3>
        <div className="o-stat">
          <div className="o-stat--item">
            <a href="">24,844</a> Items
          </div>
          <div className="o-stat--view">
            <a href="">119</a> Views
          </div>
        </div>
        <a href="" className="c-homesection__1-link">Learn more about UC Open Access</a>
      </div>
    )
  }
}

module.exports = HomeSection1Comp;
