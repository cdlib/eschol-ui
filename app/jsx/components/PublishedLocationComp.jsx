// ##### Published Location Component ##### //

import React from 'react'

class PublishedLocationComp extends React.Component {
  render() {
    return (
      <div className="c-publishedlocation">
        <div className="c-publishedlocation__heading">
          <h2>Published Web Location</h2>
        </div>
        <a className="c-publishedlocation__link" href="">http://www.ieee-security.org/gdgfhnhlgkbdfvsasdfhkmhfxzfbcvxbdjbkgbgcbnbvnvbdvzfsgfdbdsgdvfshfbsdghnbdvsfhbdvfbdv.PDF</a>
        <a href="" className="c-publishedlocation__license">
          <img src="images/icon_cc-by-nc.svg" alt=""/>
        </a>
      </div>
    )
  }
}

module.exports = PublishedLocationComp;
