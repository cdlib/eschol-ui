// ##### Unit Series Component ##### //

import React from 'react'
import $ from 'jquery'
import dotdotdot from 'jquery.dotdotdot'
import faker from 'faker/locale/en'

class UnitSeriesComp extends React.Component {
  componentDidMount() {
    $('.c-pub__heading, .c-pub__abstract').dotdotdot({watch: 'window'
    });
  }
  render() {
    return (
      <details className="c-togglecontent c-unitseries">
        <summary><a href="">{this.props.heading} ({faker.fake("{{random.number(99)}}")})</a></summary>
        <div className="c-pub">
          <h5 className="c-pub__heading">
            <a href="">Language Ideologies and Hegemonic Factors Imposed upon Judeo-Spanish Speaking Communities</a>
          </h5>
          <div className="c-authorlist">
            <ul className="c-authorlist__list">
              <li><a href="">Kirschen, Bryan</a></li>
              <li><a href="">Shaffer, Christopher D</a></li>
              <li><a href="">Reed, Laura K</a></li>
            </ul>
          </div>
          <div className="c-pub__abstract">
            <p>{faker.fake("{{lorem.paragraph}}")}</p>
            <p>{faker.fake("{{lorem.paragraph}}")}</p>
          </div>
        </div>
        <div className="c-pub">
          <h5 className="c-pub__heading">
            <a href="">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</a>
          </h5>
          <div className="c-authorlist">
            <ul className="c-authorlist__list">
              <li><a href="">Dahle, Kevin W</a></li>
              <li><a href="">Smith, Sheryl T</a></li>
              <li><a href="">Barshop, William</a></li>
            </ul>
          </div>
          <div className="c-pub__abstract">
            <p>{faker.fake("{{lorem.paragraph}}")}</p>
            <p>{faker.fake("{{lorem.paragraph}}")}</p>
          </div>
        </div>
        <div className="c-pub">
          <h5 className="c-pub__heading">
            <a href="">Coupled Cardiac Electrophysiology and Contraction using Finite Element</a>
          </h5>
          <div className="c-authorlist">
            <ul className="c-authorlist__list">
              <li><a href="">Pardo, Maria Gracia</a></li>
              <li><a href="">Lee, Paul</a></li>
              <li><a href="">Wong, Jeannette</a></li>
            </ul>
          </div>
          <div className="c-pub__abstract">
            <p>{faker.fake("{{lorem.paragraph}}")}</p>
            <p>{faker.fake("{{lorem.paragraph}}")}</p>
          </div>
        </div>
        <div className="c-unitseries__publications2">24 more works&mdash; <a href="">show all</a></div>
      </details>
    )
  }
}

module.exports = UnitSeriesComp;
