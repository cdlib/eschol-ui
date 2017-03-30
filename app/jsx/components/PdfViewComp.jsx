// ##### PDF View Component ##### //

import React from 'react'

class PdfViewComp extends React.Component {
  render() {
    return (
      <details className="c-togglecontent" open>
        <summary>Main Content</summary>
        <div className="c-pdfview">
          <button className="c-pdfview__button-download">Download PDF to View</button>
          <button className="c-pdfview__button-view">View Larger</button>
        </div>
        <div className="c-pdfview__viewer">
          [PDF viewer to go here]
        </div>
      </details>
    )
  }
}

module.exports = PdfViewComp;
