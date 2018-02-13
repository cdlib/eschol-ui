// ##### Published Location Component ##### //

import React from 'react'
import MEDIA_PATH from '../../js/MediaPath.js'

class PubLocationComp extends React.Component {
  render() {
    return (
      <div className="c-publocation">
        <div className="c-publocation__heading">
          <h2>Published Web Location</h2>
        </div>
        <a className="c-publocation__link" href="">http://www.ieee-security.org/gdgfhnhlgkbdfvsasdfhkmhfxzfbcvxbdjbkgbgcbnbvnvbdvzfsgfdbdsgdvfshfbsdghnbdvsfhbdvfbdv.PDF</a>
        <a href="" className="c-publocation__license">
          <img src={MEDIA_PATH + 'cc-by-nc-large.svg'} alt="creative commons attribution-noncommercial 4.0 international public license"/>
        </a>
      </div>
    )
  }
}

module.exports = PubLocationComp;
