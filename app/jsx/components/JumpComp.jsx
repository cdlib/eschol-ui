// ##### Jump Component ##### //

import React from 'react'

class JumpComp extends React.Component {
  render() {
    return (
      <div className="c-jump">
        <a id="c-jump__label" className="o-textlink__secondary" href="">Article</a>
        <ul className="c-jump__list" aria-labelledby="c-jump__label">
          <li><a className="o-textlink__secondary" href="">Abstract</a></li>
          <li><a className="o-textlink__secondary" href="">Main Content</a></li>
          <li><a className="o-textlink__secondary" href="">References</a></li>
          <li><a className="o-textlink__secondary" href="">Author Response</a></li>
        </ul>
      </div>
    )
  }
}

module.exports = JumpComp;
