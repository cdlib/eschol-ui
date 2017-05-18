// ##### About Layout ##### //

import React from 'react'
import Header1Comp from '../components/Header1Comp.jsx'
import NavComp from '../components/NavComp.jsx'
import NavSubComp from '../components/NavSubComp.jsx'
import Breakpoints from '../../js/breakpoints.json'
import SidebarNavComp from '../components/SidebarNavComp.jsx'
import WellComp from '../components/WellComp.jsx'
import FooterComp from '../components/FooterComp.jsx'

class BrowseJournalsLayout extends React.Component {
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
        <div className="c-subheader1">
          <div className="c-subheader1__header">
            <Header1Comp />
          </div>
          <div className="c-subheader1__nav">
            <div className="c-nav">
              <details open={this.state.isOpen ? "open" : ""} className="c-nav__main">
                <summary className="c-nav__main-button"><span>Menu</span>
                </summary>
                <nav className={this.state.submenuActive ? "c-nav__main-items--submenu-active" : "c-nav__main-items"}>
                  <NavSubComp name="Campus Sites" open={this.state.submenuActive == 1} onSubmenuChanged={(flag)=> this.setState({submenuActive:flag ? 1 : null})}>
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
                  <a href="" className="c-nav__item--active">UC Open Access Policies</a>
                  <a href="">eScholarship Publishing</a>
                </nav>
              </details>
            </div>
          </div>
          <div className="c-subheader1__button">
            <button className="o-button__3">Get Started</button>
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
                <h2>Journals</h2>
              </header>
              <WellComp />
              {/* component containing input droplists to go here */}
                <label htmlFor="o-input__droplist-label2a">Show:</label>
                <select name="" id="o-input__droplist-label2a">
                  <option value="">All</option>
                  <option value="">Actively publishing</option>
                  <option value="">Archived</option>
                </select>
              
                <label htmlFor="o-input__droplist-label2b">Campus:</label>
                <select name="" id="o-input__droplist-label2b">
                  <option value="">All</option>
                  <option value="">Documents</option>
                  <option value="">Images</option>
                  <option value="">Videos</option>
                  <option value="">Others</option>
                </select>
              {/* </div> */}
              {/* list component to go here */}
                <ul>
                  <li>
                    <a href="">Archive of the Yiddish Literary Journal Kheshbn (UCLA)</a>
                  </li>
                  <li>
                    <a href="">Asian Pacific American Law Journal (UCLA)</a>
                  </li>
                  <li>
                    <a href="">Berkeley Chemical Review (UC Berkeley)  - ARCHIVE</a>
                  </li>
                  <li>
                    <a href="">Berkeley Planning Journal (UC Berkeley)</a>
                  </li>
                  <li>
                    <a href="">Berkeley Review of Education (UC Berkeley)</a>
                  </li>
                  <li>
                    <a href="">Berkeley Scientific Journal (UC Berkeley)</a>
                  </li>
                  <li>
                    <a href="">Berkeley Undergraduate Journal (UC Berkeley)</a>
                  </li>
                  <li>
                    <a href="">Berkeley Undergraduate Journal of Classics (UC Berkeley)</a>
                  </li>
                  <li>
                    <a href="">Biogeographia – The Journal of Integrative Biogeography (UC Merced)</a>
                  </li>
                </ul>
              {/* </div> */}
            </section>
          </main>
          <aside>
            <section className="o-columnbox1">
              <header>
                <h2>Featured Journals</h2>
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

module.exports = BrowseJournalsLayout;
