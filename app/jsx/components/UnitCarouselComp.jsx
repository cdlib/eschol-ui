// ##### Unit Carousel Component ##### //

import React from 'react'
import $ from 'jquery'
import Flickity from 'flickity-imagesloaded'

class UnitCarouselComp extends React.Component {
  componentDidMount () {
    var carousel = $('.c-unitcarousel__carousel')[0];
    var options = {
      cellAlign: 'left',
      contain: true,
      initialIndex: 0,
      pageDots: false
    }
    this.flkty = new Flickity(carousel, options);
  }
  componentWillUnmount() {
    if (this.flkty) {
      this.flkty.destroy();
    }
  }
  render() {
    return (
      <div className="c-unitcarousel">
        <h2 className="c-unitcarousel__heading">Center for Medieval and Renaissance Studies</h2>
        <div className="c-unitcarousel__carousel">
          <div className="c-unitcarousel__item">
            Item 1
          </div>
          <div className="c-unitcarousel__item">
            Item 2
          </div>
          <div className="c-unitcarousel__item">
            Item 3
          </div>
          <div className="c-unitcarousel__item">
            Item 4
          </div>
          <div className="c-unitcarousel__item">
            Item 5
          </div>
        </div>
        <div className="o-stat--item c-unitcarousel__stats-item">
          <b>1,000</b>Items
        </div>
        <div className="o-stat--view c-unitcarousel__stats-view">
          <b>100,000</b>Views
        </div>
      </div>
    )
  }
}

module.exports = UnitCarouselComp;
