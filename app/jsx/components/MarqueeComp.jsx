// ##### Marquee Component ##### //

import React from 'react'
import $ from 'jquery'
import Flickity from 'flickity-imagesloaded'
import faker from 'faker/locale/en'

// Load dotdotdot in browser but not server:
if (!(typeof document === "undefined")) {
  const dotdotdot = require('jquery.dotdotdot')
}

class CarouselComp extends React.Component {
  componentDidMount () {
    // Dotdotdot 1 for carousel:
    $('.c-marquee__carousel-cell').dotdotdot({
      watch: 'window',
    });

    // Dotdotdot 2 with truncation for sidebar:
    $(this.element).dotdotdot({
      watch: 'window',
      after: '.c-marquee__sidebar-more',
      callback: ()=> $(this.element).find(".c-marquee__sidebar-more").click(this.destroydotdotdot)
    });
    setTimeout(()=> $(this.element).trigger('update'), 0) // removes 'more' link upon page load if less than truncation threshold

    // Flickity:
    var carousel = $('.c-marquee__carousel')[0];
    var options = {
      cellAlign: 'left',
      contain: true,
      initialIndex: 0,
      imagesLoaded: true
    }
    this.flkty = new Flickity(carousel, options);
  }
  destroydotdotdot = event => {
    $(this.element).trigger('destroy')
    $(this.element).removeClass("c-marquee__sidebar-truncate")
  }
  componentWillUnmount() {
    if (this.flkty) {
      this.flkty.destroy();
    }
  }
  render() {
    return (
      <div className="c-marquee">
        <div className="c-marquee__carousel">
          <div className="c-marquee__carousel-cell" style={{backgroundImage: "url('https://flowerwallpaper.us/wp-content/uploads/Purple-Crocus-Flowers.jpg')"}}>
            <h1>Carousel Cell Title 1</h1>
            <p>{faker.fake("{{lorem.paragraphs}}")}</p>
          </div>
          <div className="c-marquee__carousel-cell" style={{backgroundImage: "url('https://static.pexels.com/photos/40797/wild-flowers-flowers-plant-macro-40797.jpeg')"}}>
            <h1>Carousel Cell Title 2</h1>
            <p>{faker.fake("{{lorem.paragraph}}")}</p>
          </div>
          <div className="c-marquee__carousel-cell" style={{backgroundImage: "url('http://www.almanac.com/sites/default/files/birth_month_flowers-primary-1920x1280px_pixabay.jpg')"}}>
            <h1>Carousel Cell Title 3</h1>
            <p>{faker.fake("{{lorem.paragraphs}}")}</p>
          </div>
        </div>
        <aside className="c-marquee__sidebar">
          <section className="o-columnbox2">
            <header>
              <h2>About</h2>
            </header>
            <div className="c-marquee__sidebar-truncate" ref={element => this.element = element}>
              <p>{faker.fake("{{lorem.paragraph}}")}</p>
              <p>Commodi, excepturi, nam? Perferendis qui amet, dolore voluptas tempora sequi ipsum animi vero asperiores doloribus beatae repudiandae porro. Perferendis, provident quasi. Repellat amet odio aliquam, voluptates quo, minima veritatis. Repellendus quod blanditiis, aliquid molestiae aperiam, modi fugiat esse tempore. <button className="c-marquee__sidebar-more">More</button>
              </p>
            </div>
          </section>
        </aside>
      </div>
    )
  }
}

module.exports = CarouselComp;
