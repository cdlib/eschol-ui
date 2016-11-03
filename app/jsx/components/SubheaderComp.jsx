// ##### Subheader Component ##### //

import React from 'react'

class SubheaderComp extends React.Component {
  render() {
    return (
      <div className="c-subheader">
        <div className="c-subheader__campus">
          [campus menu here]
        </div>
        <div className="c-subheader__nav">
          [global nav here]
        </div>
        <div className="c-subheader__deposit">
          [deposit buttons here]
        </div>
        <div className="c-subheader__banner">
          [banner here]
        </div>
      </div>
    )
  }
}

module.exports = SubheaderComp;
