// ##### Informational Pages Component ##### //

import React from 'react'
import $ from 'jquery'
import dotdotdot from 'jquery.dotdotdot'
import faker from 'faker/locale/en'

class InfoPagesComp extends React.Component {
  state={showMore: false}

  componentDidMount() {
    $('.c-infopages__text').dotdotdot({watch:"window"});
  }
  render() {
    return (
      <div className="c-infopages">
        <div className="c-infopages__items">
          <div className="c-infopages__item">
            <h3>
              <b>UC Berkeley</b>
              <a href="">The Center </a>
              <a href="" className="c-infopages__title">In the Press</a>
            </h3>
            <div className="c-infopages__text">
              {faker.fake("{{lorem.paragraph}}")}
            </div>
          </div>
          <div className="c-infopages__item">
            <h3>
              <b>UC Davis</b>
              <a href="">eScholarship</a>
              <a href="" className="c-infopages__title">Lorem Ipsum Dolor Sit Amet</a>
            </h3>
            <div className="c-infopages__text">
              {faker.fake("{{lorem.paragraph}}")}
            </div>
          </div>
          <div className="c-infopages__item">
            <h3>
              <b>UC Irvine</b>
              <a href="" className="c-infopages__title">Short Title Only</a>
            </h3>
          </div>
        </div>
        <button className="c-infopages__toggle" onClick={()=> this.setState({showMore: true})} hidden={this.state.showMore}>Show more results</button>
        <div className="c-infopages__show-more" hidden={!this.state.showMore}>
          <div className="c-infopages__items">
            <div className="c-infopages__item">
              <h3>
                <b>UC Berkeley</b>
                <a href="">The Center for Environmental Design Research</a>
                <a href="" className="c-infopages__title">In the Press</a>
              </h3>
              <div className="c-infopages__text">
                {faker.fake("{{lorem.paragraph}}")}
              </div>
            </div>
            <div className="c-infopages__item">
              <h3>
                <b>UC Davis</b>
                <a href="">eScholarship</a>
                <a href="" className="c-infopages__title">Lorem Ipsum Dolor Sit Amet</a>
              </h3>
              <div className="c-infopages__text">
                {faker.fake("{{lorem.paragraph}}")}
              </div>
            </div>
            <div className="c-infopages__item">
              <h3>
                <b>UC Irvine</b>
                <a href="" className="c-infopages__title">Short Title Only</a>
              </h3>
            </div>
            <div className="c-infopages__item">
              <h3>
                <b>UC Berkeley</b>
                <a href="">The Center for Environmental Design Research</a>
                <a href="" className="c-infopages__title">In the Press</a>
              </h3>
              <div className="c-infopages__text">
                {faker.fake("{{lorem.paragraph}}")}
              </div>
            </div>
            <div className="c-infopages__item">
              <h3>
                <b>UC Davis</b>
                <a href="">eScholarship</a>
                <a href="" className="c-infopages__title">Lorem Ipsum Dolor Sit Amet</a>
              </h3>
              <div className="c-infopages__text">
                {faker.fake("{{lorem.paragraph}}")}
              </div>
            </div>
            <div className="c-infopages__item">
              <h3>
                <b>UC Irvine</b>
                <a href="" className="c-infopages__title">Short Title Only</a>
              </h3>
            </div>
            <div className="c-infopages__item">
              <h3>
                <b>UC Berkeley</b>
                <a href="">The Center for Environmental Design Research</a>
                <a href="" className="c-infopages__title">In the Press</a>
              </h3>
              <div className="c-infopages__text">
                {faker.fake("{{lorem.paragraph}}")}
              </div>
            </div>
            <div className="c-infopages__item">
              <h3>
                <b>UC Davis</b>
                <a href="">eScholarship</a>
                <a href="" className="c-infopages__title">Lorem Ipsum Dolor Sit Amet</a>
              </h3>
              <div className="c-infopages__text">
                {faker.fake("{{lorem.paragraph}}")}
              </div>
            </div>
            <div className="c-infopages__item">
              <h3>
                <b>UC Irvine</b>
                <a href="" className="c-infopages__title">Short Title Only</a>
              </h3>
            </div>
          </div>
          <nav className="c-pagination--next">
            <ul>
              {/*
              Note the aria-label text differences in each list item below, including "last" result set:
              */}
              <li><a href="" className="c-pagination__item" aria-label="go to result set 1">1</a></li>
              <li><a href="" className="c-pagination__item" aria-label="go to result set 2">2</a></li>
              <li><a href="" className="c-pagination__item--current" aria-label="you are on result set 3">3</a></li>
              <li><a href="" className="c-pagination__item" aria-label="go to result set 4">4</a></li>
              <li><a href="" className="c-pagination__item" aria-label="go to last result set 1000">1000</a></li>
              <li className="c-pagination__next"><a href="" aria-label="go to next result set">Next</a></li>
            </ul>
          </nav>
          <button className="c-infopages__toggle" onClick={()=> this.setState({showMore: false})}>Show fewer results</button>
        </div>
      </div>
    )
  }
}

module.exports = InfoPagesComp;
