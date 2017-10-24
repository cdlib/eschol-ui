// ##### Search Layout ##### //

import React from 'react'
import $ from 'jquery'
import dotdotdot from 'jquery.dotdotdot'
import Header2Comp from '../components/Header2Comp.jsx'
import NavComp from '../components/NavComp.jsx'
import NavSubComp from '../components/NavSubComp.jsx'
import Breakpoints from '../../js/breakpoints.json'
import ExportComp from '../components/ExportComp.jsx'
import FilterComp from '../components/FilterComp.jsx'
import PubYearComp from '../components/PubYearComp.jsx'
import SortPaginationComp from '../components/SortPaginationComp.jsx'
import PaginationComp from '../components/PaginationComp.jsx'
import InfoPagesComp from '../components/InfoPagesComp.jsx'
import MediaListComp from '../components/MediaListComp.jsx'
import ReactModal from 'react-modal'
import FooterComp from '../components/FooterComp.jsx'

class SearchLayout extends React.Component {
  constructor(props){
    super(props)
    this.state = {submenuActive: null, showModal: false}
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div>
        <a href="#maincontent" className="c-skipnav">Skip to main content</a>
        <Header2Comp />
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
              {/* Each facetbox needs a distinct <span id> and <fieldset aria-labelledby> matching value, like facetbox1, facetbox2, etc. */}
              <summary className="c-facetbox__summary"><span id="c-facetbox1">Supplemental Material</span></summary>
              <fieldset aria-labelledby="c-facetbox1">
                <ul className="c-checkbox--2column">
                  {/* 'id' and 'htmlFor' values must contain a unique number per each pair below for accessibility */}
                  <li>
                    <input id="c-checkbox__media1" type="checkbox" className="c-checkbox__input"/>
                    <label htmlFor="c-checkbox__media1" className="c-checkbox__label">Video (6)</label>
                  </li>
                  <li>
                    <input id="c-checkbox__media2" type="checkbox" className="c-checkbox__input"/>
                    <label htmlFor="c-checkbox__media2" className="c-checkbox__label">Audio (13)</label>
                  </li>
                  <li>
                    <input id="c-checkbox__media3" type="checkbox" className="c-checkbox__input"/>
                    <label htmlFor="c-checkbox__media3" className="c-checkbox__label">Images (2)</label>
                  </li>
                  <li>
                    <input id="c-checkbox__media4" type="checkbox" className="c-checkbox__input"/>
                    <label htmlFor="c-checkbox__media4" className="c-checkbox__label">PDF (24)</label>
                  </li>
                  <li>
                    <input id="c-checkbox__media5" type="checkbox" className="c-checkbox__input"/>
                    <label htmlFor="c-checkbox__media5" className="c-checkbox__label">ZIP (19)</label>
                  </li>
                  <li>
                    <input id="c-checkbox__media6" type="checkbox" className="c-checkbox__input"/>
                    <label htmlFor="c-checkbox__media6" className="c-checkbox__label">Other (7)</label>
                  </li>
                </ul>
              </fieldset>
            </details>
            <details className="c-facetbox">
              {/* Each facetbox needs a distinct <span id> and <fieldset aria-labelledby> matching value, like facetbox1, facetbox2, etc. */}
              <summary className="c-facetbox__summary"><span id="c-facetbox2">Publication Year</span></summary>
              <fieldset aria-labelledby="c-facetbox2">
                <PubYearComp />
              </fieldset>
            </details>
            <details className="c-facetbox">
              {/* Each facetbox needs a distinct <span id> and <fieldset aria-labelledby> matching value, like facetbox1, facetbox2, etc. */}
              <summary className="c-facetbox__summary"><span id="c-facetbox3">Department</span></summary>
              <fieldset aria-labelledby="c-facetbox3">
                <ul className="c-checkbox">
                  {/* 'id' and 'htmlFor' values must contain a unique number per each pair below for accessibility */}
                  <li>
                    <input id="c-checkbox__number1" type="checkbox" className="c-checkbox__input"/>
                    <label htmlFor="c-checkbox__number1" className="c-checkbox__label">Agricultural History Center (4)</label>
                  </li>
                  <li>
                    <input id="c-checkbox__number2" type="checkbox" className="c-checkbox__input"/>
                    <label htmlFor="c-checkbox__number2" className="c-checkbox__label">Agriculture and Natural Resources Research and Extension Centers (15)</label>
                    <ul>
                      <li>
                        <input id="c-checkbox__number3" type="checkbox" className="c-checkbox__input"/>
                        <label htmlFor="c-checkbox__number3" className="c-checkbox__label">Hopland Research and Extension Center (7)</label>
                      </li>
                      <li>
                        <input id="c-checkbox__number4" type="checkbox" className="c-checkbox__input"/>
                        <label htmlFor="c-checkbox__number4" className="c-checkbox__label">Sierra Foothill Research and Extension Center (11)</label>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <input id="c-checkbox__number6" type="checkbox" className="c-checkbox__input"/>
                    <label htmlFor="c-checkbox__number6" className="c-checkbox__label">American Cultures Center (2)</label>
                  </li>
                  <li>
                    <input id="c-checkbox__number7" type="checkbox" className="c-checkbox__input"/>
                    <label htmlFor="c-checkbox__number7" className="c-checkbox__label">American Cultures and Global Contexts Center (19)</label>
                  </li>
                </ul>
                <button className="c-facetbox__show-more" onClick={this.handleOpenModal}>Show more</button>
              </fieldset>
            </details>
            <details className="c-facetbox">
              {/* Each facetbox needs a distinct <span id> and <fieldset aria-labelledby> matching value, like facetbox1, facetbox2, etc. */}
              <summary className="c-facetbox__summary"><span id="c-facetbox4">Reuse License</span></summary>
              <fieldset aria-labelledby="c-facetbox4">
                <ul className="c-checkbox">
                  {/* 'id' and 'htmlFor' values must contain a unique number per each pair below for accessibility */}
                  <li className="c-checkbox__attrib-cc-by">
                    <input id="c-checkbox__attrib1" type="checkbox" className="c-checkbox__input"/>
                    <label htmlFor="c-checkbox__attrib1" className="c-checkbox__label">Attribution required (24)</label>
                  </li>
                  <li className="c-checkbox__attrib-cc-by-nc">
                    <input id="c-checkbox__attrib2" type="checkbox" className="c-checkbox__input"/>
                    <label htmlFor="c-checkbox__attrib2" className="c-checkbox__label">Attribution; NonCommercial use only (26)</label>
                  </li>
                  <li className="c-checkbox__attrib-cc-by-nd">
                    <input id="c-checkbox__attrib3" type="checkbox" className="c-checkbox__input"/>
                    <label htmlFor="c-checkbox__attrib3" className="c-checkbox__label">Attribution; No derivatives (5)</label>
                  </li>
                  <li className="c-checkbox__attrib-cc-by-sa">
                    <input id="c-checkbox__attrib4" type="checkbox" className="c-checkbox__input"/>
                    <label htmlFor="c-checkbox__attrib4" className="c-checkbox__label">Attribution; Derivatives must use same license (12)</label>
                  </li>
                  <li className="c-checkbox__attrib-cc-by-nc-sa">
                    <input id="c-checkbox__attrib5" type="checkbox" className="c-checkbox__input"/>
                    <label htmlFor="c-checkbox__attrib5" className="c-checkbox__label">Attribution, NonCommercial use, Derivatives use same license (13)</label>
                  </li>
                  <li className="c-checkbox__attrib-cc-by-nc-nd">
                    <input id="c-checkbox__attrib6" type="checkbox" className="c-checkbox__input"/>
                    <label htmlFor="c-checkbox__attrib6" className="c-checkbox__label">Attribution; NonCommercial use; No derivatives (57)</label>
                  </li>
                </ul>
              </fieldset>
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
                    <h3 className="c-scholworks__heading">
                      <a href="">From the New Heights: The City and Migrating Latinas in Real Woman Have Curves and Maria Full of Grace</a>
                    </h3 >
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
                    <h3 className="c-scholworks__heading">
                      <a href="">A Fairly Short Title</a>
                    </h3 >
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
                    <h3 className="c-scholworks__heading">
                      <a href="">From the New Heights: The City and Migrating Latinas in Real Woman Have Curves and Maria Full of Grace</a>
                    </h3 >
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
                    <h3 className="c-scholworks__heading">
                      <a href="">From the New Heights: The City and Migrating Latinas in Real Woman Have Curves and Maria Full of Grace</a>
                    </h3 >
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

        {/* Start Facet Modal */}
        <div className="c-modal">
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="onRequestClose Example"
             onRequestClose={this.handleCloseModal}
             className="c-modal--open"
             overlayClassName="c-modal__overlay"
          >
            <div className="modal__header">
              <h2>Refine By Department</h2>
            </div>
            <div className="modal__content">
              <ul className="c-checkbox">
                {/* 'id' and 'htmlFor' values must contain a unique number per each pair below for accessibility */}
                <li>
                  <input id="c-checkbox__modal1" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal1" className="c-checkbox__label">Agricultural History Center (##)</label>
                </li>
                <li>
                  <input id="c-checkbox__modal2" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal2" className="c-checkbox__label">Agriculture and Natural Resources Research and Extension Centers (##)</label>
                  <ul>
                    <li>
                      <input id="c-checkbox__modal3" type="checkbox" className="c-checkbox__input"/>
                      <label htmlFor="c-checkbox__modal3" className="c-checkbox__label">Hopland Research and Extension Center (##)</label>
                    </li>
                    <li>
                      <input id="c-checkbox__modal4" type="checkbox" className="c-checkbox__input"/>
                      <label htmlFor="c-checkbox__modal4" className="c-checkbox__label">Sierra Foothill Research and Extension Center (##)</label>
                    </li>
                  </ul>
                </li>
                <li>
                  <input id="c-checkbox__modal6" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal6" className="c-checkbox__label">American Cultures Center</label>
                </li>
                <li>
                  <input id="c-checkbox__modal7" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal7" className="c-checkbox__label">American Cultures and Global Contexts Center</label>
                </li>
                <li>
                  <input id="c-checkbox__modal8" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal8" className="c-checkbox__label">Bay Area International Group</label>
                </li>
                <li>
                  <input id="c-checkbox__modal9" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal9" className="c-checkbox__label">Berkeley Food Institute</label>
                </li>
                <li>
                  <input id="c-checkbox__modal10" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal10" className="c-checkbox__label">Berkeley Graduate School of Journalism</label>
                </li>
                <li>
                  <input id="c-checkbox__modal11" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal11" className="c-checkbox__label">Berkeley Natural History Museum</label>
                  <ul>
                    <li>
                      <input id="c-checkbox__modal12" type="checkbox" className="c-checkbox__input"/>
                      <label htmlFor="c-checkbox__modal12" className="c-checkbox__label">UCB Moorea Class: Biology and Geomorphology of Tropical Islands</label>
                    </li>
                  </ul>
                </li>
                <li>
                  <input id="c-checkbox__modal13" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal13" className="c-checkbox__label">Berkeley Program in Law and Economics</label>
                </li>
                <li>
                  <input id="c-checkbox__modal14" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal14" className="c-checkbox__label">Berkeley Program on Housing and Urban Policy</label>
                </li>
                <li>
                  <input id="c-checkbox__modal15" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal15" className="c-checkbox__label">Berkeley Roundtable on the International Economy</label>
                </li>
                <li>
                  <input id="c-checkbox__modal16" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal16" className="c-checkbox__label">Biostatistics</label>
                </li>
                <li>
                  <input id="c-checkbox__modal17" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal17" className="c-checkbox__label">Bixby Center for Global Reproductive Health</label>
                </li>
                <li>
                  <input id="c-checkbox__modal18" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal18" className="c-checkbox__label">Bixby Center for Population, Health & Sustainability</label>
                </li>
                <li>
                  <input id="c-checkbox__modal19" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal19" className="c-checkbox__label">Boalt Hall</label>
                </li>
                <li>
                  <input id="c-checkbox__modal20" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal20" className="c-checkbox__label">Bourns College of Engineering</label>
                </li>
                <li>
                  <input id="c-checkbox__modal21" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal21" className="c-checkbox__label">Center for Environmental Research and Technology</label>
                </li>
                <li>
                  <input id="c-checkbox__modal22" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal22" className="c-checkbox__label">California Academic Partnership Program</label>
                </li>
                <li>
                  <input id="c-checkbox__modal23" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal23" className="c-checkbox__label">California Center for Population Research</label>
                </li>
                <li>
                  <input id="c-checkbox__modal24" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal24" className="c-checkbox__label">California Community College Collaborative (C4)</label>
                </li>
                <li>
                  <input id="c-checkbox__modal25" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal25" className="c-checkbox__label">California Digital Library</label>
                </li>
                <li>
                  <input id="c-checkbox__modal26" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal26" className="c-checkbox__label">California Health Benefits Review Program</label>
                </li>
                <li>
                  <input id="c-checkbox__modal27" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal27" className="c-checkbox__label">California Policy Research Center</label>
                </li>
                <li>
                  <input id="c-checkbox__modal28" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal28" className="c-checkbox__label">California Sea Grant College Program</label>
                </li>
                <li>
                  <input id="c-checkbox__modal29" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal29" className="c-checkbox__label">California Social Work Education Center</label>
                </li>
                <li>
                  <input id="c-checkbox__modal30" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal30" className="c-checkbox__label">Center for African Studies</label>
                </li>
                <li>
                  <input id="c-checkbox__modal31" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal31" className="c-checkbox__label">Center for Agroecology and Sustainable Food Systems</label>
                </li>
                <li>
                  <input id="c-checkbox__modal32" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal32" className="c-checkbox__label">Center for Bioinformatics and Molecular Biostatistics</label>
                </li>
                <li>
                  <input id="c-checkbox__modal33" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal33" className="c-checkbox__label">Center for Black Studies Research</label>
                </li>
                <li>
                  <input id="c-checkbox__modal34" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal34" className="c-checkbox__label">Center for Comparative Immigration Studies</label>
                </li>
                <li>
                  <input id="c-checkbox__modal35" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal35" className="c-checkbox__label">Center for Complex and Nonlinear Science</label>
                </li>
                <li>
                  <input id="c-checkbox__modal36" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal36" className="c-checkbox__label">Center for Conservation Biology</label>
                </li>
                <li>
                  <input id="c-checkbox__modal37" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal37" className="c-checkbox__label">Center for Control, Dynamical Systems, and Computation</label>
                </li>
              </ul>
            </div>
            <div className="c-modal__footer">
              <button className="c-modal__button-close">Clear</button>
              <button className="o-button__7" onClick={this.handleCloseModal}>Cancel</button>
              <button className="o-button__3">Select</button>
            </div>
          </ReactModal>
        </div>
        {/* End Facet Modal */}

      </div>
    )
  }
}

module.exports = SearchLayout;
