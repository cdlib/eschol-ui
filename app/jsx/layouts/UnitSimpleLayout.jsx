// ##### Unit Simple Layout ##### //

import React from 'react'
import $ from 'jquery'
import Header2Comp from '../components/Header2Comp.jsx'
import NavBarComp from '../components/NavBarComp.jsx'
import ShareComp from '../components/ShareComp.jsx'
import AuthorListComp from '../components/AuthorListComp.jsx'
import PubLocationComp from '../components/PubLocationComp.jsx'
import PubDataComp from '../components/PubDataComp.jsx'
import ViewExternalComp from '../components/ViewExternalComp.jsx'
import FooterComp from '../components/FooterComp.jsx'
import NavSubComp from '../components/NavSubComp.jsx'
import Breakpoints from '../../js/breakpoints.json'
import SocialIconsComp from '../components/SocialIconsComp.jsx'
import LanguageComp from '../components/LanguageComp.jsx'
import RelatedItemsComp from '../components/RelatedItemsComp.jsx'

// Load dotdotdot in browser but not server:
if (!(typeof document === "undefined")) {
  const dotdotdot = require('jquery.dotdotdot')
}

class UnitSimpleLayout extends React.Component {
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
  componentDidMount() {
    $('.c-pub__heading, .c-pub__abstract').dotdotdot({watch: 'window'
    });

    $(this.element).dotdotdot({
      watch: 'window',
      after: '.o-columnbox__truncate-more',
      callback: ()=> $(this.element).find(".o-columnbox__truncate-more").click(this.destroydotdotdot)
    });
    setTimeout(()=> $(this.element).trigger('update'), 0) // removes 'more' link upon page load if less than truncation threshold
  }
  destroydotdotdot = event => {
    $(this.element).trigger('destroy')
    $(this.element).removeClass("o-columnbox__truncate1")
  }
  render() {
    return (
      <div>
        <a href="#maincontent" className="c-skipnav">Skip to main content</a>
        <Header2Comp />
        <div className="c-subheader">
          <div className="o-customselector--campus">
            <div className="o-customselector__heading">
              <a href="">UC Riverside</a>
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
            <h1>UC Riverside</h1>
            <img src="images/logo_ucr.svg" alt="UC Riverside logo"/>
          </a>
          <div className="c-subheader__sidebar">
            <button className="o-button__3">Deposit</button>
            <button className="o-button__3">Manage <span className="c-subheader__button-fragment">Submissions</span></button>
          </div>
        </div>
        <div className="c-navbar">
          <nav className="c-nav">
            <details open={this.state.isOpen ? "open" : ""} className="c-nav__main" ref={(domNode)=> this.details = domNode}>
              <summary className="c-nav__main-button" onClick = {(event)=>{
                this.setState({isOpen: !this.details.open})
                event.preventDefault()
              }}><span>Menu</span>
              </summary>
              <ul className={this.state.submenuActive ? "c-nav__main-items--submenu-active" : "c-nav__main-items"}>
                <li><a href="">Unit Home</a></li>
                <li>
                  <NavSubComp name="About" open={this.state.submenuActive == 2} onSubmenuChanged={(flag)=> this.setState({submenuActive:flag ? 2 : null})}>
                    <ul>
                      <li><a href="">About Us</a></li>
                      <li><a href="">Aims &amp; Scope</a></li>
                      <li><a href="">Editorial Board</a></li>
                    </ul>
                  </NavSubComp>
                </li>
                <li><a href=""  className="c-nav__item--active">Policies</a></li>
                <li><a href="">Submission Guidelines</a></li>
                <li><a href="">Contact</a></li>
              </ul>
            </details>
          </nav>
          <SocialIconsComp />
          <LanguageComp />
        </div>
        <nav className="c-breadcrumb">
          <ul>
            <li><a href="">eScholarship</a></li>
            <li><a href="">Campus Name</a></li>
            <li><a className="c-breadcrumb-link--active" href="">Unit Name</a></li>
          </ul>
        </nav>
        <div className="c-columns">
          <main id="maincontent">
            <section className="o-columnbox2">
              <header>
                <h2>About</h2>
              </header>
              <div className="o-columnbox__truncate1" ref={element => this.element = element}>
                <p>Magnam reprehenderit ipsam eius similique ex aliquid repellendus possimus, sapiente assumenda beatae soluta culpa voluptatum perspiciatis. Veritatis necessitatibus, et expedita.
                </p>
                <p>A distinctio minus praesentium consectetur sit sequi dolor, quasi impedit omnis dolore eveniet nisi quas pariatur similique dignissimos alias corporis officia eaque quidem cumque. Dicta eaque iste numquam quia illum, doloremque nobis temporibus eius sed, sunt velit similique eos repellendus! Laudantium reprehenderit iure quo laboriosam, in autem ratione, cum veritatis. Ut itaque quidem tenetur nobis esse, tempora quo ab quasi fugiat eligendi consectetur sapiente rem architecto amet, dignissimos quisquam est? <button className="o-columnbox__truncate-more">More</button>
                </p>
              </div>
            </section>
            <section className="o-columnbox1">
              <header>
                <h2>Works by the Center for Environmental Design</h2>
              </header>
              <div className="c-itemactions">
                <ShareComp />
              </div>
              <div className="c-unitseries__publications1">There are 99 publications in this collection, published between 1989 and 2010.</div>
              <details className="c-togglecontent c-unitseries">
                <summary><a href="">Recent Works (33)</a></summary>
                <div className="c-pub">
                  <h3 className="c-pub__heading">
                    <a href="">Language Ideologies and Hegemonic Factors Imposed upon Judeo-Spanish Speaking Communities</a>
                  </h3>
                  <div className="c-authorlist">
                    <ul className="c-authorlist__list">
                      <li><a href="">Kirschen, Bryan</a></li>
                      <li><a href="">Shaffer, Christopher D</a></li>
                      <li><a href="">Reed, Laura K</a></li>
                    </ul>
                  </div>
                  <div className="c-pub__abstract">
                    <p>Id doloremque possimus officia natus et, deleniti rem ipsa sunt tenetur quam veritatis assumenda illum quasi iusto nostrum nesciunt, provident maiores nisi voluptates blanditiis non ea magni repellat. At odit cum quaerat consequuntur aperiam culpa ut, repudiandae, illum laboriosam reprehenderit dolore, perspiciatis.
                    </p>
                    <p>Reprehenderit iure obcaecati quasi doloribus laudantium ut labore ab, ullam ratione vel laboriosam illum saepe at odit ipsa dolorem, in, officiis tempore provident. Placeat velit necessitatibus iusto optio laudantium qui corporis cum nam, quam blanditiis, autem, nostrum consectetur quasi vitae. Ab quae recusandae quam est iure sunt similique ipsum blanditiis!
                    </p>
                  </div>
                </div>
                <div className="c-pub">
                  <h3 className="c-pub__heading">
                    <a href="">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</a>
                  </h3>
                  <div className="c-authorlist">
                    <ul className="c-authorlist__list">
                      <li><a href="">Dahle, Kevin W</a></li>
                      <li><a href="">Smith, Sheryl T</a></li>
                      <li><a href="">Barshop, William</a></li>
                    </ul>
                  </div>
                  <div className="c-pub__abstract">
                    <p>Amet sed voluptas quibusdam iusto eveniet aliquam, dolor nam quae! Est debitis veritatis porro ipsam neque eligendi tempore quis cupiditate consequatur voluptatum. Provident alias est officia corporis, dolorem ad doloribus accusamus consequuntur eaque odit fugit similique soluta et quas! Illo, magni, aspernatur.
                    </p>
                    <p>Quas delectus totam ducimus cumque fuga, maiores repudiandae velit esse enim repellendus itaque aliquid, nostrum quos perferendis dolore quis quod, at quaerat omnis, debitis nesciunt quae consectetur sequi explicabo soluta. Quae iste iure officia rem, maxime corrupti eligendi atque! Ab dignissimos, itaque nostrum totam aliquam quas voluptates suscipit modi est?
                    </p>
                  </div>
                </div>
                <div className="c-pub">
                  <h3 className="c-pub__heading">
                    <a href="">Coupled Cardiac Electrophysiology and Contraction using Finite Element</a>
                  </h3>
                  <div className="c-authorlist">
                    <ul className="c-authorlist__list">
                      <li><a href="">Pardo, Maria Gracia</a></li>
                      <li><a href="">Lee, Paul</a></li>
                      <li><a href="">Wong, Jeannette</a></li>
                    </ul>
                  </div>
                  <div className="c-pub__abstract">
                    <p>Perferendis, ducimus quaerat temporibus dolorum omnis beatae, quas. Quam et corporis, sequi, consequatur quia odio nam rerum dolore ipsam, nostrum totam numquam quisquam nobis asperiores praesentium accusamus ex eaque reiciendis error? Nulla ut aperiam ipsa blanditiis quidem esse impedit odit reiciendis eius?
                    </p>
                    <p>Molestiae, itaque ratione recusandae adipisci eaque omnis voluptates. Alias, commodi, nemo. Velit cum eum aut qui? Quam excepturi, nostrum iure delectus veritatis voluptatum quibusdam eligendi amet error officia nobis dolorem neque at accusantium enim dicta sint expedita, totam numquam eveniet fuga qui inventore ratione molestias laborum. Excepturi ab dicta suscipit.
                    </p>
                  </div>
                </div>
                <div className="c-unitseries__publications2">24 more works&mdash; <a href="">show all</a></div>
              </details>
              <details className="c-togglecontent c-unitseries">
                <summary><a href="">Seminar and Conference Papers (33)</a></summary>
                <div className="c-pub">
                  <h3 className="c-pub__heading">
                    <a href="">Language Ideologies and Hegemonic Factors Imposed upon Judeo-Spanish Speaking Communities</a>
                  </h3>
                  <div className="c-authorlist">
                    <ul className="c-authorlist__list">
                      <li><a href="">Kirschen, Bryan</a></li>
                      <li><a href="">Shaffer, Christopher D</a></li>
                      <li><a href="">Reed, Laura K</a></li>
                    </ul>
                  </div>
                  <div className="c-pub__abstract">
                    <p>Id doloremque possimus officia natus et, deleniti rem ipsa sunt tenetur quam veritatis assumenda illum quasi iusto nostrum nesciunt, provident maiores nisi voluptates blanditiis non ea magni repellat. At odit cum quaerat consequuntur aperiam culpa ut, repudiandae, illum laboriosam reprehenderit dolore, perspiciatis.
                    </p>
                    <p>Reprehenderit iure obcaecati quasi doloribus laudantium ut labore ab, ullam ratione vel laboriosam illum saepe at odit ipsa dolorem, in, officiis tempore provident. Placeat velit necessitatibus iusto optio laudantium qui corporis cum nam, quam blanditiis, autem, nostrum consectetur quasi vitae. Ab quae recusandae quam est iure sunt similique ipsum blanditiis!
                    </p>
                  </div>
                </div>
                <div className="c-pub">
                  <h3 className="c-pub__heading">
                    <a href="">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</a>
                  </h3>
                  <div className="c-authorlist">
                    <ul className="c-authorlist__list">
                      <li><a href="">Dahle, Kevin W</a></li>
                      <li><a href="">Smith, Sheryl T</a></li>
                      <li><a href="">Barshop, William</a></li>
                    </ul>
                  </div>
                  <div className="c-pub__abstract">
                    <p>Amet sed voluptas quibusdam iusto eveniet aliquam, dolor nam quae! Est debitis veritatis porro ipsam neque eligendi tempore quis cupiditate consequatur voluptatum. Provident alias est officia corporis, dolorem ad doloribus accusamus consequuntur eaque odit fugit similique soluta et quas! Illo, magni, aspernatur.
                    </p>
                    <p>Quas delectus totam ducimus cumque fuga, maiores repudiandae velit esse enim repellendus itaque aliquid, nostrum quos perferendis dolore quis quod, at quaerat omnis, debitis nesciunt quae consectetur sequi explicabo soluta. Quae iste iure officia rem, maxime corrupti eligendi atque! Ab dignissimos, itaque nostrum totam aliquam quas voluptates suscipit modi est?
                    </p>
                  </div>
                </div>
                <div className="c-pub">
                  <h3 className="c-pub__heading">
                    <a href="">Coupled Cardiac Electrophysiology and Contraction using Finite Element</a>
                  </h3>
                  <div className="c-authorlist">
                    <ul className="c-authorlist__list">
                      <li><a href="">Pardo, Maria Gracia</a></li>
                      <li><a href="">Lee, Paul</a></li>
                      <li><a href="">Wong, Jeannette</a></li>
                    </ul>
                  </div>
                  <div className="c-pub__abstract">
                    <p>Perferendis, ducimus quaerat temporibus dolorum omnis beatae, quas. Quam et corporis, sequi, consequatur quia odio nam rerum dolore ipsam, nostrum totam numquam quisquam nobis asperiores praesentium accusamus ex eaque reiciendis error? Nulla ut aperiam ipsa blanditiis quidem esse impedit odit reiciendis eius?
                    </p>
                    <p>Molestiae, itaque ratione recusandae adipisci eaque omnis voluptates. Alias, commodi, nemo. Velit cum eum aut qui? Quam excepturi, nostrum iure delectus veritatis voluptatum quibusdam eligendi amet error officia nobis dolorem neque at accusantium enim dicta sint expedita, totam numquam eveniet fuga qui inventore ratione molestias laborum. Excepturi ab dicta suscipit.
                    </p>
                  </div>
                </div>
                <div className="c-unitseries__publications2">24 more works&mdash; <a href="">show all</a></div>
              </details>
              <details className="c-togglecontent c-unitseries">
                <summary><a href="">Working Papers (33)</a></summary>
                <div className="c-pub">
                  <h3 className="c-pub__heading">
                    <a href="">Language Ideologies and Hegemonic Factors Imposed upon Judeo-Spanish Speaking Communities</a>
                  </h3>
                  <div className="c-authorlist">
                    <ul className="c-authorlist__list">
                      <li><a href="">Kirschen, Bryan</a></li>
                      <li><a href="">Shaffer, Christopher D</a></li>
                      <li><a href="">Reed, Laura K</a></li>
                    </ul>
                  </div>
                  <div className="c-pub__abstract">
                    <p>Id doloremque possimus officia natus et, deleniti rem ipsa sunt tenetur quam veritatis assumenda illum quasi iusto nostrum nesciunt, provident maiores nisi voluptates blanditiis non ea magni repellat. At odit cum quaerat consequuntur aperiam culpa ut, repudiandae, illum laboriosam reprehenderit dolore, perspiciatis.
                    </p>
                    <p>Reprehenderit iure obcaecati quasi doloribus laudantium ut labore ab, ullam ratione vel laboriosam illum saepe at odit ipsa dolorem, in, officiis tempore provident. Placeat velit necessitatibus iusto optio laudantium qui corporis cum nam, quam blanditiis, autem, nostrum consectetur quasi vitae. Ab quae recusandae quam est iure sunt similique ipsum blanditiis!
                    </p>
                  </div>
                </div>
                <div className="c-pub">
                  <h3 className="c-pub__heading">
                    <a href="">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</a>
                  </h3>
                  <div className="c-authorlist">
                    <ul className="c-authorlist__list">
                      <li><a href="">Dahle, Kevin W</a></li>
                      <li><a href="">Smith, Sheryl T</a></li>
                      <li><a href="">Barshop, William</a></li>
                    </ul>
                  </div>
                  <div className="c-pub__abstract">
                    <p>Amet sed voluptas quibusdam iusto eveniet aliquam, dolor nam quae! Est debitis veritatis porro ipsam neque eligendi tempore quis cupiditate consequatur voluptatum. Provident alias est officia corporis, dolorem ad doloribus accusamus consequuntur eaque odit fugit similique soluta et quas! Illo, magni, aspernatur.
                    </p>
                    <p>Quas delectus totam ducimus cumque fuga, maiores repudiandae velit esse enim repellendus itaque aliquid, nostrum quos perferendis dolore quis quod, at quaerat omnis, debitis nesciunt quae consectetur sequi explicabo soluta. Quae iste iure officia rem, maxime corrupti eligendi atque! Ab dignissimos, itaque nostrum totam aliquam quas voluptates suscipit modi est?
                    </p>
                  </div>
                </div>
                <div className="c-pub">
                  <h3 className="c-pub__heading">
                    <a href="">Coupled Cardiac Electrophysiology and Contraction using Finite Element</a>
                  </h3>
                  <div className="c-authorlist">
                    <ul className="c-authorlist__list">
                      <li><a href="">Pardo, Maria Gracia</a></li>
                      <li><a href="">Lee, Paul</a></li>
                      <li><a href="">Wong, Jeannette</a></li>
                    </ul>
                  </div>
                  <div className="c-pub__abstract">
                    <p>Perferendis, ducimus quaerat temporibus dolorum omnis beatae, quas. Quam et corporis, sequi, consequatur quia odio nam rerum dolore ipsam, nostrum totam numquam quisquam nobis asperiores praesentium accusamus ex eaque reiciendis error? Nulla ut aperiam ipsa blanditiis quidem esse impedit odit reiciendis eius?
                    </p>
                    <p>Molestiae, itaque ratione recusandae adipisci eaque omnis voluptates. Alias, commodi, nemo. Velit cum eum aut qui? Quam excepturi, nostrum iure delectus veritatis voluptatum quibusdam eligendi amet error officia nobis dolorem neque at accusantium enim dicta sint expedita, totam numquam eveniet fuga qui inventore ratione molestias laborum. Excepturi ab dicta suscipit.
                    </p>
                  </div>
                </div>
                <div className="c-unitseries__publications2">24 more works&mdash; <a href="">show all</a></div>
              </details>
              <div className="c-unitlist">
                <h3>Journals</h3>
                <ul>
                  <li>
                    <a href="">Language Ideologies and Hegemonic Factors Imposed upon Judeo-Spanish Speaking Communities</a>
                  </li>
                  <li>
                    <a href="">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</a>
                  </li>
                  <li>
                    <a href="">Coupled Cardiac Electrophysiology and Contraction using Finite Element</a>
                  </li>
                </ul>
              </div>
              <div className="c-unitlist">
                <h3>Related Research Centers and Groups</h3>
                <ul>
                  <li>
                    <a href="">Language Ideologies and Hegemonic Factors Imposed upon Judeo-Spanish Speaking Communities</a>
                  </li>
                  <li>
                    <a href="">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</a>
                  </li>
                  <li>
                    <a href="">Coupled Cardiac Electrophysiology and Contraction using Finite Element</a>
                  </li>
                </ul>
              </div>
            </section>
          </main>
          <aside>
            <section className="o-columnbox1">
              <header>
                <h2>Featured Articles</h2>
              </header>
              <RelatedItemsComp />
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

module.exports = UnitSimpleLayout;
