// ##### Journal Objects ##### //

import React from 'react'

class JournalObj extends React.Component {
  render() {
    return (
      <div>
        
        <h2>Featured Journal</h2>
        <a href="" className="o-journal1">
          <figure>
            <img src="http://escholarship.org/issueCovers/uclalaw_cllr/34_01_cover.png" alt=""/>
            <figcaption>Chicana-Latina Law Review</figcaption>
          </figure>
        </a>

        <h2>Journal Item</h2>
        <a href="" className="o-journal2">
          <figure>
            <img src="http://escholarship.org/issueCovers/jmie_sfews/15_01_cover.png" alt=""/>
            <figcaption>San Francisco Estuary & Watershed Science</figcaption>
          </figure>
        </a>

      </div>
    )
  }
}

module.exports = JournalObj;
