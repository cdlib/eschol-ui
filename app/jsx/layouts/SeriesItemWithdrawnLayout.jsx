// ##### About Layout ##### //

import React from 'react'
import Header2Comp from '../components/Header2Comp.jsx'
import Subheader2Comp from '../components/Subheader2Comp.jsx'
import NavBarComp from '../components/NavBarComp.jsx'
import TabsComp from '../components/TabsComp.jsx'
import JumpComp from '../components/JumpComp.jsx'
import FooterComp from '../components/FooterComp.jsx'

class SeriesItemWithdrawnLayout extends React.Component {
  render() {
    return (
      <div>
        <Header2Comp />
        <Subheader2Comp />
        <NavBarComp />
        <nav className="c-breadcrumb">
          <a href="">eScholarship</a>
          <a href="">Campus Name</a>
          <a href="">Journal Name</a>
          <a className="c-breadcrumb-link--active" href="">From the New Heights</a>
        </nav>
        <div className="c-columns">
          <main>
            <div className="c-tabs">
              <div className="c-tabs__tabs">
                <button className="c-tabs__button-more">...</button>
                <button className="c-tabs__button--active">Main Content</button>
              </div>
              <div className="c-tabs__content">
                [item withdrawn content goes here]
              </div>
            </div>
          </main>
          <aside>
            <section className="o-columnbox2">
              <header>
                <h2>Jump To</h2>
                <JumpComp />
              </header>
            </section>
            <section className="o-columnbox2">
              <header>
                <h2>Related Items</h2>
              </header>
              <p><a className="o-textlink__secondary" href="">Collaborative Film Authorship: Writing Latinas Into the Picture</a><br/>CSW update</p>
              <p><a className="o-textlink__secondary" href="">Sporting Bodies, Displaying History: Black Embodiment</a><br/>UCLA Electronic Theses and Dissertations</p>
              <p><a className="o-textlink__secondary" href="">United States-Based Latina Producers of Feature Films</a><br/>UCLA Electronic Theses and Dissertations</p>
            </section>
          </aside>
        </div>
        <FooterComp />
      </div>
    )
  }
}

module.exports = SeriesItemWithdrawnLayout;
