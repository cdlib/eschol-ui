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
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h3>
              <div className="c-unitcarousel__item-authorlist">authorlist comp goes here
              </div>
              <div className="c-unitcarousel__item-type">item type goes here</div>
            </div>
            <div className="c-unitcarousel__item">
              <h3>Quia veritatis est, eum facilis expedita consequatur consequuntur suscipit obcaecati!
              </h3>
              <div className="c-unitcarousel__item-authorlist">authorlist comp goes here
              </div>
              <div className="c-unitcarousel__item-type">item type goes here</div>
            </div>
            <div className="c-unitcarousel__item">
              <h3>Pariatur cupiditate rerum quidem, omnis et inventore repellendus velit autem.
              </h3>
              <div className="c-unitcarousel__item-authorlist">authorlist comp goes here
              </div>
              <div className="c-unitcarousel__item-type">item type goes here</div>
            </div>
            <div className="c-unitcarousel__item">
              <h3>Quidem blanditiis voluptatum pariatur earum doloremque similique ab cumque sit.
              </h3>
              <div className="c-unitcarousel__item-authorlist">authorlist comp goes here
              </div>
              <div className="c-unitcarousel__item-type">item type goes here</div>
            </div>
            <div className="c-unitcarousel__item">
              <h3>Ratione ipsa vero aperiam, error quis voluptatibus rerum laboriosam, doloremque.
              </h3>
              <div className="c-unitcarousel__item-authorlist">authorlist comp goes here
              </div>
              <div className="c-unitcarousel__item-type">item type goes here</div>
            </div>
            <div className="c-unitcarousel__item">
              <h3>Sunt eos praesentium, voluptates veritatis autem hic eligendi officia odit!
              </h3>
              <div className="c-unitcarousel__item-authorlist">authorlist comp goes here
              </div>
              <div className="c-unitcarousel__item-type">item type goes here</div>
            </div>
            <div className="c-unitcarousel__item">
              <h3>Facere, quaerat, consequuntur.
              </h3>
              <div className="c-unitcarousel__item-authorlist">authorlist comp goes here
              </div>
              <div className="c-unitcarousel__item-type">item type goes here</div>
            </div>
            <div className="c-unitcarousel__item">
              <h3>Esse, quis fugit similique officiis earum molestias vitae dolores odit.
              </h3>
              <div className="c-unitcarousel__item-authorlist">authorlist comp goes here
              </div>
              <div className="c-unitcarousel__item-type">item type goes here</div>
            </div>
            <div className="c-unitcarousel__item">
              <h3>Rerum ad itaque rem culpa maxime, animi facilis incidunt quidem!
              </h3>
              <div className="c-unitcarousel__item-authorlist">authorlist comp goes here
              </div>
              <div className="c-unitcarousel__item-type">item type goes here</div>
            </div>
            <div className="c-unitcarousel__item">
              <h3>Consectetur nostrum voluptatibus soluta, magnam velit nobis tenetur tempore ipsum!
              </h3>
              <div className="c-unitcarousel__item-authorlist">authorlist comp goes here
              </div>
              <div className="c-unitcarousel__item-type">item type goes here</div>
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
