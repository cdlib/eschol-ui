// ##### Subhead Component ##### //

import React from 'react'

class SubheadComp extends React.Component {
  render() {
    return (
      <div className="c-subhead">
        <div className="c-subhead__campus">
          [campus menu here]
        </div>
        <div className="c-subhead__nav">
          [global nav here]
        </div>
        <div className="c-subhead__deposit">
          [deposit buttons here]
        </div>
        <div className="c-subhead__banner">
          [banner here]
        </div>
      </div>
    )
  }
}

module.exports = SubheadComp;
