// ##### Journal Simple Layout ##### //

import React from 'react'
import Header2Comp from '../components/Header2Comp.jsx'
import Subheader2Comp from '../components/Subheader2Comp.jsx'
import NavBarComp from '../components/NavBarComp.jsx'
import ItemActionsComp from '../components/ItemActionsComp.jsx'
import JournalInfoComp from '../components/JournalInfoComp.jsx'
import FrontmatterComp from '../components/FrontmatterComp.jsx'
import FooterComp from '../components/FooterComp.jsx'

class JournalSimpleLayout extends React.Component {
  render() {
    return (
      <div>
        <a href="#maincontent" className="c-skipnav">Skip to main content</a>
        <Header2Comp />
        <Subheader2Comp />
        <NavBarComp />
        <nav className="c-breadcrumb">
          <a href="">eScholarship</a>
          <a href="">Campus Name</a>
          <a href="">Journal Name</a>
          <a className="c-breadcrumb-link--active" href="">Volume ##, Issue ##</a>
        </nav>
        <div className="c-columns">
          <main id="maincontent">
            <section className="o-columnbox3">
              <header>
                <h2>About</h2>
              </header>
              <div>Obcaecati ab alias culpa mollitia porro eos itaque ipsa necessitatibus earum libero recusandae, consequuntur quos molestias, dolorum cupiditate doloremque atque possimus esse.
              </div>
            </section>
            <section className="o-columnbox1">
              <ItemActionsComp />
              <div className="c-frontmatter">
                <div className="c-frontmatter__text">
                  <h2 className="c-frontmatter__heading">
                    <a href="">Volume 41, Issue 1, 2015</a>
                  </h2>
                  <div className="c-frontmatter__subheading">Focus: Caribbean Studies and Literatures</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur fuga laborum, qui debitis vitae quaerat quas ab officia, dolor dignissimos ipsum nam ratione unde animi? Officiis rerum unde eveniet natus.
                    Laboriosam tenetur vel, rem culpa maiores non, tempora voluptatibus quasi quos provident exercitationem itaque dolorum quam sequi dolor odio hic accusamus, repellendus ut dignissimos. Labore modi consectetur ullam, iste accusamus!
                    Dolore quod illum praesentium sint. Consectetur illum voluptas reiciendis possimus ullam nesciunt, laboriosam nisi nihil hic. Veritatis porro doloribus iste eos, assumenda fugiat dicta nesciunt. Autem sed recusandae at quod!
                    Ducimus adipisci provident nam voluptatem officia. Quos maiores molestias atque alias deserunt ullam laborum similique, quae cum excepturi. Rem harum facilis perspiciatis a illum, eum, officiis. Ducimus officia, veniam ea.
                  </p>
                </div>
              </div>
              <h3>Front Matter</h3>
              <FrontmatterComp />
              <FrontmatterComp />
              <FrontmatterComp />
              <h3>Articles</h3>
              <FrontmatterComp />
              <FrontmatterComp />
              <FrontmatterComp />
              <h3>Book Reviews</h3>
              <div className="c-frontmatter">
                {/* linked thumbnail image intentionally left out */}
                <div className="c-frontmatter__text">
                  <h2 className="c-frontmatter__heading">
                    <a href="">Volume 41, Issue 1, 2015</a>
                  </h2>
                  <div className="c-authorlist">
                    {/* <time> element intentionally left out */}
                    <ul className="c-authorlist__list">
                    {/* links can be left out of the list if no links are desired: */}
                      <li><a href="">Leung, Wilson</a></li>
                      <li><a href="">Shaffer, Christopher D</a></li>
                      <li><a href="">Reed, Laura K</a></li>
                    </ul>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quos, laudantium dicta ipsum nihil! Vero, odit beatae! Facere ratione provident possimus quidem! Quam labore excepturi tempore culpa, dolores fugiat repudiandae!</p>
                  <ul className="c-medialist">
                    <li className="c-medialist__image">Contains 2 images</li>
                    <li className="c-medialist__video">Contains 8 videos</li>
                  </ul>
                </div>
              </div>
              <div className="c-frontmatter">
                {/* linked thumbnail image intentionally left out */}
                <div className="c-frontmatter__text">
                  <h2 className="c-frontmatter__heading">
                    <a href="">Volume 41, Issue 1, 2015</a>
                  </h2>
                  <div className="c-authorlist">
                    {/* <time> element intentionally left out */}
                    <ul className="c-authorlist__list">
                    {/* links can be left out of the list if no links are desired: */}
                      <li><a href="">Leung, Wilson</a></li>
                      <li><a href="">Shaffer, Christopher D</a></li>
                      <li><a href="">Reed, Laura K</a></li>
                    </ul>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quos, laudantium dicta ipsum nihil! Vero, odit beatae! Facere ratione provident possimus quidem! Quam labore excepturi tempore culpa, dolores fugiat repudiandae!</p>
                  <ul className="c-medialist">
                    <li className="c-medialist__image">Contains 2 images</li>
                    <li className="c-medialist__video">Contains 8 videos</li>
                  </ul>
                </div>
              </div>
              <div className="c-frontmatter">
                {/* linked thumbnail image intentionally left out */}
                <div className="c-frontmatter__text">
                  <h2 className="c-frontmatter__heading">
                    <a href="">Volume 41, Issue 1, 2015</a>
                  </h2>
                  <div className="c-authorlist">
                    {/* <time> element intentionally left out */}
                    <ul className="c-authorlist__list">
                    {/* links can be left out of the list if no links are desired: */}
                      <li><a href="">Leung, Wilson</a></li>
                      <li><a href="">Shaffer, Christopher D</a></li>
                      <li><a href="">Reed, Laura K</a></li>
                    </ul>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quos, laudantium dicta ipsum nihil! Vero, odit beatae! Facere ratione provident possimus quidem! Quam labore excepturi tempore culpa, dolores fugiat repudiandae!</p>
                  <ul className="c-medialist">
                    <li className="c-medialist__image">Contains 2 images</li>
                    <li className="c-medialist__video">Contains 8 videos</li>
                  </ul>
                </div>
              </div>
            </section>
          </main>
          <aside>
            <section className="o-columnbox2">
              <header>
                <h2>Journal Information</h2>
              </header>
              <JournalInfoComp />
            </section>
            <section className="o-columnbox2">
              <header>
                <h2>Featured Articles</h2>
                </header>
                <p><a className="o-textlink__secondary" href="">Entre la ficción y el periodismo: Cambio social y la crónica mexicana contemporánea</a> <br/> Nadeau, Evelyn</p> 
                <p><a className="o-textlink__secondary" href="">Journalism in Catalonia During Francoism</a> <br/> Reguant, Monserrat</p>
                <p><a className="o-textlink__secondary" href="">En torno a un cuento olvidado de Clarín: "El oso mayor"</a> <br/> Gil, Angeles Ezama</p>
                <p><a className="o-textlink__secondary" href="">Interview with Guillermo Cabrera Infante</a> <br/> Graham-Jones, Jean; Deosthale, Duleep</p>
                <p><a className="o-textlink__secondary" href="">Lazlo Moussong. Castillos en la letra. Xalapa, México: Universidad Veracruzana, 1986.</a> <br/> Radchik, Laura</p>
            </section>
            <section className="o-columnbox2">
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

module.exports = JournalSimpleLayout;
