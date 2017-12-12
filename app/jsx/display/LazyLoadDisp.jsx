// ##### Lazy Load Display ##### //

import React from 'react'
import LazyLoadComp from '../components/LazyLoadComp.jsx'

class LazyLoadDisp extends React.Component {
  render() {
    return (
      <div>
        <LazyLoadComp
          src="http://placehold.it/150x200?text=Thumbnail"
          alt="journal cover" />
      </div>
    )
  }
}

module.exports = LazyLoadDisp;
