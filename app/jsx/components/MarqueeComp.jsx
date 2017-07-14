// ##### Marquee Component ##### //

import React from 'react'
import $ from 'jquery'
import Flickity from 'flickity-imagesloaded'

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
          <div className="c-marquee__carousel-cell" style={{backgroundImage: "url('https://static.pexels.com/photos/27714/pexels-photo-27714.jpg')"}}>
            <h2>Carousel Cell Title 1</h2>
            <p>Totam iusto vero, omnis ut modi, possimus fugiat consequuntur incidunt eius delectus, enim commodi dicta itaque! Dolores quis natus itaque delectus fuga. Id debitis, corporis, suscipit placeat architecto doloremque reprehenderit deleniti in iure assumenda cum dignissimos sit! Exercitationem reiciendis quas voluptatibus tempora.</p>
          </div>
          <div className="c-marquee__carousel-cell" style={{backgroundImage: "url('https://static.pexels.com/photos/40797/wild-flowers-flowers-plant-macro-40797.jpeg')"}}>
            <h2>Carousel Cell Title 2</h2>
            <p>Iure quod itaque maiores optio eveniet assumenda omnis, similique. Possimus, expedita, ea?</p>
          </div>
          <div className="c-marquee__carousel-cell" style={{backgroundImage: "url('http://www.almanac.com/sites/default/files/birth_month_flowers-primary-1920x1280px_pixabay.jpg')"}}>
            <h2>Carousel Cell Title 3</h2>
            <p>Obcaecati consequatur quaerat eaque, beatae eligendi possimus, repudiandae magni quas dolores, sit voluptatem iusto laborum. Incidunt fuga sed dicta nisi voluptates eaque, beatae numquam officia animi, vel.</p>
          </div>
        </div>
        <aside className="c-marquee__sidebar">
          <section className="o-columnbox2">
            <header>
              <h2>About</h2>
            </header>
            <div className="c-marquee__sidebar-truncate" ref={element => this.element = element}>
              <p>Doloribus reiciendis quasi neque necessitatibus fugiat natus pariatur impedit iure temporibus rerum totam aspernatur repudiandae dolor!
              </p>
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
