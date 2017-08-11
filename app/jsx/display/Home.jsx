// ##### UI Library Index ##### //

import React from 'react'

class Home extends React.Component {
  render() {
    return (
      <div className="ui-library__list">
        <h2>Layouts</h2>
        <ul>
          <li>Home
            <ul>
              <li><a href="#browsecampuses">Browse Campuses</a></li>
              <li><a href="#browsejournals">Browse Journals</a></li>
              <li><a href="#error404">Error 404</a></li>
              <li><a href="#searchlayout">Search</a></li>
              <li><a href="#about">Static</a></li>
            </ul>
          </li>
          <li><a href="#campus">Campus</a>
            <ul>
              <li><a href="#browsedepartments">Browse Departments (Campus-level)</a></li>
            </ul>
          </li>
          <li><a href="#journalsplashy">Journal (Splashy)</a>
            <ul>
              <li><a href="#journalsimple">Journal (Simple)</a></li>
              <li><a href="#journalitemhtml">Journal Item (HTML)</a></li>
              <li><a href="#journalitemmultimedia">Journal Item (Multimedia)</a></li>
              <li><a href="#journalitempdf">Journal Item (PDF)</a></li>
            </ul>
          </li>
          <li><a href="#unitsimple">Unit (Simple)</a>
            <ul>
              <li><a href="#seriesitemembargoed">Series Item (Embargoed)</a></li>
              <li><a href="#seriesitemurl">Series Item (URL)</a></li>
              <li><a href="#seriesitemwithdrawn">Series Item (Withdrawn)</a></li>
            </ul>
          </li>
        </ul>
        <h2>Objects</h2>
        <ul>
          <li><a href="#alert">Alterts</a></li>
          <li><a href="#button">Buttons</a></li>
          <li><a href="#columnbox">Column Boxes</a></li>
          <li><a href="#customselector">Custom Selectors</a></li>
          <li><a href="#dividecontent">Divide Content into Balanced Columms</a></li>
          <li><a href="#download">Download</a></li>
          <li><a href="#heading">Headings</a></li>
          <li><a href="#imagecontent">Image Content</a></li>
          <li><a href="#input">Inputs</a></li>
          <li><a href="#itemunavailable">Item Unavailable</a></li>
          <li><a href="#journal">Journals</a></li>
          <li><a href="#mediafeature">Media Feature</a></li>
          <li><a href="#mediafile">Media Files</a></li>
          <li><a href="#textlist">Text Lists</a></li>
          <li><a href="#textlink">Text Links</a></li>
          <li><a href="#stats">Statistics</a></li>
          <li><a href="#unititem">Unit Items</a></li>
        </ul>
        <h2>Components</h2>
        <ul>
          <li><a href="#authorlist">Author List</a></li>
          <li><a href="#breadcrumb">Breadcrumb Navigation</a></li>
          <li><a href="#campussearch">Campus Search</a></li>
          <li><a href="#campusselector">Campus Selector</a> (replaced by Custom Selector object above)</li>
          <li><a href="#checkbox">Checkbox</a></li>
          <li><a href="#columns">Columns Layout</a></li>
          <li><a href="#datatable">Data Table</a></li>
          <li><a href="#depositwizard">Deposit Wizard</a></li>
          <li><a href="#descriptionlist">Description List</a></li>
          <li><a href="#export">Export/RSS</a></li>
          <li><a href="#facetbox">Facet Box</a></li>
          <li><a href="#filter">Filter</a></li>
          <li><a href="#footer">Footer</a></li>
          <li><a href="#header1">Header 1 - Home</a></li>
          <li><a href="#header2">Header 2 - Other Than Home</a></li>
          <li><a href="#heatmap">Heat Map</a></li>
          <li><a href="#infopages">Informational Pages</a></li>
          <li><a href="#itemactions">Item Actions</a></li>
          <li><a href="#journalcarousel">Journal Carousel</a></li>
          <li><a href="#journalinfo">Journal Information</a></li>
          <li><a href="#jump">Jump</a></li>
          <li><a href="#language">language</a></li>
          <li><a href="#marquee">Marquee</a></li>
          <li><a href="#mediafilegrid">Media File Grid</a></li>
          <li><a href="#modal">Modal</a></li>
          <li><a href="#medialist">Media List</a></li>
          <li><a href="#nav">Navigation</a></li>
          <li><a href="#navbar">Nav Bar</a></li>
          <li><a href="#pagination">Pagination</a></li>
          <li><a href="#pdfview">PDF View</a></li>
          <li><a href="#pub">Publication</a></li>
          <li><a href="#pubdata">Published Data</a></li>
          <li><a href="#publocation">Published Location</a></li>
          <li><a href="#pubpreview">Publication Preview</a></li>
          <li><a href="#pubyear">Publication Year Facet</a></li>
          <li><a href="#scholworks">Scholarly Works Search Result</a></li>
          <li><a href="#search1">Search 1 - With Tagline</a></li>
          <li><a href="#search2">Search 2 - With Search Controls</a></li>
          <li><a href="#servererror">Server Error</a></li>
          <li><a href="#share">Share</a></li>
          <li><a href="#sidebarnav">Sidebar Navigation</a></li>
          <li><a href="#skipnav">Skip Navigation</a></li>
          <li><a href="#socialicons">Social Icons</a></li>
          <li><a href="#sort">Sort By</a></li>
          <li><a href="#sortpagination">Sort Pagination</a></li>
          <li><a href="#statcarousel">Statistics Carousel</a></li>
          <li><a href="#subheader">Subheader</a></li>
          <li><a href="#tabs">Tabs (stable)</a></li>
          <li><a href="#tabs2">Tabs v.2 (experimental only)</a></li>
          <li><a href="#tabmain">Tab - Main</a></li>
          <li><a href="#tabsupplemental">Tab - Supplemental Material</a></li>
          <li><a href="#tabmetrics">Tab - Metrics</a></li>
          <li><a href="#tabauthor">Tab - Author & Article</a></li>
          <li><a href="#tabcomments">Tab - Comments</a></li>
          <li><a href="#testmessage">Test Message</a></li>
          <li><a href="#togglecontent">Toggle Content</a></li>
          <li><a href="#togglelist">Toggle List</a></li>
          <li><a href="#unitcarousel">Unit Carousel</a></li>
          <li><a href="#unitlist">Unit List</a></li>
          <li><a href="#unitpub">Unit Publication</a></li>
          <li><a href="#viewexternal">View on External Site</a></li>
          <li><a href="#well">Well for Content</a></li>
        </ul>
      </div>
    )
  }
}

module.exports = Home;
