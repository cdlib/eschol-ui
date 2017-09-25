// ##### Journal Item HTML Layout ##### //

import React from 'react'
import Header2Comp from '../components/Header2Comp.jsx'
import SubheaderComp from '../components/SubheaderComp.jsx'
import NavBarComp from '../components/NavBarComp.jsx'
import TabsComp from '../components/TabsComp.jsx'
import JumpComp from '../components/JumpComp.jsx'
import RelatedItemsComp from '../components/RelatedItemsComp.jsx'
import FooterComp from '../components/FooterComp.jsx'

class JournalItemHtmlLayout extends React.Component {
  render() {
    return (
      <div>
        <a href="#maincontent" className="c-skipnav">Skip to main content</a>
        <Header2Comp />
        <SubheaderComp />
        <NavBarComp />
        <nav className="c-breadcrumb">
          <a href="">eScholarship</a>
          <a href="">Campus Name</a>
          <a href="">Journal Name</a>
          <a className="c-breadcrumb-link--active" href="">From the New Heights</a>
        </nav>
        <div className="c-columns--sticky-sidebar">
          <main id="maincontent">
            <TabsComp />
          </main>
          <aside>
            <section className="o-columnbox1">
              <header>
                <h2>Jump To</h2>
              </header>
              <JumpComp />
            </section>
            <section className="o-columnbox1">
              <header>
                <h2>Related Items</h2>
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

module.exports = JournalItemHtmlLayout;
