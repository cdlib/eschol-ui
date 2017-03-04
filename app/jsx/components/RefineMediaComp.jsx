// ##### Refine Media Component ##### //

import React from 'react'

class RefineMediaComp extends React.Component {
  render() {
    return (
      <div className="c-refinemedia">
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
        <div className="c-download">
          <button className="c-download__button">Download All Files</button>
          <details className="c-download__formats">
            <summary aria-label="formats"></summary>
            <div className="c-download__menu">
              <div className="c-download__heading1" id="c-download__list1">
                Image
              </div>
              <div className="c-download__heading2" id="c-download__list2">
                Audio
              </div>
              <div className="c-download__heading3" id="c-download__list3">
                Video
              </div>
            </div>
          </details>
        </div>
      </div>
    )
  }
}

module.exports = RefineMediaComp;
