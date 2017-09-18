// ##### Informational Pages Component ##### //

import React from 'react'
import $ from 'jquery'
import dotdotdot from 'jquery.dotdotdot'
import PaginationComp from '../components/PaginationComp.jsx'

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
            <h2>
              <b>UC Berkeley</b>
              <a href="">The Center </a>
              <a href="" className="c-infopages__title">In the Press</a>
            </h2>
            <div className="c-infopages__text">The University of California awards contract to Symplectic for the implementation of a publication harvesting system to support UC’s Open Access Policy" March, 2014
            </div>
          </div>
          <div className="c-infopages__item">
            <h2>
              <b>UC Davis</b>
              <a href="">eScholarship</a>
              <a href="" className="c-infopages__title">Lorem Ipsum Dolor Sit Amet</a>
            </h2>
            <div className="c-infopages__text">Debitis incidunt aliquam nemo iure alias, amet rerum velit quidem. Quia, provident voluptatum earum mollitia aliquam at nulla quam, sunt! Laboriosam est perspiciatis molestias excepturi ad repellendus.
            </div>
          </div>
          <div className="c-infopages__item">
            <h2>
              <b>UC Irvine</b>
              <a href="" className="c-infopages__title">Short Title Only</a>
            </h2>
          </div>
        </div>
        <button className="c-infopages__toggle" onClick={()=> this.setState({showMore: true})} hidden={this.state.showMore}>Show more results</button>
        <div className="c-infopages__show-more" hidden={!this.state.showMore}>
          <div className="c-infopages__items">
            <div className="c-infopages__item">
              <h2>
                <b>UC Berkeley</b>
                <a href="">The Center for Environmental Design Research</a>
                <a href="" className="c-infopages__title">In the Press</a>
              </h2>
              <div className="c-infopages__text">The University of California awards contract to Symplectic for the implementation of a publication harvesting system to support UC’s Open Access Policy" March, 2014
              </div>
            </div>
            <div className="c-infopages__item">
              <h2>
                <b>UC Davis</b>
                <a href="">eScholarship</a>
                <a href="" className="c-infopages__title">Lorem Ipsum Dolor Sit Amet</a>
              </h2>
              <div className="c-infopages__text">Debitis incidunt aliquam nemo iure alias, amet rerum velit quidem. Quia, provident voluptatum earum mollitia aliquam at nulla quam, sunt! Laboriosam est perspiciatis molestias excepturi ad repellendus.
              </div>
            </div>
            <div className="c-infopages__item">
              <h2>
                <b>UC Irvine</b>
                <a href="" className="c-infopages__title">Short Title Only</a>
              </h2>
            </div>
            <div className="c-infopages__item">
              <h2>
                <b>UC Berkeley</b>
                <a href="">The Center for Environmental Design Research</a>
                <a href="" className="c-infopages__title">In the Press</a>
              </h2>
              <div className="c-infopages__text">The University of California awards contract to Symplectic for the implementation of a publication harvesting system to support UC’s Open Access Policy" March, 2014
              </div>
            </div>
            <div className="c-infopages__item">
              <h2>
                <b>UC Davis</b>
                <a href="">eScholarship</a>
                <a href="" className="c-infopages__title">Lorem Ipsum Dolor Sit Amet</a>
              </h2>
              <div className="c-infopages__text">Debitis incidunt aliquam nemo iure alias, amet rerum velit quidem. Quia, provident voluptatum earum mollitia aliquam at nulla quam, sunt! Laboriosam est perspiciatis molestias excepturi ad repellendus.
              </div>
            </div>
            <div className="c-infopages__item">
              <h2>
                <b>UC Irvine</b>
                <a href="" className="c-infopages__title">Short Title Only</a>
              </h2>
            </div>
            <div className="c-infopages__item">
              <h2>
                <b>UC Berkeley</b>
                <a href="">The Center for Environmental Design Research</a>
                <a href="" className="c-infopages__title">In the Press</a>
              </h2>
              <div className="c-infopages__text">The University of California awards contract to Symplectic for the implementation of a publication harvesting system to support UC’s Open Access Policy" March, 2014
              </div>
            </div>
            <div className="c-infopages__item">
              <h2>
                <b>UC Davis</b>
                <a href="">eScholarship</a>
                <a href="" className="c-infopages__title">Lorem Ipsum Dolor Sit Amet</a>
              </h2>
              <div className="c-infopages__text">Debitis incidunt aliquam nemo iure alias, amet rerum velit quidem. Quia, provident voluptatum earum mollitia aliquam at nulla quam, sunt! Laboriosam est perspiciatis molestias excepturi ad repellendus.
              </div>
            </div>
            <div className="c-infopages__item">
              <h2>
                <b>UC Irvine</b>
                <a href="" className="c-infopages__title">Short Title Only</a>
              </h2>
            </div>
          </div>
          <PaginationComp />
          <button className="c-infopages__toggle" onClick={()=> this.setState({showMore: false})}>Show fewer results</button>
        </div>
      </div>
    )
  }
}

module.exports = InfoPagesComp;
