// ##### About Layout ##### //

import React from 'react'
import Header2Comp from '../components/Header2Comp.jsx'
import SubheaderComp from '../components/SubheaderComp.jsx'
import NavBarComp from '../components/NavBarComp.jsx'
import TabsComp from '../components/TabsComp.jsx'
import JumpComp from '../components/JumpComp.jsx'
import FooterComp from '../components/FooterComp.jsx'

class ItemLayout extends React.Component {
  render() {
    return (
      <div className="l-item">
        <Header2Comp />
        <SubheaderComp />
        <NavBarComp />
        <nav className="c-breadcrumb">
          <a href="">eScholarship</a>
          <a href="">Campus Name</a>
          <a href="">Journal Name</a>
          <a className="c-breadcrumb-link--active" href="">From the New Heights</a>
        </nav>
        <div className="c-columns">
          <main>
            <TabsComp />
          </main>
          <aside>
            <section className="o-columnbox2">
              <header>
                <h2 className="o-columnbox2__heading">Jump To</h2>
                <JumpComp />
              </header>
            </section>
            <section className="o-columnbox2">
              <header>
                <h2 className="o-columnbox2__heading">Related Items</h2>
                </header>
                [content to go here]
            </section>
          </aside>
        </div>
        <FooterComp />
      </div>
    )
  }
}

module.exports = ItemLayout;
