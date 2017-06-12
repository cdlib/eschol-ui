// ##### Unit Item Objects ##### //

import React from 'react'
import $ from 'jquery'
import dotdotdot from 'jquery.dotdotdot'

class UnitItemObj extends React.Component {
  componentDidMount() {
    $('.o-unititem__author').dotdotdot({
      watch: 'window'
    });
    setTimeout(()=> $('.o-unititem__author').trigger("update"), 0)
  }
  render() {
    return (
      <div>

        <h2>Unit Item Objects</h2>

        <a href="" className="o-unititem--vert">
          <div className="o-unititem__title">Corporate Social Responsibility and Financial Performance</div>
          <ul className="o-unititem__author">
            <li>Fung, Joe</li>
            <li>Wu, Abe</li>
            <li>Reed, Laura K</li>
            <li>Smith, Sheryl T</li>
            <li>Barshop, William</li>
            <li>Wong, Jeannette</li>
            <li>Dothager, Matthew</li>
            <li>Lee, Paul</li>
            <li>Wong, Jeannette</li>
          </ul>
        </a>

        <a href="" className="o-unititem--horz">
          <div className="o-unititem__title">Internalized Stigma of Mental Illness: Psychometric Properties of a New Measure</div>
          <ul className="o-unititem__author">
            <li>Fung, Joe</li>
            <li>Wu, Abe</li>
            <li>Reed, Laura K</li>
            <li>Smith, Sheryl T</li>
            <li>Barshop, William</li>
            <li>Wong, Jeannette</li>
            <li>Dothager, Matthew</li>
            <li>Lee, Paul</li>
            <li>Wong, Jeannette</li>
          </ul>
        </a>

      </div>
    )
  }
}

module.exports = UnitItemObj;
