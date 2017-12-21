// ##### Unit Carousel Component ##### //

import React from 'react'
import $ from 'jquery'

class UnitCarouselComp extends React.Component {
  scrollDown = ()=> {
    this.scrollBox.scrollBy({ top: 100, behavior: 'smooth' });
    this.scrollBox.focus()
  }
  scrollUp = ()=> {
    this.scrollBox.scrollBy({ top: -100, behavior: 'smooth' });
    this.scrollBox.focus()
  }
  render() {
    return (
      <div className="o-itemcarousel">
        <h2 className="o-itemcarousel__heading"><a href="">Center for Medieval and Renaissance Studies</a></h2>
        <div className="c-unitcarousel o-itemcarousel__carousel">
          <button className="c-unitcarousel__button-up" onClick={this.scrollUp}>Scroll Up</button>
          <div className="c-unitcarousel__scrollbox" ref={el => this.scrollBox = el} tabIndex="-1">
            <div className="c-unitcarousel__item">
              <h3><a href="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>
              </h3>
              <div className="c-unitcarousel__item-authorlist">authorlist comp goes here
              </div>
              <div className="c-unitcarousel__item-type--article">Article</div>
            </div>
            <div className="c-unitcarousel__item">
              <h3><a href="">Quia veritatis est, eum facilis expedita consequatur consequuntur suscipit obcaecati!</a>
              </h3>
              <div className="c-unitcarousel__item-authorlist">authorlist comp goes here
              </div>
              <div className="c-unitcarousel__item-type--book">Book</div>
            </div>
            <div className="c-unitcarousel__item">
              <h3><a href="">Pariatur cupiditate rerum quidem, omnis et inventore repellendus velit autem.</a>
              </h3>
              <div className="c-unitcarousel__item-authorlist">authorlist comp goes here
              </div>
              <div className="c-unitcarousel__item-type--thesis">Thesis</div>
            </div>
            <div className="c-unitcarousel__item">
              <h3><a href="">Quidem blanditiis voluptatum pariatur earum doloremque similique ab cumque sit.</a>
              </h3>
              <div className="c-unitcarousel__item-authorlist">authorlist comp goes here
              </div>
              <div className="c-unitcarousel__item-type--multimedia">Multimedia</div>
            </div>
            <div className="c-unitcarousel__item">
              <h3><a href="">Ratione ipsa vero aperiam, error quis voluptatibus rerum laboriosam, doloremque.</a>
              </h3>
              <div className="c-unitcarousel__item-authorlist">authorlist comp goes here
              </div>
              <div className="c-unitcarousel__item-type--article">Article</div>
            </div>
            <div className="c-unitcarousel__item">
              <h3><a href="">Sunt eos praesentium, voluptates veritatis autem hic eligendi officia odit!</a>
              </h3>
              <div className="c-unitcarousel__item-authorlist">authorlist comp goes here
              </div>
              <div className="c-unitcarousel__item-type--book">Book</div>
            </div>
            <div className="c-unitcarousel__item">
              <h3><a href="">Facere, quaerat, consequuntur.</a>
              </h3>
              <div className="c-unitcarousel__item-authorlist">authorlist comp goes here
              </div>
              <div className="c-unitcarousel__item-type--thesis">Thesis</div>
            </div>
            <div className="c-unitcarousel__item">
              <h3><a href="">Esse, quis fugit similique officiis earum molestias vitae dolores odit.</a>
              </h3>
              <div className="c-unitcarousel__item-authorlist">authorlist comp goes here
              </div>
              <div className="c-unitcarousel__item-type--multimedia">Multimedia</div>
            </div>
            <div className="c-unitcarousel__item">
              <h3><a href="">Rerum ad itaque rem culpa maxime, animi facilis incidunt quidem!</a>
              </h3>
              <div className="c-unitcarousel__item-authorlist">authorlist comp goes here
              </div>
              <div className="c-unitcarousel__item-type--article">Article</div>
            </div>
            <div className="c-unitcarousel__item">
              <h3><a href="">Consectetur nostrum voluptatibus soluta, magnam velit nobis tenetur tempore ipsum!</a>
              </h3>
              <div className="c-unitcarousel__item-authorlist">authorlist comp goes here
              </div>
              <div className="c-unitcarousel__item-type--book">Book</div>
            </div>
          </div>
          <button className="c-unitcarousel__button-down" onClick={this.scrollDown}>Scroll Down</button>
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
