// ##### Browse Campuses Layout ##### //

import React from 'react'
import Header1Comp from '../components/Header1Comp.jsx'
import NavComp from '../components/NavComp.jsx'
import NavSubComp from '../components/NavSubComp.jsx'
import CampusSelectorComp from '../components/CampusSelectorComp.jsx'
import Breakpoints from '../../js/breakpoints.json'
import WellComp from '../components/WellComp.jsx'
import DescriptionListComp from '../components/DescriptionListComp.jsx'
import FooterComp from '../components/FooterComp.jsx'

class BrowseCampusesLayout extends React.Component {
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
        <nav className="c-breadcrumb">
          <a href="">eScholarship</a>
          <a className="c-breadcrumb-link--active" href="">Journals</a>
        </nav>
        <div className="c-columns">
          <main id="maincontent">
            <section className="o-columnbox1">
              <header>
                <h1>Campuses</h1>
              </header>
              <WellComp />
              <DescriptionListComp />
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

module.exports = BrowseCampusesLayout;
