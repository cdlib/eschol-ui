// ##### Pagination Component ##### //

import React from 'react'

class PaginationComp extends React.Component {
  render() {
    return (
      <nav className="c-pagination">
        <ul>
          {/*
          If the result set is first in the recordset, then change the "Previous" <a> tag to a <span>, as below:
          
          Note the aria-label text differences in each list item below:
          */}
          <li><span className="c-pagination__prevnext" aria-label="go to previous result set">Previous</span></li>
          <li><a href="" className="c-pagination__item--current" aria-label="you are on result set 1">1</a></li>
          <li><a href="" className="c-pagination__item" aria-label="go to result set 2">2</a></li>
          <li><a href="" className="c-pagination__item" aria-label="go to result set 3">3</a></li>
          <li><a href="" className="c-pagination__item" aria-label="go to result set 342">342</a></li>
          {/* If the result set is last in the recordset, then change the "Next" <a> tag to a <span> below: */}
          <li><a href="" className="c-pagination__prevnext" aria-label="go to next result set">Next</a></li>
        </ul>
      </nav>
    )
  }
}

module.exports = PaginationComp;
