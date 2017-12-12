// ##### Lazy Load Display ##### //

import React from 'react'
import LazyLoadComp from '../components/LazyLoadComp.jsx'

class LazyLoadDisp extends React.Component {
  render() {
    return (
      <div>
        <LazyLoadComp
          src="http://placehold.it/150x200?text=Lazy Load"
          alt="a lazy loaded image" />
      </div>
    )
  }
}

module.exports = LazyLoadDisp;
