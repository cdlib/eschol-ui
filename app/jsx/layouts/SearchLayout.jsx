// ##### Search Layout ##### //

import React from 'react'
import Header1Comp from '../components/Header1Comp.jsx'
import NavComp from '../components/NavComp.jsx'
import NavSubComp from '../components/NavSubComp.jsx'
import Breakpoints from '../../js/breakpoints.json'
import ExportComp from '../components/ExportComp.jsx'
import FilterComp from '../components/FilterComp.jsx'
import CheckboxComp from '../components/CheckboxComp.jsx'
import SortComp from '../components/SortComp.jsx'
import PaginationComp from '../components/PaginationComp.jsx'
import InfoPagesComp from '../components/InfoPagesComp.jsx'
import ScholWorksComp from '../components/ScholWorksComp.jsx'
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
  widthChange = ()=> {
    this.setState({isOpen: this.mq.matches})
  }
  render() {
    return (
      <div className="l-search">
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
        <ExportComp />
        <div className="c-columns">
          <aside>
            <FilterComp />
            <details className="c-facetbox">
              <summary className="c-facetbox__summary">Refine By</summary>
              <div className="c-checkbox">
                <input id="c-checkbox__number6" type="checkbox" className="c-checkbox__input"/>
                <label htmlFor="c-checkbox__number6" className="c-checkbox__label">Peer-Reviewed only (##)</label>
              </div>
            </details>
            <details className="c-facetbox">
              <summary className="c-facetbox__summary">Research</summary>
              <div className="c-checkbox">
                <input id="c-checkbox__number7" type="checkbox" className="c-checkbox__input"/>
                <label htmlFor="c-checkbox__number7" className="c-checkbox__label">Articles (##)</label>
                <input id="c-checkbox__number8" type="checkbox" className="c-checkbox__input"/>
                <label htmlFor="c-checkbox__number8" className="c-checkbox__label">Books (##)</label>
                <input id="c-checkbox__number9" type="checkbox" className="c-checkbox__input"/>
                <label htmlFor="c-checkbox__number9" className="c-checkbox__label">Journals (##)</label>
              </div>
            </details>
            <details className="c-facetbox">
              <summary className="c-facetbox__summary">Content Type</summary>
                <CheckboxComp />
            </details>
          </aside>
          <main>
            <div className="l-search__sort-pagination">
              <SortComp />
              <PaginationComp />
            </div>
            <section className="o-columnbox1">
              <header>
                <h2 className="o-columnbox1__heading">Informational Pages (12 results)</h2>
              </header>
              <InfoPagesComp />
            </section>
            <section className="o-columnbox1">
              <header>
                <h2 className="o-columnbox1__heading">Scholarly Works (12,023 results)</h2>
              </header>
              <ScholWorksComp />
              <ScholWorksComp />
            </section>
          </main>
        </div>
        <FooterComp />
      </div>
    )
  }
}

module.exports = SearchLayout;
