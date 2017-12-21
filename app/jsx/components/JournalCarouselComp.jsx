// ##### Journal Carousel Component ##### //

import React from 'react'
import $ from 'jquery'
import Flickity from 'flickity-imagesloaded'
import dotdotdot from 'jquery.dotdotdot'

class UnitCarouselComp extends React.Component {
  componentDidMount () {
    var carousel = $('.c-journalcarousel')[0];
    var options = {
      cellAlign: 'left',
      initialIndex: 0,
      pageDots: false,
      imagesLoaded: true,
      percentPosition: false, // px instead of % cells
    }
    this.flkty = new Flickity(carousel, options);

    /* jquery dotdotdot */
    $('.o-journal2 figcaption').dotdotdot({
      watch: 'window'
    });
  }
  componentWillUnmount() {
    if (this.flkty) {
      this.flkty.destroy();
    }
  }
  render() {
    return (
      <div className="o-itemcarousel">
        <h2 className="o-itemcarousel__heading"><a href="">UC Berkeley Journals</a></h2>
        <div className="c-journalcarousel o-itemcarousel__carousel">
          <div className="o-itemcarousel__item">
            <a href="" className="o-journal2">
              <figure>
                <img src="https://escholarship.org/images/temp_article.png" alt=""/>
                <figcaption>The Proceedings of the UCLA Department of Spanish and Portuguese Graduate Conference</figcaption>
              </figure>
            </a>
          </div>
          <div className="o-itemcarousel__item">
            <a href="" className="o-journal2">
              <figure>
                <img src="https://escholarship.org/images/temp_article.png" alt=""/>
                <figcaption>streetnotes</figcaption>
              </figure>
            </a>
          </div>
          <div className="o-itemcarousel__item">
            <a href="" className="o-journal2">
              <figure>
                <img src="https://escholarship.org/images/temp_article.png" alt=""/>
                <figcaption>Maiores Corporis Repellendus Maxime</figcaption>
              </figure>
            </a>
          </div>
          <div className="o-itemcarousel__item">
            <a href="" className="o-journal2">
              <figure>
                <img src="https://escholarship.org/images/temp_article.png" alt=""/>
                <figcaption>The Proceedings of the UCLA Department of Spanish and Portuguese Graduate Conference</figcaption>
              </figure>
            </a>
          </div>
          <div className="o-itemcarousel__item">
            <a href="" className="o-journal2">
              <figure>
                <img src="https://escholarship.org/images/temp_article.png" alt=""/>
                <figcaption>Western State Budget Reports</figcaption>
              </figure>
            </a>
          </div>
          <div className="o-itemcarousel__item">
            <a href="" className="o-journal2">
              <figure>
                <img src="https://escholarship.org/images/temp_article.png" alt=""/>
                <figcaption>Race and Yoga</figcaption>
              </figure>
            </a>
          </div>
          <div className="o-itemcarousel__item">
            <a href="" className="o-journal2">
              <figure>
                <img src="https://escholarship.org/images/temp_article.png" alt=""/>
                <figcaption>California Italian Studies</figcaption>
              </figure>
            </a>
          </div>
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
