// ##### Item Unavailable Objects ##### //

import React from 'react'

class ItemUnavailableObj extends React.Component {
  render() {
    return (
      <div>
        
        <h2>Item Embargoed</h2>
        <div className="o-itemunavailable">
        [object to go here]
        </div>

        <h2>Item Withdrawn</h2>
        <div className="o-itemunavailable">
        [object to go here]
        </div>

      </div>
    )
  }
}

module.exports = ItemUnavailableObj;
