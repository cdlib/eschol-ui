// ##### Pagination Component ##### //

import React from 'react'

class PaginationComp extends React.Component {
  render() {
    return (
      <div>

        <h2>Result Set Less Than or Equal to 5</h2>
        <nav className="c-pagination">
          <ul>
            {/*
            Note the aria-label text differences in each list item below, including "last" result set:
            */}
            <li><a href="" className="c-pagination__item" aria-label="go to result set 1">1</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 2">2</a></li>
            <li><a href="" className="c-pagination__item--current" aria-label="you are on result set 3">3</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 4">4</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 5">5</a></li>
          </ul>
        </nav>

        <h2>Result Set Greater Than 5, Beginning of Set</h2>
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

        <h2>Result Set Greater Than 5, Middle of Set</h2>
        <nav className="c-pagination--prev--next">
          <ul>
            {/*
            Note the aria-label text differences in each list item below, including "last" result set:
            */}
            <li className="c-pagination__prev"><a href="" aria-label="go to previous result set">Previous</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 1">1</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 46">46</a></li>
            <li><a href="" className="c-pagination__item--current" aria-label="you are on result set 47">47</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 48">48</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to last result set 1000">1000</a></li>
            <li className="c-pagination__next"><a href="" aria-label="go to next result set">Next</a></li>
          </ul>
        </nav>
        
        <h2>Result Set Greater Than 5, End of Set</h2>
        <nav className="c-pagination--prev">
          <ul>
            {/*
            Note the aria-label text differences in each list item below, including "last" result set:
            */}
            <li className="c-pagination__prev"><a href="" aria-label="go to previous result set">Previous</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 1">1</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 997">997</a></li>
            <li><a href="" className="c-pagination__item--current" aria-label="you are on result set 998">998</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 999">999</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to last result set 1000">1000</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

module.exports = PaginationComp;
