// ##### Statistics Carousel Component ##### //

import React from 'react'
import $ from 'jquery'
import Flickity from 'flickity-imagesloaded'

class StatCarouselComp extends React.Component {
  componentDidMount () {
    var carousel = $('.c-statcarousel')[0];
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
      <div className="c-statcarousel">
        <div className="c-statcarousel__section">
          <h2 className="c-statcarousel__cell-heading">
            UC Berkeley
          </h2>
          <div className="o-stat--item c-statcarousel__cell">
            <b>24,844</b> Items
          </div>
          <div className="o-stat--view c-statcarousel__cell">
            <b>380,941</b> Views
          </div>
          <div className="o-stat--passed c-statcarousel__cell">
            <b>6,532</b> Items since UC OA Policy passed
          </div>
          <div className="o-stat--journals c-statcarousel__cell">
            <b>31</b> eScholarship Journals
          </div>
          <div className="o-stat--units c-statcarousel__cell">
            <b>119</b> Research Units
          </div>
        </div>
        <div className="c-statcarousel__section">
          <h2 className="c-statcarousel__cell-heading">
            All eScholarship
          </h2>
          <div className="o-stat--item c-statcarousel__cell">
            <b>127,057</b> Items
          </div>
          <div className="o-stat--view c-statcarousel__cell">
            <b>35,489,231</b> Views
          </div>
          <div className="o-stat--passed c-statcarousel__cell">
            <b>31,750</b> Items since UC OA Policy passed
          </div>
          <div className="o-stat--journals c-statcarousel__cell">
            <b>91</b> eScholarship Journals
          </div>
          <div className="o-stat--units c-statcarousel__cell">
            <b>500</b> Research Units
          </div>
        </div>
      </div>
    )
  }
}

module.exports = StatCarouselComp;
