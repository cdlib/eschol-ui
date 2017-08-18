// ##### Tab Author & Article Component ##### //

import React from 'react'

class TabAuthorComp extends React.Component {
  render() {
    return (
      <div className="c-tabcontent">
        <div className="c-itemactions">
          <div className="o-download">
            <a href="" className="o-download__button" download>Download Citation</a>
            <details className="o-download__formats">
              <summary aria-label="formats"></summary>
              <ul className="o-download__single-menu">
                <li><a href="">RIS</a></li>
                <li><a href="">BibTex</a></li>
                <li><a href="">EndNote</a></li>
                <li><a href="">RefWorks</a></li>
              </ul>
            </details>
          </div>
        </div>
        <h1 className="c-tabcontent__main-heading" tabIndex="-1">Author & Article Info</h1>
        <details className="c-togglecontent" open>
          <summary>Author(s)</summary>
          <dl className="c-descriptionlist">
            <dt><a href="">Kevin W. Dahle</a></dt>
            <dd>Department of Dermatology, University of Utah School of Medicine, Salt Lake City, Utah <a className="o-textlink__secondary" href="">http://orcid.org/0000-0001-8232-3134</a></dd>
          </dl>
        </details>
        <details className="c-togglecontent" open>
          <summary>Citation</summary>
          <dl className="c-descriptionlist">
            <dt><a href="">APA</a></dt>
            <dd>Heredia, J. (2013, April 9). From the New Heights: The City and Migrating Latinas in Real Women Have Curves and Mari­a Full of Grace. Retrieved August 12, 2015, from <a className="o-textlink__secondary" href="">http://escholarship.org/uc/item/0p97f0mc</a>.</dd>
            <dt><a href="">MLA</a></dt>
            <dd>Heredia, Juanita. "From the New Heights: The City and Migrating Latinas in Real Women Have Curves and MarÃ­a Full of Grace." EScholarship. Mester, 42(1), 9 Apr. 2013. Web. 12 Aug. 2015. <a className="o-textlink__secondary" href="">http://escholarship.org/uc/item/0p97f0mc</a>.</dd>
            <dt><a href="">Chicago</a></dt>
            <dd>Heredia, Juanita. "From the New Heights: The City and Migrating Latinas in Real Women Have Curves and MarÃ­a Full of Grace." EScholarship. Mester, 42(1), 9 Apr. 2013. Web. 12 Aug. 2015. <a className="o-textlink__secondary" href="">http://escholarship.org/uc/item/0p97f0mc</a>.</dd>
          </dl>
        </details>
        <details className="c-togglecontent" open>
          <summary>Other information</summary>
          <dl className="c-descriptionlist">
            <dt><a href="">e-ISSN</a></dt>
            <dd>0160-2764</dd>
            <dt><a href="">Campus</a></dt>
            <dd>UCLA</dd>
            <dt><a href="">Peer-Reviewed</a></dt>
            <dd>Yes</dd>
            <dt><a href="">License</a></dt>
            <dd>Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) <a className="o-textlink__secondary" href="">http://creativecommons.org/licenses/by-nc/4.0/</a></dd>
          </dl>
        </details>
      </div>
    )
  }
}

module.exports = TabAuthorComp;
