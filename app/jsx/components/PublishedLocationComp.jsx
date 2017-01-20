// ##### Published Location Component ##### //

import React from 'react'

class PublishedLocationComp extends React.Component {
  render() {
    return (
      <div className="c-publishedlocation">
        <div className="c-publishedlocation__location">
          <p><a className="o-textlink__secondary" href="">Published Web Location</a></p>
          <p>No data is associated with this publication.</p>
        </div>
        <a href="" className="c-publishedlocation__license">
          <img src="../images/icon_cc-by-nc.svg" alt=""/>
        </a>
      </div>
    )
  }
}

module.exports = PublishedLocationComp;
