// ##### Tree Object ##### //

import React from 'react'

class TreeObj extends React.Component {
  render() {
    return (
      <div className="o-tree">
        <a id="o-tree__label" className="o-textlink__secondary" href="">Article</a>
        <ul className="o-tree__list" aria-labelledby="o-tree__label">
          <li><a className="o-textlink__secondary" href="">Abstract</a></li>
          <li><a className="o-textlink__secondary" href="">Main Content</a></li>
          <li><a className="o-textlink__secondary" href="">References</a></li>
          <li><a className="o-textlink__secondary" href="">Author Response</a></li>
        </ul>
      </div>
    )
  }
}

module.exports = TreeObj;
