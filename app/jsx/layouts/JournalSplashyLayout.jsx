// ##### Journal Splashy Layout ##### //

import React from 'react'
import Header2Comp from '../components/Header2Comp.jsx'
import SubheaderComp from '../components/SubheaderComp.jsx'
import NavBarComp from '../components/NavBarComp.jsx'
import BreadcrumbComp from '../components/BreadcrumbComp.jsx'
import MarqueeComp from '../components/MarqueeComp.jsx'
import ItemActionsComp from '../components/ItemActionsComp.jsx'
import MediaListComp from '../components/MediaListComp.jsx'
import PubComp from '../components/PubComp.jsx'
import JournalInfoComp from '../components/JournalInfoComp.jsx'
import FooterComp from '../components/FooterComp.jsx'

class JournalSplashyLayout extends React.Component {
  render() {
    return (
      <div>
        <a href="#maincontent" className="c-skipnav">Skip to main content</a>
        <Header2Comp />
        <SubheaderComp />
        <NavBarComp />
        <BreadcrumbComp />
        <MarqueeComp />
        <div className="c-columns">
          <main id="maincontent">
            <section className="o-columnbox1">
              <ItemActionsComp />
              <div className="c-pubpreview">
                <a className="c-pubpreview__img" href="">
                  <img src="http://placehold.it/150x200?text=Image" alt="" />
                </a>
                <div className="c-pub">
                  <h1 className="c-pub__heading">
                    <a href="">Language Ideologies and Hegemonic Factors Imposed upon Judeo-Spanish Speaking Communities</a>
                  </h1>
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
                  <p>Pariatur fuga laborum, qui debitis vitae quaerat quas ab officia, dolor dignissimos ipsum nam ratione unde animi? Officiis rerum unde eveniet natus. Laboriosam tenetur vel, rem culpa maiores non, tempora voluptatibus quasi quos provident exercitationem itaque dolorum quam sequi dolor odio hic accusamus, repellendus ut dignissimos. Labore modi consectetur ullam, iste accusamus!</p>
                  <MediaListComp />
                </div>
              </div>
              <h1 className="o-heading1a">Table of Contents</h1>
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
                <h1>Journal Information</h1>
              </header>
              <JournalInfoComp />
            </section>
            <section className="o-columnbox1">
              <header>
                <h1>Featured Articles</h1>
                </header>
                <p><a className="o-textlink__secondary" href="">Entre la ficción y el periodismo: Cambio social y la crónica mexicana contemporánea</a> <br/> Nadeau, Evelyn</p> 
                <p><a className="o-textlink__secondary" href="">Journalism in Catalonia During Francoism</a> <br/> Reguant, Monserrat</p>
                <p><a className="o-textlink__secondary" href="">En torno a un cuento olvidado de Clarín: "El oso mayor"</a> <br/> Gil, Angeles Ezama</p>
                <p><a className="o-textlink__secondary" href="">Interview with Guillermo Cabrera Infante</a> <br/> Graham-Jones, Jean; Deosthale, Duleep</p>
                <p><a className="o-textlink__secondary" href="">Lazlo Moussong. Castillos en la letra. Xalapa, México: Universidad Veracruzana, 1986.</a> <br/> Radchik, Laura</p>
            </section>
            <section className="o-columnbox1">
              <header>
                <h1>Follow us on Twitter</h1>
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
