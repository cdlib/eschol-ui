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
        <h2 className="o-itemcarousel__heading"><a href="">Center for Medieval and Renaissance Studies</a> <button onClick={this.scrollDown}>Scroll Down</button><button onClick={this.scrollUp}>Scroll Up</button></h2>
        <div className="c-unitcarousel o-itemcarousel__carousel">
          <div className="c-unitcarousel__scrollbox" ref={el => this.scrollBox = el} tabIndex="-1">
            <p>[Proof of concept for scrolling unit items]</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati corporis laboriosam, illo suscipit consequuntur cum neque quasi magnam in, eos, fugit reiciendis nulla voluptate ab incidunt beatae dicta ullam maiores.
            </p>
            <p>Vitae laborum quia placeat asperiores numquam possimus cupiditate sapiente consequatur beatae, ea dolorum obcaecati sed at saepe perspiciatis nostrum laboriosam earum ipsa corrupti voluptatum cumque porro recusandae molestias! Iusto, quisquam.
            </p>
            <p>Fugit saepe quo provident adipisci amet repellat cumque suscipit impedit nihil sequi harum voluptas mollitia officiis praesentium dignissimos consectetur ducimus, itaque, tenetur repellendus tempora deserunt laudantium. Nulla cupiditate ea omnis.
            </p>
            <p>Delectus culpa eius labore repudiandae quibusdam quia? Fuga, quam. Ea, dolorum optio molestias magni recusandae, porro vel quidem sint ipsam consequatur quos rem nulla perferendis expedita minus officiis, officia neque.
            </p>
            <p>Aliquid ab dolorem officiis at alias soluta explicabo id, cumque, modi sunt sequi, corporis quidem doloribus similique. Voluptatem laboriosam voluptatibus dicta in, dolorem dolor ea voluptates, unde maiores, iure temporibus.
            </p>
            <p>Voluptas repellendus quidem, dignissimos consequatur maiores nulla nostrum voluptatibus laborum perferendis commodi similique amet placeat labore sequi, illum obcaecati dolores nobis necessitatibus ad numquam repudiandae corporis. Enim perspiciatis corporis consequuntur.
            </p>
            <p>Et soluta voluptatum est debitis incidunt sunt, laboriosam corrupti dolorem, error molestiae omnis harum veniam accusamus eius deleniti voluptatem distinctio. Maiores cum quidem omnis nostrum iusto deserunt accusamus, similique saepe.
            </p>
            <p>Deleniti adipisci dolorem rerum molestias fugiat aspernatur saepe molestiae. Neque, consequuntur magni illum quod, vero rem quibusdam consequatur nam numquam velit voluptas dicta hic aspernatur. Illum animi magnam itaque ipsam.
            </p>
            <p>Laudantium, omnis velit quibusdam, ad aliquam enim provident quas laborum, magni et nemo dolores vitae eos at accusantium natus quod nesciunt! Ex autem qui laudantium consequatur vel dolorem facilis voluptatum?
            </p>
            <p>Laborum necessitatibus, dolor doloremque facilis, expedita eum eius sed quis hic nulla laboriosam distinctio dignissimos quo neque. Impedit, ea iusto modi, velit cum omnis tempora dicta accusamus, et odio dolorem!
            </p>
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
