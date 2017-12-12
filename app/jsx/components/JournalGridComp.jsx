// ##### Journal Grid Component ##### //

import React from 'react'
import LazyLoadComp from '../components/LazyLoadComp.jsx'

class JournalGridComp extends React.Component {
  render() {
    return (
      <div className="c-journalgrid">
        <a href="">
          <LazyLoadComp
            src="https://escholarship.org/images/homecover_mester.png"
            alt="Mester journal" />
        </a>
        <a href="">
          <LazyLoadComp
            src="https://escholarship.org/images/homecover_interactions.png"
            alt="Interactions journal" />
        </a>
        <a href="">
          <LazyLoadComp
            src="https://escholarship.org/images/homecover_bpj.jpg"
            alt="Berkeley Planning Journal" />
        </a>
        <a href="">
          <LazyLoadComp
            src="https://escholarship.org/images/homecover_fb.png"
            alt="Frontiers journal" />
        </a>
        <a href="">
          <LazyLoadComp
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
