// ##### Journal Item Multimedia Layout ##### //

import React from 'react'
import Header2Comp from '../components/Header2Comp.jsx'
import SubheaderComp from '../components/SubheaderComp.jsx'
import NavBarComp from '../components/NavBarComp.jsx'
import ShareComp from '../components/ShareComp.jsx'
import AuthorListComp from '../components/AuthorListComp.jsx'
import PubLocationComp from '../components/PubLocationComp.jsx'
import PubDataComp from '../components/PubDataComp.jsx'
import MediaFileGridComp from '../components/MediaFileGridComp.jsx'
import JumpComp from '../components/JumpComp.jsx'
import RelatedItemsComp from '../components/RelatedItemsComp.jsx'
import FooterComp from '../components/FooterComp.jsx'

class JournalItemMultimediaLayout extends React.Component {
  render() {
    return (
      <div>
        <a href="#maincontent" className="c-skipnav">Skip to main content</a>
        <Header2Comp />
        <SubheaderComp />
        <NavBarComp />
        <nav className="c-breadcrumb">
          <ul>
            <li><a href="">eScholarship</a></li>
            <li><a href="">Campus Name</a></li>
            <li><a href="">Unit Name</a></li>
            <li><a href="">Series Name</a></li>
            <li><a className="c-breadcrumb-link--active" href="">From the New Heights</a></li>
          </ul>
        </nav>
        <div className="c-columns--sticky-sidebar">
          <main id="maincontent">
            <div className="c-itemactions">
              <div className="o-download">
                <a href="" className="o-download__button" download>Download PDF</a>
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
              <ShareComp />
            </div>
            <h1 className="o-heading1a">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</h1>
            <AuthorListComp />
            <PubLocationComp />
            <PubDataComp />
            <div className="c-tabs">
              <div className="c-tabs__tabs">
                <button className="c-tabs__button--active">Main Content</button>
              </div>
              <div className="c-tabs__content">
                <details className="c-togglecontent" open>
                  <summary>Abstract</summary>
                  <p>Eum nihil quidem nisi sapiente vel obcaecati esse vero placeat! Dicta fugiat quam, nemo accusamus cum, non voluptas sit eveniet. Voluptates odio consectetur eum dicta vel at rerum accusamus inventore officiis, voluptate deleniti et reiciendis aliquam illo eaque laborum neque excepturi pariatur unde obcaecati molestiae dolores voluptas non earum minima.</p>
                  <div className="c-well">
                    Many UC-authored scholarly publications are freely available on this site because of the UC Academic Senate’s Open Access Policy. <a href="">Let us know how this access is important for you</a>.
                  </div>
                </details>
                <details className="c-togglecontent" open>
                  <summary>Main Content</summary>
                  <div className="o-mediafeature--video">
                    <h3>New Horizons Kuiper Belt Fly-Through</h3>
                    <div className="o-mediafeature__item">
                      <video src="images/sample_video.mp4" controls poster="images/sample_video-poster.jpg"></video>
                    </div>
                    <div className="o-mediafeature__description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis optio numquam aut facere odio et accusantium eius quo harum, quis ab molestias illum totam earum nemo voluptatum eligendi nobis. Molestiae reprehenderit et neque nisi nam corporis totam exercitationem, numquam fuga. Sint minima quisquam, velit quod ratione. Vero, libero, accusantium. Rem.
                    </div>
                  </div>
                  <div className="c-itemactions">
                    <div className="o-input__droplist2">
                      <label htmlFor="o-input__droplist-label2">Refine media type by:</label>
                      <select name="" id="o-input__droplist-label2">
                        <option value="">All</option>
                        <option value="">Documents</option>
                        <option value="">Images</option>
                        <option value="">Videos</option>
                        <option value="">Others</option>
                      </select>
                    </div>
                    <div className="o-download">
                      <a href="" className="o-download__button" download>Download All Files</a>
                      <details className="o-download__formats">
                        <summary aria-label="formats"></summary>
                        <ul className="o-download__single-menu">
                          <li><a href="">Image</a></li>
                          <li><a href="">Audio</a></li>
                          <li><a href="">Video</a></li>
                          <li><a href="">Zip</a></li>
                          <li><a href="">File</a></li>
                        </ul>
                      </details>
                    </div>
                  </div>
                  <MediaFileGridComp />
                </details>
              </div>
            </div>
          </main>
          <aside>
            <section className="o-columnbox1">
              <header>
                <h2>Jump To</h2>
              </header>
              <JumpComp />
            </section>
            <section className="o-columnbox1">
              <header>
                <h2>Related Items</h2>
              </header>
              <RelatedItemsComp />
            </section>
          </aside>
        </div>
        <FooterComp />
      </div>
    )
  }
}

module.exports = JournalItemMultimediaLayout;
