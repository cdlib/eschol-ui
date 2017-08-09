// ##### Browse Departments Layout ##### //

import React from 'react'
import Header2Comp from '../components/Header2Comp.jsx'
import Breakpoints from '../../js/breakpoints.json'
import WellComp from '../components/WellComp.jsx'
import ToggleListComp from '../components/ToggleListComp.jsx'
import FooterComp from '../components/FooterComp.jsx'

class BrowseDepartmentsLayout extends React.Component {
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
  widthChange = ()=> {
    this.setState({isOpen: this.mq.matches})
  }
  render() {
    return (
      <div>
      <a href="#maincontent" className="c-skipnav">Skip to main content</a>
        <Header2Comp />
        <div className="c-subheader">
          <div className="o-customselector--campus">
            <h1 className="o-customselector__heading">
              <a href="">UC Office of the President</a>
            </h1>
            <details className="o-customselector__selector">
              <summary aria-label="Select a different item"></summary>
              <div className="o-customselector__menu">
                <div className="o-customselector__sub-heading" id="o-customselector__sub-heading">eScholarship at &hellip;</div>
                <ul className="o-customselector__items">
                  <li><a href="">UC Berkeley</a></li>
                  <li><a href="">UC Davis</a></li>
                  <li><a href="">UC Irvine</a></li>
                  <li><a href="">UCLA</a></li>
                  <li><a href="">UC Merced</a></li>
                  <li><a href="">UC Riverside</a></li>
                  <li><a href="">UC San Diego</a></li>
                  <li><a href="">UC San Francisco</a></li>
                  <li><a href="">UC Santa Barbara</a></li>
                  <li><a href="">UC Santa Cruz</a></li>
                  <li><a href="">UC Office of the President</a></li>
                  <li><a href="">UC Press</a></li>
                </ul>
              </div>
            </details>
          </div>
          <img className="c-subheader__banner" src="images/temp_journal-banner.png" alt=""/>
          <div className="c-subheader__sidebar">
            <button className="o-button__3">Deposit</button>
            <div className="c-subheader__sidebar-text">University of California, Berkeley <br/>Publications in eScholarship</div>
            <div className="c-subheader__sidebar-number">16,464</div>
          </div>
        </div>
        <div className="c-navbar">
          <div className="c-nav">
            <details open={this.state.isOpen ? "open" : ""} className="c-nav__main">
              <summary className="c-nav__main-button"><span>Menu</span>
              </summary>
              <nav className={this.state.submenuActive ? "c-nav__main-items--submenu-active" : "c-nav__main-items"}>
                <a href="" className="c-nav__item--active">Open Access Policies</a>
                <a href="">Journals</a>
                <a href="">Academic Units</a>
              </nav>
            </details>
          </div>
        </div>
        <nav className="c-breadcrumb">
          <a href="">eScholarship</a>
          <a href="">UC Berkeley</a>
          <a className="c-breadcrumb-link--active" href="">Academic Units</a>
        </nav>
        <div className="c-columns">
          <main id="maincontent">
            <section className="o-columnbox1">
              <header>
                <h1>Academic Units</h1>
              </header>
              <WellComp />
              <ToggleListComp />
            </section>
          </main>
          <aside>
            <section className="o-columnbox1">
              <header>
                <h1>Featured Journals</h1>
              </header>
              <a href="" className="o-journal1">
                <figure>
                  <img src="images/sample_journal1.png" alt="sample journal"/>
                  <figcaption>Chicana-Latina Law Review</figcaption>
                </figure>
              </a>
              <a href="" className="o-journal1">
                <figure>
                  <img src="images/sample_journal1.png" alt="sample journal"/>
                  <figcaption>Chicana-Latina Law Review</figcaption>
                </figure>
              </a>
              <a href="" className="o-journal1">
                <figure>
                  <img src="images/sample_journal1.png" alt="sample journal"/>
                  <figcaption>Chicana-Latina Law Review</figcaption>
                </figure>
              </a>
            </section>
          </aside>
        </div>
        <FooterComp />
      </div>
    )
  }
}

module.exports = BrowseDepartmentsLayout;
