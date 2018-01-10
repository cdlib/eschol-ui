// ##### Journal Splashy Layout ##### //

import React from 'react'
import Header2Comp from '../components/Header2Comp.jsx'
import NavBarComp from '../components/NavBarComp.jsx'
import BreadcrumbComp from '../components/BreadcrumbComp.jsx'
import MarqueeComp from '../components/MarqueeComp.jsx'
import ItemActionsComp from '../components/ItemActionsComp.jsx'
import CustomSelectorObj from '../objects/CustomSelectorObj.jsx'
import IssueComp from '../components/IssueComp.jsx'
import PubComp from '../components/PubComp.jsx'
import JournalInfoComp from '../components/JournalInfoComp.jsx'
import RelatedItemsComp from '../components/RelatedItemsComp.jsx'
import FooterComp from '../components/FooterComp.jsx'
import $ from 'jquery'

// Load dotdotdot in browser but not server:
if (!(typeof document === "undefined")) {
  const dotdotdot = require('jquery.dotdotdot')
}

class JournalSplashyLayout extends React.Component {
  componentDidMount() {
    $('.c-pub__heading, .c-pub__abstract').dotdotdot({watch: 'window'
    });
  }
  render() {
    return (
      <div>
        <a href="#maincontent" className="c-skipnav">Skip to main content</a>
        <Header2Comp />
        <div className="c-subheader">
          <div className="o-customselector--campus">
            <div className="o-customselector__heading">
              <a href="">UC Office of the President</a>
            </div>
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
          <a className="c-subheader__banner--wide" href="">
            <h1>Western Journal of Emergency Medicine</h1>
            <img src="images/temp_journal-banner.png" alt="Western Journal of Emergency Medicine"/>
          </a>
          <div className="c-subheader__sidebar">
            <button className="o-button__3">Submit</button>
            <button className="o-button__3">Manage <span className="c-subheader__button-fragment">Submissions</span></button>
          </div>
        </div>
        <NavBarComp />
        <BreadcrumbComp />
        <MarqueeComp />
        <div className="c-columns">
          <main id="maincontent">
            <section className="o-columnbox1">
              <ItemActionsComp />
              <CustomSelectorObj />
              <IssueComp />
              <h3 className="o-heading1a">Table of Contents</h3>
              <div className="o-dividecontent2x--ruled">
                <PubComp />
                <img src="http://placehold.it/300x150?text=Image" alt="" />
                <PubComp />
                <img src="http://placehold.it/300x150?text=Image" alt="" />
                <PubComp />
              </div>
            </section>
          </main>
          <aside>
            <section className="o-columnbox1">
              <header>
                <h2>Journal Information</h2>
              </header>
              <JournalInfoComp />
            </section>
            <section className="o-columnbox1">
              <header>
                <h2>Featured Articles</h2>
              </header>
              <RelatedItemsComp />
            </section>
            <section className="o-columnbox1">
              <header>
                <h2>Follow us on Twitter</h2>
              </header>
              [content to go here]
            </section>
          </aside>
        </div>
        <div className="c-toplink">
          <a href="#top">Top</a>
        </div>
        <FooterComp />
      </div>
    )
  }
}

module.exports = JournalSplashyLayout;
