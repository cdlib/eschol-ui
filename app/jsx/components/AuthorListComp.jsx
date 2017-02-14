// ##### Author List Component ##### //

import React from 'react'
import $ from 'jquery'
import dotdotdot from 'jquery.dotdotdot'

class AuthorListComp extends React.Component {
  componentDidMount() {
    $('.c-authorlist__list').dotdotdot({watch:'window', after:'.c-authorlist__list-more-link', ellipsis:' ', wrap:'children'});
  }
  render() {
    return (
      <div className="c-authorlist">
        <time className="c-authorlist__year">2012</time>
        <ul className="c-authorlist__list">      
          <li>Leung, Wilson</li>
          <li>Shaffer, Christopher D</li>
          <li>Reed, Laura K</li>
          <li>Smith, Sheryl T</li>
          <li>Barshop, William</li>
          <li>Dirkes, William</li>
          <li>Dothager, Matthew</li>
          <li>Lee, Paul</li>
          <li>Wong, Jeannette</li>
          <li>Xiong, David</li>
          <li>Yuan, Han</li>
          <li>Bedard James E J</li>
          <li>Machone, Joshua F</li>
          <li>Patterson, Seantay D</li>
          <li>Price, Amber L</li>
          <li>Turner, Bryce A</li>
          <li>Robic, Srebrenka</li>
          <li><a href="" className="c-authorlist__list-more-link">et al.</a></li>
        </ul>
        
      </div>
    )
  }
}

module.exports = AuthorListComp;
