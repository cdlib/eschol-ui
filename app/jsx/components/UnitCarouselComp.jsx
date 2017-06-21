// ##### Unit Carousel Component ##### //

import React from 'react'
import $ from 'jquery'
import Flickity from 'flickity-imagesloaded'
import dotdotdot from 'jquery.dotdotdot'

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

    /* jquery dotdotdot */
    $('.o-unititem__title, .o-unititem__author').dotdotdot({
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
      <div className="c-unitcarousel">
        <h2 className="c-unitcarousel__heading">Center for Medieval and Renaissance Studies</h2>
        <div className="c-unitcarousel__carousel">
          <div className="c-unitcarousel__item">
            <a href="" className="o-unititem--vert">
              <div className="o-unititem__title">Libero doloremque suscipit perferendis amet nostrum! Nostrum quisquam, tempore voluptatum ea dolor, hic esse adipisci reprehenderit ullam minima distinctio. Vero, molestias non.</div>
              <ul className="o-unititem__author">
                <li>Fung, Joe</li>
                <li>Wu, Abe</li>
                <li>Reed, Laura K</li>
                <li>Smith, Sheryl T</li>
                <li>Barshop, William</li>
                <li>Wong, Jeannette</li>
                <li>Dothager, Matthew</li>
                <li>Lee, Paul</li>
                <li>Wong, Jeannette</li>
              </ul>
              <div className="o-unititem__type--article" aria-label="Item type:">Article</div>
            </a>
          </div>
          <div className="c-unitcarousel__item">
            <a href="" className="o-unititem--horz">
              <div className="o-unititem__title">Sapiente pariatur voluptatibus, quisquam quam libero aspernatur esse dolorem, nisi voluptate accusantium consectetur temporibus maiores quis tempore. Non, architecto eveniet a laudantium.</div>
              <ul className="o-unititem__author">
                <li>Fung, Joe</li>
                <li>Wu, Abe</li>
                <li>Reed, Laura K</li>
                <li>Smith, Sheryl T</li>
                <li>Barshop, William</li>
                <li>Wong, Jeannette</li>
                <li>Dothager, Matthew</li>
                <li>Lee, Paul</li>
                <li>Wong, Jeannette</li>
              </ul>
              <div className="o-unititem__type--multimedia" aria-label="Item type:">Multimedia</div>
            </a>
          </div>
          <div className="c-unitcarousel__item">
            <a href="" className="o-unititem--vert">
              <div className="o-unititem__title">Libero doloremque suscipit perferendis amet nostrum! Nostrum quisquam, tempore voluptatum ea dolor, hic esse adipisci reprehenderit ullam minima distinctio. Vero, molestias non.</div>
              <ul className="o-unititem__author">
                <li>Fung, Joe</li>
                <li>Wu, Abe</li>
                <li>Reed, Laura K</li>
                <li>Smith, Sheryl T</li>
                <li>Barshop, William</li>
                <li>Wong, Jeannette</li>
                <li>Dothager, Matthew</li>
                <li>Lee, Paul</li>
                <li>Wong, Jeannette</li>
              </ul>
              <div className="o-unititem__type--article" aria-label="Item type:">Article</div>
            </a>
          </div>
          <div className="c-unitcarousel__item">
            <a href="" className="o-unititem--horz">
              <div className="o-unititem__title">Sapiente pariatur voluptatibus, quisquam quam libero aspernatur esse dolorem, nisi voluptate accusantium consectetur temporibus maiores quis tempore. Non, architecto eveniet a laudantium.</div>
              <ul className="o-unititem__author">
                <li>Fung, Joe</li>
                <li>Wu, Abe</li>
                <li>Reed, Laura K</li>
                <li>Smith, Sheryl T</li>
                <li>Barshop, William</li>
                <li>Wong, Jeannette</li>
                <li>Dothager, Matthew</li>
                <li>Lee, Paul</li>
                <li>Wong, Jeannette</li>
              </ul>
              <div className="o-unititem__type--multimedia" aria-label="Item type:">Multimedia</div>
            </a>
          </div>
          <div className="c-unitcarousel__item">
            <a href="" className="o-unititem--vert">
              <div className="o-unititem__title">Libero doloremque suscipit perferendis amet nostrum! Nostrum quisquam, tempore voluptatum ea dolor, hic esse adipisci reprehenderit ullam minima distinctio. Vero, molestias non.</div>
              <ul className="o-unititem__author">
                <li>Fung, Joe</li>
                <li>Wu, Abe</li>
                <li>Reed, Laura K</li>
                <li>Smith, Sheryl T</li>
                <li>Barshop, William</li>
                <li>Wong, Jeannette</li>
                <li>Dothager, Matthew</li>
                <li>Lee, Paul</li>
                <li>Wong, Jeannette</li>
              </ul>
              <div className="o-unititem__type--article" aria-label="Item type:">Article</div>
            </a>
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
