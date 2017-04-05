// ##### Author List Component ##### //

import React from 'react'
import $ from 'jquery'
import dotdotdot from 'jquery.dotdotdot'

class AuthorListComp extends React.Component {
  componentDidMount() {
    $('.c-authorlist__list').dotdotdot({watch:'window', after:'.c-authorlist__list-more-link', ellipsis:' ', wrap:'children'});
    setTimeout(()=> $('.c-authorlist__list').trigger("update"), 0)
  }
  render() {
    return (
      <div className="c-authorlist">
        <time className="c-authorlist__year">2012</time>
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
    )
  }
}

module.exports = AuthorListComp;
