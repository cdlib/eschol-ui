// ##### Unit Simple Layout ##### //

import React from 'react'
import $ from 'jquery'
import dotdotdot from 'jquery.dotdotdot'
import Header2Comp from '../components/Header2Comp.jsx'
import CampusSelectorComp from '../components/CampusSelectorComp.jsx'
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
    $('.o-columnbox__truncate1').dotdotdot({
      watch: 'window',
      after: '.o-columnbox__truncate-more-link'
    });
    setTimeout(()=> $('.o-columnbox__truncate1').trigger('update'), 0) // removes 'more' link upon page load if less than truncation threshold
  }
  render() {
    return (
      <div>
        <a href="#maincontent" className="c-skipnav">Skip to main content</a>
        <Header2Comp />
        <div className="c-subheader">
          <div className="c-campusselector">
            <h2 className="c-campusselector__heading">
              <a href="">UC Riverside</a>
            </h2>
            <details className="c-campusselector__selector">
              <summary aria-label="select campus"></summary>
              <div className="c-campusselector__menu">
                <div className="c-campusselector__sub-heading" id="c-campusselector__sub-heading">eScholarship at &hellip;</div>
                <div className="c-campusselector__items" aria-labelledby="c-campusselector__sub-heading" role="list">
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
                </div>
              </div>
            </details>
          </div>
          <img className="c-subheader__banner" src="images/logo_ucr.svg" alt="UC Riverside"/>
          <div className="c-subheader__sidebar">
            <button className="o-button__3">Deposit</button>
            <button className="o-button__3">Manage <span className="c-subheader__button-fragment">Submissions</span></button>
          </div>
        </div>
        <div className="c-navbar">
          <div className="c-nav">
            <details open={this.state.isOpen ? "open" : ""} aria-expanded={this.state.isOpen ? "true" : "false"} className="c-nav__main" ref={(domNode)=> this.details = domNode}>
              <summary className="c-nav__main-button" onClick = {(event)=>{
                this.setState({isOpen: !this.details.open})
                event.preventDefault()
              }}><span>Menu</span>
              </summary>
              <nav className={this.state.submenuActive ? "c-nav__main-items--submenu-active" : "c-nav__main-items"}>
                <a href="">Unit Home</a>
                <NavSubComp name="About" open={this.state.submenuActive == 2} onSubmenuChanged={(flag)=> this.setState({submenuActive:flag ? 2 : null})}>
                  <a href="">About Us</a>
                  <a href="">Aims &amp; Scope</a>
                  <a href="">Editorial Board</a>
                </NavSubComp>
                <a href=""  className="c-nav__item--active">Policies</a>
                <a href="">Submission Guidelines</a>
                <a href="">Contact</a>
              </nav>
            </details>
          </div>
          <SocialIconsComp />
          <LanguageComp />
        </div>
        <nav className="c-breadcrumb">
          <a href="">eScholarship</a>
          <a href="">Campus Name</a>
          <a className="c-breadcrumb-link--active" href="">Unit Name</a>
        </nav>
        <div className="c-columns">
          <main id="maincontent">
            <section className="o-columnbox2">
              <header>
                <h2>About</h2>
              </header>
              <div className="o-columnbox__truncate1">
                <div> {/* this element (or any child) required so that 'more' link goes away at less than truncation threshold */}
                  Repudiandae fugiat ab earum dignissimos veniam quae enim nesciunt deleniti deserunt. Numquam commodi sunt autem dolore repellendus, minus quae modi natus dignissimos. Repellendus, expedita quos doloremque neque asperiores voluptates atque? Aliquam vel quae hic nostrum sint illum, alias soluta rerum at consectetur, eaque nemo nulla sed officia labore illo magni nisi suscipit libero reiciendis. Illo esse a commodi aperiam sequi voluptatibus doloremque eaque cum id. Harum excepturi, fuga molestiae, sunt aperiam recusandae odit! Laborum, voluptas quos. Corporis mollitia itaque perspiciatis, nulla odio incidunt ex maxime, delectus repellat illo nisi eos quas quam doloribus aliquid nesciunt, fugit totam minima neque? Iure, necessitatibus maxime porro, non cum iusto. <a href="" className="o-columnbox__truncate-more-link">More</a>
                </div>
              </div>
            </section>
            <section className="o-columnbox1">
              <header>
                <h2>Works by the Center for Environmental Design</h2>
              </header>
              <div className="c-itemactions">
                <ShareComp />
              </div>
              <p>There are 99 publications in this collection, published between 1989 and 2010.</p>
              <h3 className="o-heading2"><a className="o-textlink__secondary" href="">Recent Works</a></h3>
              <div className="c-pub--indent">
                <h2 className="c-pub__heading">
                  <a href="">Language Ideologies and Hegemonic Factors Imposed upon Judeo-Spanish Speaking Communities</a>
                </h2>
                <div className="c-authorlist">
                  <ul className="c-authorlist__list">
                  {/* links can be left out of the list if no links are desired: */}
                    <li><a href="">Kirschen, Bryan</a></li>
                  </ul>
                </div>
                <p>Animi, illo placeat impedit rem voluptate dolore tempore, debitis quibusdam quae deleniti tempora maxime dolorum deserunt sunt asperiores pariatur! Ipsa eveniet culpa, obcaecati earum ex nam explicabo cumque neque rem excepturi dicta!</p>
              </div>
              <div className="c-pub--indent">
                <h2 className="c-pub__heading">
                  <a href="">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</a>
                </h2>
                <div className="c-authorlist">
                  <ul className="c-authorlist__list">
                  {/* links can be left out of the list if no links are desired: */}
                    <li><a href="">Dahle, Kevin W</a></li>
                  </ul>
                </div>
                <p>Et debitis consequuntur aut nobis natus atque, dignissimos excepturi eligendi animi id provident similique ad non dolorum suscipit placeat. Praesentium quas adipisci aspernatur cum! Tenetur aliquid harum illum officia facilis quasi consequuntur.</p>
              </div>
              <div className="c-pub--indent">
                <h2 className="c-pub__heading">
                  <a href="">Coupled Cardiac Electrophysiology and Contraction using Finite Element</a>
                </h2>
                <div className="c-authorlist">
                  <ul className="c-authorlist__list">
                  {/* links can be left out of the list if no links are desired: */}
                    <li><a href="">Pardo, Maria Gracia</a></li>
                  </ul>
                </div>
                <p>Distinctio quae tempore iure aliquid. Sed odit ut, quod provident odio velit fugiat totam reiciendis sint suscipit perspiciatis vero molestias ducimus architecto perferendis pariatur. Quibusdam distinctio a fuga sint provident hic inventore.</p>
              </div>
              <p>24 more works&mdash; <a className="o-textlink__secondary" href="">show all</a></p>
              <h3 className="o-heading2"><a className="o-textlink__secondary" href="">Seminar and Conference Papers</a></h3>
              <div className="c-pub--indent">
                <h2 className="c-pub__heading">
                  <a href="">Language Ideologies and Hegemonic Factors Imposed upon Judeo-Spanish Speaking Communities</a>
                </h2>
                <div className="c-authorlist">
                  <ul className="c-authorlist__list">
                  {/* links can be left out of the list if no links are desired: */}
                    <li><a href="">Kirschen, Bryan</a></li>
                  </ul>
                </div>
                <p>Animi, illo placeat impedit rem voluptate dolore tempore, debitis quibusdam quae deleniti tempora maxime dolorum deserunt sunt asperiores pariatur! Ipsa eveniet culpa, obcaecati earum ex nam explicabo cumque neque rem excepturi dicta!</p>
              </div>
              <div className="c-pub--indent">
                <h2 className="c-pub__heading">
                  <a href="">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</a>
                </h2>
                <div className="c-authorlist">
                  <ul className="c-authorlist__list">
                  {/* links can be left out of the list if no links are desired: */}
                    <li><a href="">Dahle, Kevin W</a></li>
                  </ul>
                </div>
                <p>Et debitis consequuntur aut nobis natus atque, dignissimos excepturi eligendi animi id provident similique ad non dolorum suscipit placeat. Praesentium quas adipisci aspernatur cum! Tenetur aliquid harum illum officia facilis quasi consequuntur.</p>
              </div>
              <div className="c-pub--indent">
                <h2 className="c-pub__heading">
                  <a href="">Coupled Cardiac Electrophysiology and Contraction using Finite Element</a>
                </h2>
                <div className="c-authorlist">
                  <ul className="c-authorlist__list">
                  {/* links can be left out of the list if no links are desired: */}
                    <li><a href="">Pardo, Maria Gracia</a></li>
                  </ul>
                </div>
                <p>Distinctio quae tempore iure aliquid. Sed odit ut, quod provident odio velit fugiat totam reiciendis sint suscipit perspiciatis vero molestias ducimus architecto perferendis pariatur. Quibusdam distinctio a fuga sint provident hic inventore.</p>
              </div>
              <p>6 more works&mdash; <a className="o-textlink__secondary" href="">show all</a></p>
              <h3 className="o-heading2"><a className="o-textlink__secondary" href="">Working Papers</a></h3>
              <div className="c-pub--indent">
                <h2 className="c-pub__heading">
                  <a href="">Language Ideologies and Hegemonic Factors Imposed upon Judeo-Spanish Speaking Communities</a>
                </h2>
                <div className="c-authorlist">
                  <ul className="c-authorlist__list">
                  {/* links can be left out of the list if no links are desired: */}
                    <li><a href="">Kirschen, Bryan</a></li>
                  </ul>
                </div>
                <p>Animi, illo placeat impedit rem voluptate dolore tempore, debitis quibusdam quae deleniti tempora maxime dolorum deserunt sunt asperiores pariatur! Ipsa eveniet culpa, obcaecati earum ex nam explicabo cumque neque rem excepturi dicta!</p>
              </div>
              <div className="c-pub--indent">
                <h2 className="c-pub__heading">
                  <a href="">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</a>
                </h2>
                <div className="c-authorlist">
                  <ul className="c-authorlist__list">
                  {/* links can be left out of the list if no links are desired: */}
                    <li><a href="">Dahle, Kevin W</a></li>
                  </ul>
                </div>
                <p>Et debitis consequuntur aut nobis natus atque, dignissimos excepturi eligendi animi id provident similique ad non dolorum suscipit placeat. Praesentium quas adipisci aspernatur cum! Tenetur aliquid harum illum officia facilis quasi consequuntur.</p>
              </div>
              <div className="c-pub--indent">
                <h2 className="c-pub__heading">
                  <a href="">Coupled Cardiac Electrophysiology and Contraction using Finite Element</a>
                </h2>
                <div className="c-authorlist">
                  <ul className="c-authorlist__list">
                  {/* links can be left out of the list if no links are desired: */}
                    <li><a href="">Pardo, Maria Gracia</a></li>
                  </ul>
                </div>
                <p>Distinctio quae tempore iure aliquid. Sed odit ut, quod provident odio velit fugiat totam reiciendis sint suscipit perspiciatis vero molestias ducimus architecto perferendis pariatur. Quibusdam distinctio a fuga sint provident hic inventore.</p>
              </div>
              <p>57 more works&mdash; <a className="o-textlink__secondary" href="">show all</a></p>
            </section>
          </main>
          <aside>
            <section className="o-columnbox1">
              <header>
                <h2>Featured Articles</h2>
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

module.exports = UnitSimpleLayout;
