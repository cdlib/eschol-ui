// ##### Journal Grid Component ##### //

import React from 'react'

class JournalGridComp extends React.Component {
  render() {
    return (
      <div className="c-journalgrid">
        <img src="https://escholarship.org/images/homecover_mester.png" alt="Mester journal"/>
        <img src="https://escholarship.org/images/homecover_interactions.png" alt="Interactions journal"/>
        <img src="https://escholarship.org/images/homecover_bpj.jpg" alt="Berkeley Planning Journal"/>
        <img src="https://escholarship.org/images/homecover_fb.png" alt="Frontiers journal"/>
        <img src="https://escholarship.org/images/homecover_jcmrs.png" alt="Critical journal"/>
        <div className="c-journalgrid__all">
          <a href="">View all <strong>68</strong> current journals</a>
        </div>
      </div>
    )
  }
}

module.exports = JournalGridComp;
