// ##### Journal Grid Component ##### //

import React from 'react'
import LazyImageComp from '../components/LazyImageComp.jsx'

class JournalGridComp extends React.Component {
  render() {
    return (
      <div className="c-journalgrid">
        <a href="">
          <LazyImageComp
            src="https://escholarship.org/images/homecover_mester.png"
            alt="Mester journal" />
        </a>
        <a href="">
          <LazyImageComp
            src="https://escholarship.org/images/homecover_interactions.png"
            alt="Interactions journal" />
        </a>
        <a href="">
          <LazyImageComp
            src="https://escholarship.org/images/homecover_bpj.jpg"
            alt="Berkeley Planning Journal" />
        </a>
        <a href="">
          <LazyImageComp
            src="https://escholarship.org/images/homecover_fb.png"
            alt="Frontiers journal" />
        </a>
        <a href="">
          <LazyImageComp
            src="https://escholarship.org/images/homecover_jcmrs.png"
            alt="Critical journal" />
        </a>
        <div className="c-journalgrid__all">
          <a href="">View all <strong>68</strong> current journals</a>
        </div>
      </div>
    )
  }
}

module.exports = JournalGridComp;
