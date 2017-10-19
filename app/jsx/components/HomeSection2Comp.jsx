// ##### Home Section 2 Component ##### //

import React from 'react'

class HomeSection2Comp extends React.Component {
  render() {
    return (
      <div id="repository" className="c-homesection__2">
        <div className="c-homesection__2-map"></div>
        <div className="c-homesection__2-description">
          <h3>Institutional Repository</h3>
          <p>eScholarship serves as the institutional repository for the ten University of California campuses and affiliated research centers.</p>
          <p>eScholarship Repository content includes postprints (previously published articles), as well as working papers, electronic theses and dissertations (ETDs), student capstone projects, and seminar/conference proceedings.</p>
        </div>
        <button className="c-homesection__2-deposit">Deposit Work</button>
        <a href="" className="c-homesection__2-browse-campuses">Browse campuses</a>
        <h3 className="c-homesection__2-metrics-heading">Repository Holdings</h3>
        <div className="o-stat">
          <div className="o-stat--articles">
            <a href="">24,844</a> Articles
          </div>
          <div className="o-stat--books">
            <a href="">119</a> Books
          </div>
          <div className="o-stat--theses">
            <a href="">6,532</a> Theses
          </div>
        </div>
        <a href="" className="c-homesection__2-browse-all">Browse all eScholarship holdings</a>
        <a href="" className="c-homesection__2-more">Learn more about the eScholarship repository</a>
      </div>
    )
  }
}

module.exports = HomeSection2Comp;
