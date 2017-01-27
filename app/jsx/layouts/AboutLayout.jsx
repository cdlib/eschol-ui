// ##### About Layout ##### //

import React from 'react'
import Header1Comp from '../components/Header1Comp.jsx'
import NavComp from '../components/NavComp.jsx'
import NavSubComp from '../components/NavSubComp.jsx'
import Breakpoints from '../../js/breakpoints.json'
import BreadcrumbComp from '../components/BreadcrumbComp.jsx'
import SidebarNavComp from '../components/SidebarNavComp.jsx'
import FooterComp from '../components/FooterComp.jsx'

class AboutLayout extends React.Component {
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
      <div className="l-about">
        <Header1Comp />
        <div className="c-navbar">
          <nav className="c-nav">
            <details open={this.state.isOpen ? "open" : ""} className="c-nav__main">
              <summary className="c-nav__main-button">Menu
              </summary>
              <div className={this.state.submenuActive ? "c-nav__main-items--submenu-active" : "c-nav__main-items"} role="list">
                <NavSubComp name="Campus Sites" open={this.state.submenuActive == 1} onSubmenuChanged={(flag)=> this.setState({submenuActive:flag ? 1 : null})}>
                  <a href="" role="listitem">UC Berkeley</a>
                  <a href="" role="listitem">UC Davis</a>
                  <a href="" role="listitem">UC Irvine</a>
                  <a href="" role="listitem">UCLA</a>
                  <a href="" role="listitem">UC Merced</a>
                  <a href="" role="listitem">UC Riverside</a>
                  <a href="" role="listitem">UC San Diego</a>
                  <a href="" role="listitem">UC San Francisco</a>
                  <a href="" role="listitem">UC Santa Barbara</a>
                  <a href="" role="listitem">UC Santa Cruz</a>
                  <a href="" role="listitem">UC Office of the President</a>
                  <a href="" role="listitem">UC Press</a>
                </NavSubComp>
                <a href="" role="listitem" className="c-nav__item--active">UC Open Access Policies</a>
                <a href="" role="listitem">eScholarship Publishing</a>
              </div>
            </details>
          </nav>
        </div>
        <BreadcrumbComp />
        <div className="c-columns">
          <aside>
            <section className="o-columnbox2 c-sidebarnav">
              <header>
                <h1 className="o-columnbox2__heading">About eScholarship</h1>
              </header>
              <SidebarNavComp />
            </section>
          </aside>
          <main>
            <section className="o-columnbox1">
              <header>
                <h1 className="o-columnbox1__heading">About eScholarship</h1>
              </header>
              <p>eScholarship provides a suite of open access, scholarly publishing services and research tools that enable departments, research units, publishing programs, and individual scholars associated with the University of California to have direct control over the creation and dissemination of the full range of their scholarship.
              <p>With eScholarship, you can publish the following original scholarly works on a dynamic research platform available to scholars worldwide:</p>
              </p>
              <ul>
                <li><a className="o-textlink__primary" href="">Books</a></li>
                <li><a className="o-textlink__primary" href="">Journals</a></li>
                <li><a className="o-textlink__primary" href="">Working Papers</a></li>
                <li><a className="o-textlink__primary" href="">Previously Published Works</a></li>
                <li><a className="o-textlink__primary" href="">Conferences</a></li>
              </ul>
              <p>eScholarship also provides deposit and dissemination services for postprints, or previously published articles.</p>
              <p>Publications benefit from manuscript and peer-review management systems, as well as a full range of persistent access and preservation services.</p>
              <p>Learn more about what to expect from publishing with eScholarship.</p>
              <p>eScholarship is a service of the Publishing Group of the California Digital Library.</p>
              <p>Questions? <a className="o-textlink__primary" href="">Contact us</a>.</p>
            </section>
          </main>
        </div>
        <FooterComp />
      </div>
    )
  }
}

module.exports = AboutLayout;
