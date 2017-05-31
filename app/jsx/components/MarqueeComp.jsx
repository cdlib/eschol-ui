// ##### Marquee Component ##### //

import React from 'react'
import $ from 'jquery'
import dotdotdot from 'jquery.dotdotdot'
import Flickity from 'flickity-imagesloaded'

class CarouselComp extends React.Component {
  componentDidMount () {
    $('.c-marquee__sidebar').dotdotdot({
      watch: 'window',
      after: '.c-marquee__sidebar-more-link'
    });
    var carousel = $('.c-marquee__carousel')[0];
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
      <div className="c-marquee">
        <div className="c-marquee__carousel">
          <div className="c-marquee__carousel-cell" style={{backgroundImage: "url('images/temp_new-horizons-data.png')"}}>
            <h2>Carousel Cell Title 1</h2>
            <p>Magnam praesentium sint, ducimus aspernatur architecto, deserunt ipsa veniam quia nihil, doloribus, laudantium a ad error tenetur fuga consequuntur laboriosam omnis ipsam.</p>
            <a href="">More&hellip;</a>
          </div>
          <div className="c-marquee__carousel-cell">
            <h2>Carousel Cell Title 2</h2>
            <p>Iure quod itaque maiores optio eveniet assumenda omnis, similique. Possimus, expedita, ea?</p>
            <a href="">More&hellip;</a>
          </div>
          <div className="c-marquee__carousel-cell">
            <h2>Carousel Cell Title 3</h2>
            <p>Obcaecati consequatur quaerat eaque, beatae eligendi possimus, repudiandae magni quas dolores, sit voluptatem iusto laborum. Incidunt fuga sed dicta nisi voluptates eaque, beatae numquam officia animi, vel.</p>
            <a href="">More&hellip;</a>
          </div>
        </div>
        <aside className="c-marquee__sidebar">
          <section className="o-columnbox2">
            <header>
              <h2>About</h2>
            </header>
            <p>Ex voluptatum debitis natus ab provident ratione, laborum voluptas totam officia consequatur doloremque quas itaque quibusdam veniam. Maiores fugiat fugit libero consequatur, consectetur impedit explicabo, ipsum repellendus incidunt sapiente expedita optio commodi ratione, iure beatae dolor! Vel eligendi, amet, veniam et unde optio harum, dolorum dicta, ipsum illum voluptatum autem sit cumque! <a className="c-marquee__sidebar-more-link" href="">More</a>
            </p>
          </section>
        </aside>
      </div>
    )
  }
}

module.exports = CarouselComp;
