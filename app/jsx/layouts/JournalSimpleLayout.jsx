// ##### Journal Simple Layout ##### //

import React from 'react'
import Header2Comp from '../components/Header2Comp.jsx'
import SubheaderComp from '../components/SubheaderComp.jsx'
import NavBarComp from '../components/NavBarComp.jsx'
import ItemActionsComp from '../components/ItemActionsComp.jsx'
import PubComp from '../components/PubComp.jsx'
import PubPreviewComp from '../components/PubPreviewComp.jsx'
import JournalInfoComp from '../components/JournalInfoComp.jsx'
import FooterComp from '../components/FooterComp.jsx'
import $ from 'jquery'
import dotdotdot from 'jquery.dotdotdot'

class JournalSimpleLayout extends React.Component {
  componentDidMount() {
    $('.o-columnbox__truncate-5').dotdotdot({
      watch: 'window',
      after: '.o-columnbox__truncate-more-link'
    });
    setTimeout(()=> $('.o-columnbox__truncate-5').trigger("update"), 0)
  }
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
          <a className="c-breadcrumb-link--active" href="">Volume ##, Issue ##</a>
        </nav>
        <div className="c-columns">
          <main id="maincontent">
            <section className="o-columnbox2">
              <header>
                <h2>About</h2>
              </header>
              <div className="o-columnbox__truncate-5">Praesentium dolorem voluptate incidunt reiciendis eius, libero atque commodi amet corporis sed! Exercitationem atque porro perferendis cupiditate quisquam eligendi, eius aspernatur ad esse, iure quos iusto voluptas commodi maxime facere consectetur explicabo reiciendis. Pariatur debitis sequi quibusdam facere esse aut, nostrum soluta corporis similique. Distinctio illo eaque nesciunt quisquam nostrum, reiciendis! Porro dignissimos nostrum pariatur nihil error ipsam repudiandae molestias qui expedita praesentium suscipit magni illo explicabo rerum natus accusamus, non, voluptatem inventore ducimus odit placeat? Molestiae ad architecto dolore at harum, voluptatem nihil mollitia vel est, nam ex inventore neque aut! <a href="" className="o-columnbox__truncate-more-link">More</a>
              </div>
            </section>
            <section className="o-columnbox1">
              <ItemActionsComp />
              <div className="c-pub">
                <h2 className="c-pub__heading">
                  <a href="">Volume 41, Issue 1, 2012</a>
                </h2>
                <div className="c-pub__subheading">Focus: Caribbean Studies and Literatures</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur fuga laborum, qui debitis vitae quaerat quas ab officia, dolor dignissimos ipsum nam ratione unde animi? Officiis rerum unde eveniet natus. Laboriosam tenetur vel, rem culpa maiores non, tempora voluptatibus quasi quos provident exercitationem itaque dolorum quam sequi dolor odio hic accusamus, repellendus ut dignissimos. Labore modi consectetur ullam, iste accusamus!
                </p>
              </div>
              <h3 className="o-heading3">Front Matter</h3>
              <PubPreviewComp />
              <PubPreviewComp />
              <PubPreviewComp />
              <h3 className="o-heading3">Articles</h3>
              <PubPreviewComp />
              <PubPreviewComp />
              <PubPreviewComp />
              <h3 className="o-heading3">Book Reviews</h3>
              <PubComp />
              <PubComp />
              <PubComp />
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
                <p><a className="o-textlink__secondary" href="">Entre la ficción y el periodismo: Cambio social y la crónica mexicana contemporánea</a> <br/> Nadeau, Evelyn</p> 
                <p><a className="o-textlink__secondary" href="">Journalism in Catalonia During Francoism</a> <br/> Reguant, Monserrat</p>
                <p><a className="o-textlink__secondary" href="">En torno a un cuento olvidado de Clarín: "El oso mayor"</a> <br/> Gil, Angeles Ezama</p>
                <p><a className="o-textlink__secondary" href="">Interview with Guillermo Cabrera Infante</a> <br/> Graham-Jones, Jean; Deosthale, Duleep</p>
                <p><a className="o-textlink__secondary" href="">Lazlo Moussong. Castillos en la letra. Xalapa, México: Universidad Veracruzana, 1986.</a> <br/> Radchik, Laura</p>
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

module.exports = JournalSimpleLayout;
