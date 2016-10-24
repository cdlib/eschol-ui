// ##### UI Library Home Page ##### //

import React from 'react'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Layouts</h2>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#searchlayout">Search</a></li>
        </ul>
        <h2>Objects</h2>
        <ul>
          <li><a href="#button">Buttons</a></li>
          <li><a href="#columnbox">Column Boxes</a></li>
          <li><a href="#input">Inputs</a></li>
          <li><a href="#textlink">Text Links</a></li>
        </ul>
        <h2>Components</h2>
        <ul>
          <li><a href="#breadcrumb">Breadcrumb Navigation</a></li>
          <li><a href="#checkbox">Checkbox</a></li>
          <li><a href="#columns">Columns</a></li>
          <li><a href="#export">Export/RSS</a></li>
          <li><a href="#facetbox">Facet Box</a></li>
          <li><a href="#filter">Filter</a></li>
          <li><a href="#footer">Footer</a></li>
          <li><a href="#globalnav">Global Navigation</a></li>
          <li><a href="#header1">Header1 - Home</a></li>
          <li><a href="#header2">Header2 - Other Than Home</a></li>
          <li><a href="#infopages">Informational Pages Search Result</a></li>
          <li><a href="#pagination">Pagination</a></li>
          <li><a href="#scholworks">Scholarly Works Search Result</a></li>
          <li><a href="#sort">Sort By</a></li>
          <li><a href="#search1">Search 1 - With Tagline</a></li>
          <li><a href="#search2">Search 2 - With Search Controls</a></li>
          <li><a href="#sidebarnav">Sidebar Navigation</a></li>
        </ul>
      </div>
    )
  }
}

module.exports = Home;
