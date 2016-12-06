// ##### Carousel Component ##### //

import React from 'react'
import Flickity from 'flickity'

class CarouselComp extends React.Component {
  render() {
    return (
      <div className="c-carousel">
        <section className="c-carousel__textblock o-columnbox4">
          <header>
            <h2 className="o-columnbox2__heading">About</h2>
          </header>
          <p>Quo dolores unde alias, distinctio rem reprehenderit adipisci officiis eum facilis sunt, vero obcaecati qui porro, sed mollitia consequuntur, aperiam quaerat. Excepturi placeat iure aperiam necessitatibus repellendus veniam iste, omnis.
          </p>
        </section>
        <div className="c-carousel__object" data-flickity='{ "cellAlign": "left", "contain": true }'>
          <img src="http://placehold.it/300x150?text=Image" alt="" className="c-columndivide__img"/>
          <img src="http://placehold.it/300x150?text=Image" alt="" className="c-columndivide__img"/>
          <img src="http://placehold.it/300x150?text=Image" alt="" className="c-columndivide__img"/>
          <img src="http://placehold.it/300x150?text=Image" alt="" className="c-columndivide__img"/>
          <img src="http://placehold.it/300x150?text=Image" alt="" className="c-columndivide__img"/>
        </div>
      </div>
    )
  }
}

module.exports = CarouselComp;
