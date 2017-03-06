// ##### Download Component ##### //

import React from 'react'

class DownloadComp extends React.Component {
  render() {
    return (
      <div className="c-download">
        <button className="c-download__button">Download PDF</button>
        <details className="c-download__formats">
          <summary aria-label="formats"></summary>
          <ul className="c-download__menu">
            <li className="c-download__heading1">
              Main
              <ul className="c-download__list">
                <li><a href="">PDF</a></li>
                <li><a href="">ePub</a></li>
                <li><a href="">HTML</a></li>
              </ul>
            </li>
            <li className="c-download__heading2">
              Citation
              <ul className="c-download__list">
                <li><a href="">RIS</a></li>
                <li><a href="">BibText</a></li>
                <li><a href="">EndNote</a></li>
                <li><a href="">RefWorks</a></li>
              </ul>
            </li>
            <li className="c-download__heading3">
              Supplemental Material
              <ul className="c-download__list">
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
    )
  }
}

module.exports = DownloadComp;
