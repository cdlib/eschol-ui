// ##### About Layout ##### //

import React from 'react'
import TestMessageComp from '../components/TestMessageComp.jsx'
import Header1Comp from '../components/Header1Comp.jsx'
import NavComp from '../components/NavComp.jsx'
import NavSubComp from '../components/NavSubComp.jsx'
import Breakpoints from '../../js/breakpoints.json'
import BreadcrumbComp from '../components/BreadcrumbComp.jsx'
import RelatedItemsComp from '../components/RelatedItemsComp.jsx'
import ModalComp from '../components/ModalComp.jsx'
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
      <div>
        <TestMessageComp />
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
        <BreadcrumbComp />
        <div className="c-columns">
          <main id="maincontent">
            <section className="o-columnbox1 c-clientmarkup">
              <header>
                <h2>About eScholarship</h2>
              </header>
              <h1>Heading Level 1 Lorem Ipsum Dolor Sit Amet</h1>
              <h2>Heading Level 2 Lorem Ipsum Dolor Sit Amet</h2>
              <h3>Heading Level 3 Lorem Ipsum Dolor Sit Amet</h3>
              <h4>Heading Level 4 Lorem Ipsum Dolor Sit Amet</h4>
              <p>Paragraph containing links. eScholarship provides a suite of open access, <a href="https://escholarship.org">scholarly publishing services and research tools</a> that enable departments, research units, publishing programs, and individual scholars associated with the <a href="http://www.ucop.edu">University of California</a> to have direct control over the creation and dissemination of the full range of their scholarship.</p>
              <ul>
                <li>Unordered list</li>
                <li>Debitis voluptate, corporis velit fugiat nostrum culpa</li>
                <li>Aperiam natus vero, dolorum facere a consectetur odit eos eaque sit accusamus</li>
                <li>Et fugiat dolorum dolores quo totam repellat</li>
              </ul>
              <ol>
                <li>Ordered list
                </li>
                <li>Vero reprehenderit eos quasi ut commodi deleniti incidunt alias suscipit quia iure repellendus
                </li>
                <li>Omnis iusto impedit unde autem, nostrum quos quaerat rerum voluptate quasi
                </li>
                <li>Iusto, sit repellat facilis obcaecati ipsa exercitationem id voluptatibus impedit blanditiis
                </li>
              </ol>
              <blockquote>Blockquote. Magni quo assumenda, voluptatum tempore itaque perspiciatis excepturi earum voluptatibus dolorum placeat nam fugiat inventore praesentium adipisci libero eos, fugit veritatis minima.
              </blockquote>
              <p>Bold and italicized text. Cupiditate provident voluptas, <strong>commodi quos eius necessitatibus eveniet</strong> modi architecto quas <em>itaque culpa dolor possimus rem magni laboriosam!</em> Saepe beatae deserunt minus.
              </p>
              <ModalComp />
            </section>
          </main>
          <aside>
            <section className="o-columnbox1 c-sidebarnav">
              <header>
                <h2>Campus Contact</h2>
              </header>
              <p>Open Access support team:</p>
              <p><a className="o-textlink__secondary" href="mailto:OAsupport@lib.ucdavis.edu">OAsupport@lib.ucdavis.edu</a></p>
            </section>
            <section className="o-columnbox1">
              <header>
                <h2>UC Davis Datasets</h2>
              </header>
                <p><img src="https://escholarship.org/assets/ae9113630087df93bf4da32614fddb8ca48bfbc40886118f043c278671849ece" alt="Dash logo"/></p>
                <p>Publish the data that accompanies your research in <a className="o-textlink__secondary" href="https://dash.ucdavis.edu/stash">UC Davis Dash</a>.</p>
            </section>
            <section className="o-columnbox1 c-sidebarnav">
              <header>
                <h2>Recent Articles</h2>
              </header>
              <RelatedItemsComp />
            </section>
          </aside>
        </div>
        <FooterComp />
      </div>
    )
  }
}

module.exports = AboutLayout;
