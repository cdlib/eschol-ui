// ##### Sort Pagination Component ##### //

import React from 'react'
import SortComp from '../components/SortComp.jsx'

class SortPaginationComp extends React.Component {
  render() {
    return (
      <div className="c-sortpagination">
        <SortComp />
        <nav className="c-pagination--next">
          <ul>
            {/*
            Note the aria-label text differences in each list item below, including "last" result set:
            */}
            <li><a href="" className="c-pagination__item" aria-label="go to result set 1">1</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 2">2</a></li>
            <li><a href="" className="c-pagination__item--current" aria-label="you are on result set 3">3</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 4">4</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to last result set 1000">1000</a></li>
            <li className="c-pagination__next"><a href="" aria-label="go to next result set">Next</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

module.exports = SortPaginationComp;
