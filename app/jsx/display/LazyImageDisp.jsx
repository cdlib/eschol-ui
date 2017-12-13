// ##### Lazy Image Display ##### //

import React from 'react'
import LazyImageComp from '../components/LazyImageComp.jsx'

class LazyImageDisp extends React.Component {
  render() {
    return (
      <div>
        <LazyImageComp
          src="http://placehold.it/150x200?text=Lazy Image"
          alt="a lazy loaded image" />
      </div>
    )
  }
}

module.exports = LazyImageDisp;
