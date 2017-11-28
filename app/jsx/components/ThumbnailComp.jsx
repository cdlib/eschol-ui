// ##### Thumbnail Component ##### //

import React from 'react'
import lozad from 'lozad'

class ThumbnailComp extends React.Component {
  constructor() {
    super();
    this.observer = lozad('.c-thumbnail');
  }

  componentDidMount() {
    this.observer.observe();
  }

  /* img 'src' attribute below gets added dynamically upon successful image load and will have the same value as 'data-src' */

  render() {
    return (
      <img className="c-thumbnail" data-src="https://escholarship.org/images/homecover_fb.png" alt="article cover" />
    )
  }
}

module.exports = ThumbnailComp;
