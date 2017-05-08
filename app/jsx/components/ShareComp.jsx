// ##### Share Component ##### //

import React from 'react'

class ShareComp extends React.Component {
  render() {
    return (
      <details className="c-share">
        <summary><span>Share</span></summary>
        <div className="c-share__list">
          <a className="c-share__email" href="">Email</a>
          <a className="c-share__facebook" href="">Facebook</a>
          <a className="c-share__twitter" href="">Twitter</a>
        </div>
      </details>
    )
  }
}

module.exports = ShareComp;
