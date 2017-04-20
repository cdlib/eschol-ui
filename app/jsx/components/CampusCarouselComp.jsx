// ##### Campus Carousel Component ##### //

import React from 'react'
import $ from 'jquery'
import Flickity from 'flickity-imagesloaded'

class CampusCarouselComp extends React.Component {
  componentDidMount () {
    var carousel = $('.c-campuscarousel')[0];
    var options = {
      cellAlign: 'left',
      contain: true,
      initialIndex: 0,
      imagesLoaded: true
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
      <div className="c-campuscarousel">
        <div className="c-campuscarousel__cell">
          <h2 className="c-campuscarousel__cell-heading">
            UC Berkeley
          </h2>
          <div className="c-campuscarousel__cell-item">
            Item 1
          </div>
          <div className="c-campuscarousel__cell-item">
            Item 2
          </div>
          <div className="c-campuscarousel__cell-item">
            Item 3
          </div>
          <div className="c-campuscarousel__cell-item">
            Item 4
          </div>
        </div>
        <div className="c-campuscarousel__cell">
          <h2 className="c-campuscarousel__cell-heading">
            All eScholarship
          </h2>
          <div className="c-campuscarousel__cell-item">
            Item 1
          </div>
          <div className="c-campuscarousel__cell-item">
            Item 2
          </div>
          <div className="c-campuscarousel__cell-item">
            Item 3
          </div>
          <div className="c-campuscarousel__cell-item">
            Item 4
          </div>
        </div>
      </div>
    )
  }
}

module.exports = CampusCarouselComp;
