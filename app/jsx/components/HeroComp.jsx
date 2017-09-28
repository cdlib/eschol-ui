// ##### Hero Component ##### //

import React from 'react'

class HeroComp extends React.Component {
  render() {
    return (
      <div className="c-hero">
        <h1>Open Access Publications from the University of California</h1>
        <div className="c-hero__campuses">
          <span>UC Davis</span>
          <a href="">Explore all of our campuses</a>
        </div>
      </div>
    )
  }
}

module.exports = HeroComp;
