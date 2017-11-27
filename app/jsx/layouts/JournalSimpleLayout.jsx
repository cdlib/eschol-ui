// ##### Journal Simple Layout ##### //

import React from 'react'
import Header2Comp from '../components/Header2Comp.jsx'
import NavBarComp from '../components/NavBarComp.jsx'
import IssueComp from '../components/IssueComp.jsx'
import MediaListComp from '../components/MediaListComp.jsx'
import PubPreviewComp from '../components/PubPreviewComp.jsx'
import JournalInfoComp from '../components/JournalInfoComp.jsx'
import RelatedItemsComp from '../components/RelatedItemsComp.jsx'
import FooterComp from '../components/FooterComp.jsx'
import $ from 'jquery'

// Load dotdotdot in browser but not server:
if (!(typeof document === "undefined")) {
  const dotdotdot = require('jquery.dotdotdot')
}

class JournalSimpleLayout extends React.Component {

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
              <a href="">UC Berkeley</a>
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
          <a className="c-subheader__banner--narrow" href="">
            <h1>Room One Thousand</h1>
            <img src="http://pub-jschol-stg.escholarship.org/assets/cc6500b061f865f6dd015fefc1100ea989a5442b2e65f11e48d83c7d69a98610" alt="logo for Room One Thousand"/>
          </a>
          <div className="c-subheader__sidebar">
            <button className="o-button__3">Submit</button>
            <button className="o-button__3">Manage <span className="c-subheader__button-fragment">Submissions</span></button>
          </div>
        </div>
        <NavBarComp />
        <nav className="c-breadcrumb">
          <ul>
            <li><a href="">eScholarship</a></li>
            <li><a href="">Campus Name</a></li>
            <li><a href="">Journal Name</a></li>
            <li><a className="c-breadcrumb-link--active" href="">Volume ##, Issue ##</a></li>
          </ul>
        </nav>
        <section className="o-columnbox2">
          <header>
            <h2>About</h2>
          </header>
          <div className="o-columnbox__truncate1" ref={element => this.element = element}>
            <p>A Journal of Italian Studies Edited by the Graduate Students of the Department of Italian at UCLA  <button className="o-columnbox__truncate-more">More</button>
            </p>
          </div>
        </section>
        <div className="c-columns">
          <main id="maincontent">
            <section className="o-columnbox1">
              <div className="c-itemactions">
                <a href="" className="c-itemactions__link-buy">Buy Issue</a>
                <div className="o-download">
                  <a href="" className="o-download__button" download>Download Issue</a>
                  <details className="o-download__formats">
                    <summary aria-label="formats"></summary>
                    <ul className="o-download__nested-menu">
                      <li className="o-download__nested-list1">
                        Main
                        <ul>
                          <li><a href="">PDF</a></li>
                          <li><a href="">ePub</a></li>
                          <li><a href="">HTML</a></li>
                        </ul>
                      </li>
                      <li className="o-download__nested-list2">
                        Citation
                        <ul>
                          <li><a href="">RIS</a></li>
                          <li><a href="">BibText</a></li>
                          <li><a href="">EndNote</a></li>
                          <li><a href="">RefWorks</a></li>
                        </ul>
                      </li>
                      <li className="o-download__nested-list3">
                        Supplemental Material
                        <ul>
                          <li><a href="">Image</a></li>
                          <li><a href="">Audio</a></li>
                          <li><a href="">Video</a></li>
                          <li><a href="">Zip</a></li>
                          <li><a href="">File</a></li>
                        </ul>
                      </li>
                    </ul>
                  </details>
                </div>
                <details className="c-share">
                  <summary><span>Share Issue</span></summary>
                  <div className="c-share__list">
                    <a className="c-share__email" href="">Email</a>
                    <a className="c-share__facebook" href="">Facebook</a>
                    <a className="c-share__twitter" href="">Twitter</a>
                  </div>
                </details>
              </div>
              <div className="o-customselector">
                <h2 className="o-customselector__heading">Volume 6, Issue 2, 2016</h2>
                <details className="o-customselector__selector">
                  <summary aria-label="Select a different item"></summary>
                  <div className="o-customselector__menu">
                    <ul className="o-customselector__items">
                      <li><a href="">Volume 6, Issue 1, 2016</a></li>
                      <li><a href="">Volume 5, Issue 2, 2015</a></li>
                      <li><a href="">Volume 5, Issue 1, 2015</a></li>
                      <li><a href="">Volume 4, Issue 2, 2014</a></li>
                      <li><a href="">Volume 4, Issue 1, 2014</a></li>
                      <li><a href="">Volume 3, Issue 2, 2013</a></li>
                      <li><a href="">Volume 3, Issue 1, 2013</a></li>
                      <li><a href="">Volume 2, Issue 2, 2012</a></li>
                      <li><a href="">Volume 2, Issue 1, 2012</a></li>
                      <li><a href="">Volume 1, Issue 2, 2011</a></li>
                      <li><a href="">Volume 1, Issue 1, 2011</a></li>
                    </ul>
                  </div>
                </details>
              </div>
              <IssueComp />
              <h3 className="o-heading3">Front Matter</h3>
              {/* PubReviewComp Example */}
              <div className="c-pubpreview">
                <a className="c-pubpreview__img" href="">
                  <img src="http://placehold.it/150x200?text=Image" alt="placeholder" />
                </a>
                <div className="c-pub">
                  <h4 className="c-pub__heading">
                    <a href="">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</a>
                  </h4>
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
                    <p>Aperiam sapiente, quisquam! Nam, perspiciatis sit voluptate nostrum recusandae optio ex officiis dolorem velit amet, vitae dolor deserunt commodi earum esse obcaecati cumque blanditiis explicabo, qui consequatur at. Illum iure voluptatibus rerum vitae accusantium beatae veritatis dolores impedit dolorum ut, neque asperiores reiciendis ratione at ex facere illo alias! Fugit, nulla laudantium corrupti eum ex pariatur tenetur eveniet doloribus, magnam qui hic.
                    </p>
                  </div>
                  <MediaListComp />
                </div>
              </div>

