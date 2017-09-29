// ##### Home Layout ##### //

import React from 'react'
import Header1Comp from '../components/Header1Comp.jsx'
import NavComp from '../components/NavComp.jsx'
import NavSubComp from '../components/NavSubComp.jsx'
import Breakpoints from '../../js/breakpoints.json'
import HeroComp from '../components/HeroComp.jsx'
import FooterComp from '../components/FooterComp.jsx'

class HomeLayout extends React.Component {
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
        <HeroComp />
        <section className="c-togglesection">
          <header>
            <h2>Why Open Access?</h2>
          </header>
          <div className="c-togglesection__content">
            <h3 className="o-heading4a">Good for Authors</h3>
            <p>Open access research is read and cited more than access-restricted scholarship, increasing the academic impact of and public engagement with your ideas.</p>
            <h3 className="o-heading4a">Good for Readers</h3>
            <p>The University of California’s Open Access policies extend the University’s public mission to share broadly -- throughout California, the nation, and the world -- the research and knowledge produced at our campuses.</p>
            <h3>Metrics of use</h3>
            <div className="o-stat--item">
              <a href="">24,844</a> Items
            </div>
            <div className="o-stat--units">
              <a href="">119</a> Research Units
            </div>
            <div className="o-stat--passed">
              <a href="">6,532</a> Items since UC <br/> OA Policy passed
            </div>
          </div>
        </section>
        <FooterComp />
      </div>
    )
  }
}

module.exports = HomeLayout;
