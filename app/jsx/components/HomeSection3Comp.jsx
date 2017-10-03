// ##### Home Section 3 Component ##### //

import React from 'react'
import JournalGridComp from '../components/JournalGridComp.jsx'

class HomeSection3Comp extends React.Component {
  render() {
    return (
      <div className="c-homesection3">
        <p className="o-heading4a">eScholarship is also an open access publishing platform</p>
        <p>eScholarship Publishing is an open access publishing platform subsidized by the University of California, managed by the California Digital Library, and offered free of charge to UC-affiliated departments, research units, publishing programs and individual scholars.</p>
        <p>We offer publishing and production tools, including a full editorial and peer review system, as well as professional support and consulting services.</p>
        <a href="" className="o-textlink__external-link">How to start a journal</a>
        <JournalGridComp />
        <a href="" className="o-textlink__external-link">Browse all eScholarship journals</a>
      </div>
    )
  }
}

module.exports = HomeSection3Comp;
