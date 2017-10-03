// ##### Home Section 2 Component ##### //

import React from 'react'

class HomeSection2Comp extends React.Component {
  render() {
    return (
      <div className="c-homesection2">
        <p className="o-heading4a">eScholarship is the institutional repository for the UC system</p>
        <p>eScholarship serves as the institutional repository for the ten University of California campuses and affiliated research centers.</p>
        <p>eScholarship Repository content includes postprints (previously published articles), as well as working papers, electronic theses and dissertations (ETDs), student capstone projects, and seminar/ conference proceedings.</p>
        <h3>Repository Holdings</h3>
        <div className="o-stat">
          <div className="o-stat--item">
            <a href="">24,844</a> Items
          </div>
          <div className="o-stat--units">
            <a href="">119</a> Research Units
          </div>
          <div className="o-stat--passed">
            <a href="">6,532</a> Items since UC <br/> OA Policy passed
          </div>
        </div>
        <a href="" className="o-textlink__external-link">Browse all eScholarship holdings</a>
        <a href="" className="o-textlink__external-link">More about the eScholarship repository</a>
      </div>
    )
  }
}

module.exports = HomeSection2Comp;
