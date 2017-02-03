// ##### Share Component ##### //

import React from 'react'

class ShareComp extends React.Component {
  render() {
    return (
      <details className="c-share" open>
        <summary>Share</summary>
        <ul className="c-share__list">
          <li><a className="c-share__email" href="">Email</a></li>
          <li><a className="c-share__facebook" href="">Facebook</a></li>
          <li><a className="c-share__twitter" href="">Twitter</a></li>
        </ul>
      </details>
    )
  }
}

module.exports = ShareComp;
