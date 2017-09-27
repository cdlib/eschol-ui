// ##### Journal Splashy Layout ##### //

import React from 'react'
import Header2Comp from '../components/Header2Comp.jsx'
import NavBarComp from '../components/NavBarComp.jsx'
import BreadcrumbComp from '../components/BreadcrumbComp.jsx'
import MarqueeComp from '../components/MarqueeComp.jsx'
import ItemActionsComp from '../components/ItemActionsComp.jsx'
import CustomSelectorObj from '../objects/CustomSelectorObj.jsx'
import MediaListComp from '../components/MediaListComp.jsx'
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
              <div className="c-pubpreview">
                <a className="c-pubpreview__img" href="">
                  <img src="http://placehold.it/150x200?text=Image" alt="placeholder" />
                </a>
                <div className="c-pub">
                  <h3 className="c-pub__heading">
                    <a href="">Language Ideologies and Hegemonic Factors Imposed upon Judeo-Spanish Speaking Communities</a>
                  </h3>
                  <div className="c-authorlist">
                    <ul className="c-authorlist__list">
                    {/* links can be left out of the list if no links are desired: */}
                      <li><a href="">Leung, Wilson</a></li>
                      <li><a href="">Shaffer, Christopher D</a></li>
                      <li><a href="">Reed, Laura K</a></li>
                      <li><a href="">Smith, Sheryl T</a></li>
                      <li><a href="">Barshop, William</a></li>
                      <li><a href="">Dirkes, William</a></li>
                      <li><a href="">Dothager, Matthew</a></li>
                      <li><a href="">Lee, Paul</a></li>
                      <li><a href="">Wong, Jeannette</a></li>
                      <li><a href="">Xiong, David</a></li>
                      <li><a href="">Yuan, Han</a></li>
                      <li><a href="">Bedard James E J</a></li>
                      <li><a href="">Machone, Joshua F</a></li>
                      <li><a href="">Patterson, Seantay D</a></li>
                      <li><a href="">Price, Amber L</a></li>
                      <li><a href="">Turner, Bryce A</a></li>
                      <li><a href="">Robic, Srebrenka</a></li>
                      <li><a href="" className="c-authorlist__list-more-link">et al.</a></li>
                    </ul>
                  </div>
                  <div className="c-pub__abstract">
                    <p>Itaque iure laboriosam est porro ipsam veritatis quidem error nostrum officiis molestias aperiam voluptate voluptas odit suscipit velit, repellendus non, provident quia quibusdam labore. Id consectetur, reiciendis soluta sint earum nam nihil autem tempora aperiam adipisci magnam quidem quia velit, eum quasi veniam magni explicabo quae commodi quod vitae libero. In, officiis! Qui, expedita nihil ipsa quibusdam quia, enim voluptas corrupti placeat.
                    </p>
                  </div>
                  <MediaListComp />
                </div>
              </div>
              <h3 className="o-heading1a">Table of Contents</h3>
              <div className="o-dividecontent2x--ruled">
                <PubComp />
                <img className="o-imagecontent" src="http://placehold.it/300x150?text=Image" alt="" />
                <PubComp />
                <img className="o-imagecontent" src="http://placehold.it/300x150?text=Image" alt="" />
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
        <FooterComp />
      </div>
    )
  }
}

module.exports = JournalSplashyLayout;
