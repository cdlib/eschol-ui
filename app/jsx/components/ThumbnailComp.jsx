// ##### Thumbnail Component ##### //

import React from 'react'
import lozad from 'lozad'

class ThumbnailComp extends React.Component {
  constructor() {
    super();
    this.observer = lozad();
  }

  componentDidMount() {
    this.observer.observe();
  }

  render() {
    return (
      <div className="c-thumbnail">
        <img className="lozad" data-src="https://escholarship.org/images/homecover_fb.png" alt="article" />
      </div>
    )
  }
}

module.exports = ThumbnailComp;
