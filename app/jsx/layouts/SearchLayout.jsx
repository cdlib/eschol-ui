// ##### Search Layout ##### //

import React from 'react'
import $ from 'jquery'
import dotdotdot from 'jquery.dotdotdot'
import Header1Comp from '../components/Header1Comp.jsx'
import NavComp from '../components/NavComp.jsx'
import NavSubComp from '../components/NavSubComp.jsx'
import Breakpoints from '../../js/breakpoints.json'
import ExportComp from '../components/ExportComp.jsx'
import FilterComp from '../components/FilterComp.jsx'
import SortPaginationComp from '../components/SortPaginationComp.jsx'
import PaginationComp from '../components/PaginationComp.jsx'
import InfoPagesComp from '../components/InfoPagesComp.jsx'
import MediaListComp from '../components/MediaListComp.jsx'
import FooterComp from '../components/FooterComp.jsx'

class SearchLayout extends React.Component {
  constructor(props){
    super(props)
    this.state = {submenuActive: null}
  }
  componentWillMount() {
    if (matchMedia) {
      this.mq = matchMedia("(min-width:"+Breakpoints.screen3+")")
      this.mq.addListener(this.widthChange)
      this.widthChange()
    }
  }
  componentDidMount() {
    $('.c-scholworks__heading, .c-authorlist__list, .c-scholworks__abstract').dotdotdot({watch:'window'});
  }
  widthChange = ()=> {
    this.setState({isOpen: this.mq.matches})
  }
  render() {
    return (
      <div>
        <a href="#maincontent" className="c-skipnav">Skip to main content</a>
        <Header1Comp />
        <div className="c-navbar">
          <div className="c-nav">
            <details open={this.state.isOpen ? "open" : ""} className="c-nav__main">
              <summary className="c-nav__main-button"><span>Menu</span>
              </summary>
              <nav className={this.state.submenuActive ? "c-nav__main-items--submenu-active" : "c-nav__main-items"}>
                <NavSubComp name="About" open={this.state.submenuActive == 1} onSubmenuChanged={(flag)=> this.setState({submenuActive:flag ? 1 : null})}>
                  <a href="">About Us</a>
                  <a href="">Aims &amp; Scope</a>
                  <a href="">Editorial Board</a>
                </NavSubComp>
                <NavSubComp name="Campus Sites" open={this.state.submenuActive == 2} onSubmenuChanged={(flag)=> this.setState({submenuActive:flag ? 2 : null})}>
                  <a href="">UC Berkeley</a>
                  <a href="">UC Davis</a>
                  <a href="">UC Irvine</a>
                  <a href="">UCLA</a>
                  <a href="">UC Merced</a>
                  <a href="">UC Riverside</a>
                  <a href="">UC San Diego</a>
                  <a href="">UC San Francisco</a>
                  <a href="">UC Santa Barbara</a>
                  <a href="">UC Santa Cruz</a>
                  <a href="">UC Office of the President</a>
                  <a href="">UC Press</a>
                </NavSubComp>
                <NavSubComp name="UC Open Access" open={this.state.submenuActive == 3} onSubmenuChanged={(flag)=> this.setState({submenuActive:flag ? 3 : null})}>
                  <a href="">To Be Determined 1</a>
                  <a href="">To Be Determined 2</a>
                  <a href="">To Be Determined 3</a>
                </NavSubComp>
                <a href="">eScholarship Publishing</a>
              </nav>
            </details>
          </div>
        </div>
        <ExportComp />
        <div className="c-columns">
          <aside>
            <FilterComp />
            <details className="c-facetbox">
              <summary className="c-facetbox__summary"><span>Department</span></summary>
              <ul className="c-checkbox">
                {/* 'id' and 'htmlFor' values must contain a unique number per each pair below for accessibility */}
                <li>
                  <input id="c-checkbox__number1" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__number1" className="c-checkbox__label">Agricultural History Center (##)</label>
                </li>
                <li>
                  <input id="c-checkbox__number2" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__number2" className="c-checkbox__label">Agriculture and Natural Resources Research and Extension Centers (##)</label>
                  <ul>
                    <li>
                      <input id="c-checkbox__number3" type="checkbox" className="c-checkbox__input"/>
                      <label htmlFor="c-checkbox__number3" className="c-checkbox__label">Hopland Research and Extension Center (##)</label>
                    </li>
                    <li>
                      <input id="c-checkbox__number4" type="checkbox" className="c-checkbox__input"/>
                      <label htmlFor="c-checkbox__number4" className="c-checkbox__label">Sierra Foothill Research and Extension Center (##)</label>
                    </li>
                  </ul>
                </li>
                <li>
                  <input id="c-checkbox__number5" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__number5" className="c-checkbox__label">Western Journal of Emergency Medicine: Integrating Emergency Care with Population Health</label>
                </li>
                <li>
                  <input id="c-checkbox__number6" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__number6" className="c-checkbox__label">American Cultures Center</label>
                </li>
                <li>
                  <input id="c-checkbox__number7" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__number7" className="c-checkbox__label">American Cultures and Global Contexts Center</label>
                </li>
              </ul>
              <button className="c-facetbox__show-more">Show more</button>
            </details>
            <details className="c-facetbox">
              <summary className="c-facetbox__summary"><span>Research</span></summary>
              <div className="c-checkbox">
                {/* 'id' and 'htmlFor' values must contain a unique number per pair below for accessibility */}
                <input id="c-checkbox__number7" type="checkbox" className="c-checkbox__input"/>
                <label htmlFor="c-checkbox__number7" className="c-checkbox__label">Articles (##)</label>
                <input id="c-checkbox__number8" type="checkbox" className="c-checkbox__input"/>
                <label htmlFor="c-checkbox__number8" className="c-checkbox__label">Books (##)</label>
                <input id="c-checkbox__number9" type="checkbox" className="c-checkbox__input"/>
                <label htmlFor="c-checkbox__number9" className="c-checkbox__label">Journals (##)</label>
              </div>
            </details>
            <details className="c-facetbox">
              <summary className="c-facetbox__summary"><span>Content Type</span></summary>
              <div className="c-checkbox">
                {/* 'id' and 'htmlFor' values must contain a unique number per pair below for accessibility */}
                <input id="c-checkbox__number1" type="checkbox" className="c-checkbox__input"/>
                <label htmlFor="c-checkbox__number1" className="c-checkbox__label">Video</label>

                <input id="c-checkbox__number2" type="checkbox" className="c-checkbox__input"/>
                <label htmlFor="c-checkbox__number2" className="c-checkbox__label">Audio</label>

                <input id="c-checkbox__number3" type="checkbox" className="c-checkbox__input"/>
                <label htmlFor="c-checkbox__number3" className="c-checkbox__label">images</label>

                <input id="c-checkbox__number4" type="checkbox" className="c-checkbox__input"/>
                <label htmlFor="c-checkbox__number4" className="c-checkbox__label">PDF</label>
                
                <input id="c-checkbox__number5" type="checkbox" className="c-checkbox__input"/>
                <label htmlFor="c-checkbox__number5" className="c-checkbox__label">ZIP</label>
              </div>
            </details>
          </aside>
          <main id="maincontent">
            <section className="o-columnbox1">
              <header>
                <h2>Informational Pages (12 results)</h2>
              </header>
              <InfoPagesComp />
            </section>
            <section className="o-columnbox1">
              <header>
                <h2>Scholarly Works (12,023 results)</h2>
              </header>
              <SortPaginationComp />

              {/* ScholWorksComp article example below */}
              <section className="c-scholworks">
                <div className="c-scholworks__main-column">
                  <ul className="c-scholworks__tag-list">
                    <li className="c-scholworks__tag-article">Article</li>
                    <li className="c-scholworks__tag-peer">Peer Reviewed</li>
                  </ul>
                  <heading>
                    <h2 className="c-scholworks__heading">
                      <a href="">From the New Heights: The City and Migrating Latinas in Real Woman Have Curves and Maria Full of Grace</a>
                    </h2 >
                  </heading>
                  <div className="c-authorlist">
                    {/* <time> element intentionally omitted */}
                    <ul className="c-authorlist__list">
                    {/* links can be left out of the list if no links are desired: */}
                      <li><a href="">Leung, Wilson</a></li>
                      <li><a href="">Shaffer, Christopher D</a></li>
                      <li><a href="">Reed, Laura K</a></li>
                      <li><a href="">Smith, Sheryl T</a></li>
                      <li><a href="">Barshop, William</a></li>
                      <li><a href="">Dirkes, William</a></li>
                      <li><a href="" className="c-authorlist__list-more-link">et al.</a></li>
                    </ul>
                  </div>
                  <div className="c-scholworks__publication">
                    <a href="">Mester Journal, Volume 42, Issue 1</a> (2012)
                  </div>
                  <div className="c-scholworks__abstract">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolor obcaecati magni quas quos ab dignissimos neque beatae, provident unde architecto ut corrupti! Ratione aperiam, recusandae quidem nisi inventore asperiores nam sed eaque totam, quam minima reprehenderit, quisquam cupiditate reiciendis. Vero earum magni asperiores quisquam impedit voluptates eveniet aspernatur assumenda.
                    </p>
                  </div>
                  <div className="c-scholworks__media">
                    <MediaListComp />
                    <img className="c-scholworks__license" src="images/cc-by-small.svg" alt="creative commons attribution 4.0 international public license"/>
                  </div>
                </div>
                <img className="c-scholworks__article-preview" src="images/temp_article.png" alt="article"/>
              </section>

              {/* ScholWorksComp book example below */}
              <section className="c-scholworks">
                <div className="c-scholworks__main-column">
                  <ul className="c-scholworks__tag-list">
                    <li className="c-scholworks__tag-book">Book</li>
                    <li className="c-scholworks__tag-peer">Peer Reviewed</li>
                  </ul>
                  <heading>
                    <h2 className="c-scholworks__heading">
                      <a href="">A Fairly Short Title</a>
                    </h2 >
                  </heading>
                  <div className="c-authorlist">
                    {/* <time> element intentionally omitted */}
                    <ul className="c-authorlist__list">
                    {/* links can be left out of the list if no links are desired: */}
                      <li><a href="">Baker, James</a></li>
                      <li><a href="">Smith, William B</a></li>
                    </ul>
                  </div>
                  <div className="c-scholworks__publication">
                    <a href="">Mester Journal, Volume 42, Issue 1</a> (2012)
                  </div>
                  <div className="c-scholworks__abstract">
                    <p>Just a little bit of copy here; not too much, though.
                    </p>
                  </div>
                  <div className="c-scholworks__media">
                    <ul className="c-medialist">
                      <li className="c-medialist__image">Contains 2 supplemental images</li>
                    </ul>
                    <img className="c-scholworks__license" src="images/cc-by-small.svg" alt="creative commons attribution 4.0 international public license"/>
                  </div>
                </div>
                <img className="c-scholworks__article-preview" src="images/temp_article.png" alt="article"/>
              </section>

              {/* ScholWorksComp thesis example below */}
              <section className="c-scholworks">
                <div className="c-scholworks__main-column">
                  <ul className="c-scholworks__tag-list">
                    <li className="c-scholworks__tag-thesis">Thesis</li>
                    <li className="c-scholworks__tag-peer">Peer Reviewed</li>
                  </ul>
                  <heading>
                    <h2 className="c-scholworks__heading">
                      <a href="">From the New Heights: The City and Migrating Latinas in Real Woman Have Curves and Maria Full of Grace</a>
                    </h2 >
                  </heading>
                  <div className="c-authorlist">
                    {/* <time> element intentionally omitted */}
                    <ul className="c-authorlist__list">
                    {/* links can be left out of the list if no links are desired: */}
                      <li><a href="">Leung, Wilson</a></li>
                      <li><a href="">Shaffer, Christopher D</a></li>
                      <li><a href="">Reed, Laura K</a></li>
                      <li><a href="">Smith, Sheryl T</a></li>
                      <li><a href="">Barshop, William</a></li>
                      <li><a href="">Dirkes, William</a></li>
                      <li><a href="" className="c-authorlist__list-more-link">et al.</a></li>
                    </ul>
                  </div>
                  <div className="c-scholworks__publication">
                    <a href="">Mester Journal, Volume 42, Issue 1</a> (2012)
                  </div>
                  <div className="c-scholworks__abstract">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolor obcaecati magni quas quos ab dignissimos neque beatae, provident unde architecto ut corrupti! Ratione aperiam, recusandae quidem nisi inventore asperiores nam sed eaque totam, quam minima reprehenderit, quisquam cupiditate reiciendis. Vero earum magni asperiores quisquam impedit voluptates eveniet aspernatur assumenda.
                    </p>
                  </div>
                  <div className="c-scholworks__media">
                    <MediaListComp />
                    <img className="c-scholworks__license" src="images/cc-by-small.svg" alt="creative commons attribution 4.0 international public license"/>
                  </div>
                </div>
                <img className="c-scholworks__article-preview" src="images/temp_article.png" alt="article"/>
              </section>

              {/* ScholWorksComp multimedia example below */}
              <section className="c-scholworks">
                <div className="c-scholworks__main-column">
                  <ul className="c-scholworks__tag-list">
                    <li className="c-scholworks__tag-multimedia">Multimedia</li>
                    <li className="c-scholworks__tag-peer">Peer Reviewed</li>
                  </ul>
                  <heading>
                    <h2 className="c-scholworks__heading">
                      <a href="">From the New Heights: The City and Migrating Latinas in Real Woman Have Curves and Maria Full of Grace</a>
                    </h2 >
                  </heading>
                  <div className="c-authorlist">
                    {/* <time> element intentionally omitted */}
                    <ul className="c-authorlist__list">
                    {/* links can be left out of the list if no links are desired: */}
                      <li><a href="">Leung, Wilson</a></li>
                      <li><a href="">Shaffer, Christopher D</a></li>
                      <li><a href="">Reed, Laura K</a></li>
                      <li><a href="">Smith, Sheryl T</a></li>
                      <li><a href="">Barshop, William</a></li>
                      <li><a href="">Dirkes, William</a></li>
                      <li><a href="" className="c-authorlist__list-more-link">et al.</a></li>
                    </ul>
                  </div>
                  <div className="c-scholworks__publication">
                    <a href="">Mester Journal, Volume 42, Issue 1</a> (2012)
                  </div>
                  <div className="c-scholworks__abstract">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolor obcaecati magni quas quos ab dignissimos neque beatae, provident unde architecto ut corrupti! Ratione aperiam, recusandae quidem nisi inventore asperiores nam sed eaque totam, quam minima reprehenderit, quisquam cupiditate reiciendis. Vero earum magni asperiores quisquam impedit voluptates eveniet aspernatur assumenda.
                    </p>
                  </div>
                  <div className="c-scholworks__media">
                    <MediaListComp />
                    <img className="c-scholworks__license" src="images/cc-by-small.svg" alt="creative commons attribution 4.0 international public license"/>
                  </div>
                </div>
                <img className="c-scholworks__article-preview" src="images/temp_article.png" alt="article"/>
              </section>

            </section>
          </main>
        </div>
        <FooterComp />
      </div>
    )
  }
}

module.exports = SearchLayout;
