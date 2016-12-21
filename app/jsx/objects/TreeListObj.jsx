// ##### Tree List Object ##### //

import React from 'react'

class TreeListObj extends React.Component {
  render() {
    return (
      <div className="o-treelist">
        <a id="o-treelist__label" className="o-textlink__secondary" href="">Article</a>
        <ul className="o-treelist__list" aria-labelledby="o-treelist__label">
          <li><a className="o-textlink__secondary" href="">Abstract</a></li>
          <li><a className="o-textlink__secondary" href="">Main Content</a></li>
          <li><a className="o-textlink__secondary" href="">References</a></li>
          <li><a className="o-textlink__secondary" href="">Author Response</a></li>
        </ul>
      </div>
    )
  }
}

module.exports = TreeListObj;
