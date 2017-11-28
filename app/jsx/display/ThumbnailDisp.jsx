// ##### Thumbnail Display ##### //

import React from 'react'
import ThumbnailComp from '../components/ThumbnailComp.jsx'

class ThumbnailDisp extends React.Component {
  render() {
    return (
      <div>
        <ThumbnailComp
          src="http://placehold.it/150x200?text=Thumbnail"
          alt="journal cover" />
      </div>
    )
  }
}

module.exports = ThumbnailDisp;
