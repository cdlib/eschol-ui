// ##### Front Matter Component ##### //

import React from 'react'
import $ from 'jquery'
import dotdotdot from 'jquery.dotdotdot'

class FrontmatterComp extends React.Component {
  componentDidMount() {
    $('.c-authorlist__list').dotdotdot({watch:'window', after:'.c-authorlist__list-more-link', ellipsis:' ', wrap:'children'});
    setTimeout(()=> $('.c-authorlist__list').trigger("update"), 0)
  }
  render() {
    return (
      <div className="c-frontmatter">
        <a href="">
          <img src="http://placehold.it/150x200?text=Image" alt="" className="c-frontmatter__img"/>
        </a>
        <div className="c-frontmatter__text">
          <h2 className="c-frontmatter__heading">
            <a href="">Volume 41, Issue 1, 2015</a>
          </h2>
          <div className="c-authorlist">
            {/* <time> element intentionally left out */}
            <ul className="c-authorlist__list">
            {/* links can be left out of the list if no links are desired: */}
              <li><a href="">Leung, Wilson</a></li>
              <li><a href="">Shaffer, Christopher D</a></li>
              <li><a href="">Reed, Laura K</a></li>
              <li><a href="">Smith, Sheryl T</a></li>
              <li><a href="">Barshop, William</a></li>
              <li><a href="">Dirkes, William</a></li>
              <li><a href="">Dothager, Matthew</a></li>
              <li><a href="">Lee, Paul</a></li>
              <li><a href="">Wong, Jeannette</a></li>
              <li><a href="">Xiong, David</a></li>
              <li><a href="">Yuan, Han</a></li>
              <li><a href="">Bedard James E J</a></li>
              <li><a href="">Machone, Joshua F</a></li>
              <li><a href="">Patterson, Seantay D</a></li>
              <li><a href="">Price, Amber L</a></li>
              <li><a href="">Turner, Bryce A</a></li>
              <li><a href="">Robic, Srebrenka</a></li>
              <li><a href="" className="c-authorlist__list-more-link">et al.</a></li>
            </ul>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur fuga laborum, qui debitis vitae quaerat quas ab officia, dolor dignissimos ipsum nam ratione unde animi? Officiis rerum unde eveniet natus.
            Laboriosam tenetur vel, rem culpa maiores non, tempora voluptatibus quasi quos provident exercitationem itaque dolorum quam sequi dolor odio hic accusamus, repellendus ut dignissimos. Labore modi consectetur ullam, iste accusamus!
            Dolore quod illum praesentium sint. Consectetur illum voluptas reiciendis possimus ullam nesciunt, laboriosam nisi nihil hic. Veritatis porro doloribus iste eos, assumenda fugiat dicta nesciunt. Autem sed recusandae at quod!
            Ducimus adipisci provident nam voluptatem officia. Quos maiores molestias atque alias deserunt ullam laborum similique, quae cum excepturi. Rem harum facilis perspiciatis a illum, eum, officiis. Ducimus officia, veniam ea.
          </p>
          <ul className="c-medialist">
            <li className="c-medialist__image">Contains 2 images</li>
            <li className="c-medialist__video">Contains 8 videos</li>
          </ul>
        </div>
      </div>
    )
  }
}

module.exports = FrontmatterComp;
