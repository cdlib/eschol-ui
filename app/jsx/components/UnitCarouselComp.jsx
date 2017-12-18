// ##### Unit Carousel Component ##### //

import React from 'react'
import $ from 'jquery'

class UnitCarouselComp extends React.Component {
  componentDidMount () {
    
  }

  render() {
    return (
      <div className="o-itemcarousel">
        <h2 className="o-itemcarousel__heading"><a href="">Center for Medieval and Renaissance Studies</a></h2>
        <div className="c-unitcarousel o-itemcarousel__carousel">
          [Unit Carousel to go here]
        </div>
        <div className="o-stat--item o-itemcarousel__stats-item">
          <a href="">1,000</a>Items
        </div>
        <div className="o-stat--view o-itemcarousel__stats-view">
          <b>100,000</b>Views
        </div>
      </div>
    )
  }
}

module.exports = UnitCarouselComp;