              <div className="c-pubpreview">
                <a className="c-pubpreview__img" href="">
                  <img src="http://placehold.it/150x200?text=Image" alt="placeholder" />
                </a>
                <div className="c-pub">
                  <h4 className="c-pub__heading">
                    <a href="">Comment on Ginsborg et al</a>
                  </h4>
                  <div className="c-authorlist">
                    <ul className="c-authorlist__list">
                      <li><a href="">Grew, Raymond</a></li>
                    </ul>
                  </div>
                  <p>A comment on Paul Ginsborg's "Salviamo l'Italia".</p>
                  <ul className="c-medialist">
                    <li className="c-medialist__image">Contains 2 supplemental images</li>
                    <li className="c-medialist__pdf">Contains 2 supplemental PDFs</li>
                  </ul>
                </div>
              </div>
              {/* PubReviewComp Example */}
              <div className="c-pubpreview">
                <a className="c-pubpreview__img" href="">
                  <img src="http://placehold.it/150x200?text=Image" alt="placeholder" />
                </a>
                <div className="c-pub">
                  <h4 className="c-pub__heading">
                    <a href="">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</a>
                  </h4>
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
                    <p>Enim sunt eligendi temporibus, dolorum quisquam excepturi doloribus cupiditate molestiae, omnis distinctio illo architecto asperiores quae, error voluptas? Commodi quisquam molestiae ex distinctio dolore voluptatem nihil vel. Vel inventore ducimus sunt dolorum quasi laborum eos maxime perferendis asperiores repellendus pariatur veniam id voluptatem, alias cum veritatis. Tenetur ipsam aliquid quod consequatur dignissimos animi, tempora repellendus repellat obcaecati sint aspernatur, id officia eligendi.
                    </p>
                  </div>
                  <MediaListComp />
                </div>
              </div>
              <h3 className="o-heading3">Articles</h3>
              {/* PubReviewComp Example */}
              <div className="c-pubpreview">
                <a className="c-pubpreview__img" href="">
                  <img src="http://placehold.it/150x200?text=Image" alt="placeholder" />
                </a>
                <div className="c-pub">
                  <h4 className="c-pub__heading">
                    <a href="">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</a>
                  </h4>
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
                    <p>Unde nulla aspernatur voluptate, magni distinctio earum hic consectetur! Amet ut repellat, eligendi molestiae expedita rem, ex distinctio sit nisi et doloremque quo, ducimus ea laudantium maxime. Asperiores cum enim odit numquam assumenda inventore repudiandae officia, officiis quidem laudantium cumque, commodi velit mollitia voluptatibus pariatur magnam labore quibusdam. Dolores magnam at quam similique molestias! Enim aspernatur, quibusdam, error earum laboriosam in ullam!
                    </p>
                  </div>
                  <MediaListComp />
                </div>
              </div>
              {/* PubReviewComp Example */}
              <div className="c-pubpreview">
                <a className="c-pubpreview__img" href="">
                  <img src="http://placehold.it/150x200?text=Image" alt="placeholder" />
                </a>
                <div className="c-pub">
                  <h4 className="c-pub__heading">
                    <a href="">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</a>
                  </h4>
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
                    <p>Dolorem repellat sapiente ut, rem maxime explicabo, sint a minima pariatur deleniti fuga! Odio aut numquam id impedit ipsa magni dolores quis pariatur error ea similique, veniam modi fugiat tenetur voluptas itaque consequatur! Vero delectus officia tempora sapiente corporis doloremque enim, fugit commodi id quod laborum dicta aut asperiores repellat suscipit autem neque amet, tempore at doloribus excepturi est nemo. Placeat, atque?
                    </p>
                  </div>
                  <MediaListComp />
                </div>
              </div>
              {/* PubReviewComp Example */}
              <div className="c-pubpreview">
                <a className="c-pubpreview__img" href="">
                  <img src="http://placehold.it/150x200?text=Image" alt="placeholder" />
                </a>
                <div className="c-pub">
                  <h4 className="c-pub__heading">
                    <a href="">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</a>
                  </h4>
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
                    <p>Sed qui, corporis eos illum hic quo. Dolore dignissimos incidunt neque veritatis veniam voluptatem, commodi atque. Provident est, saepe, veritatis deserunt, impedit commodi unde, ratione at soluta nulla nisi. Aliquid corrupti adipisci unde veritatis impedit accusamus dolorem labore dolor neque ut totam nemo nulla, nihil maxime architecto delectus nobis! Ab voluptates hic obcaecati quaerat, culpa autem enim necessitatibus vero ex aliquam odio.
                    </p>
                  </div>
                  <MediaListComp />
                </div>
              </div>
              <h3 className="o-heading3">Book Reviews</h3>
              {/* PubComp Example */}
              <div className="c-pub">
                <h4 className="c-pub__heading">
                  <a href="">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</a>
                </h4>
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
                  <p>Minima rerum delectus, labore. Delectus nemo aperiam odit, aliquam nam aspernatur, pariatur minima rem itaque qui necessitatibus repellat vel aliquid veniam. Ipsa perspiciatis inventore dolor quas ea, quasi tenetur voluptatem deleniti dolorem! Voluptas, accusamus doloribus accusantium eos, dignissimos consequuntur animi veritatis ipsam quae unde iure asperiores magnam officia atque maxime ex commodi sunt molestias tempore fugiat quam enim impedit? Neque, ut, quis.
                  </p>
                </div>
                <MediaListComp />
              </div>
              {/* PubComp Example */}
              <div className="c-pub">
                <h4 className="c-pub__heading">
                  <a href="">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</a>
                </h4>
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
                  <p>Maiores nam, officia excepturi libero harum rem, aliquid voluptas, magni facilis sapiente ab eligendi. Sapiente aliquam atque, voluptas neque autem inventore consequatur. Animi, recusandae. Expedita eligendi quod eum exercitationem earum, voluptas quibusdam corrupti vel nam, doloremque saepe placeat, dolorum blanditiis praesentium quae totam a fuga non aliquam reiciendis ad. Similique aspernatur animi ad eos maxime, quaerat laboriosam repudiandae optio? Officia, sed. Consectetur.
                  </p>
                </div>
                <MediaListComp />
              </div>
              {/* PubComp Example */}
              <div className="c-pub">
                <h4 className="c-pub__heading">
                  <a href="">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</a>
                </h4>
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
                  <p>Magnam minima odit ab ducimus, rem facilis magni maiores architecto enim ad voluptatem quod expedita quam id suscipit praesentium necessitatibus quasi facere, laboriosam! Dolorum dicta molestias harum quam perferendis alias quae consequuntur quia similique? Recusandae eligendi voluptatibus, earum distinctio illum, consectetur ipsam. Nulla earum laboriosam omnis excepturi possimus, in deleniti quia nobis temporibus tenetur labore inventore facilis modi minus alias impedit, molestiae!
                  </p>
                </div>
                <MediaListComp />
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

module.exports = JournalSimpleLayout;
