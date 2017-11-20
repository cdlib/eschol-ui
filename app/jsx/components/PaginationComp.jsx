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
            If the result set is first in the recordset, then change the "Previous" <a> tag to a <span>, as below:
            
            Note the aria-label text differences in each list item below:
            */}
            <li className="c-pagination__prev" aria-label="go to previous result set">Previous</li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 1">1</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 2">2</a></li>
            <li><a href="" className="c-pagination__item--current" aria-label="you are on result set 3">3</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 4">4</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 5">5</a></li>
            {/* If the result set is last in the recordset, then change the "Next" <a> tag to a <span> below: */}
            <li className="c-pagination__next" aria-label="go to next result set">Next</li>
          </ul>
        </nav>

        <h2>Result Set Greater Than 5, Beginning of Set</h2>
        <nav className="c-pagination--next">
          <ul>
            {/*
            If the result set is first in the recordset, then change the "Previous" <a> tag to a <span>, as below:
            
            Note the aria-label text differences in each list item below:
            */}
            <li className="c-pagination__prev" aria-label="go to previous result set">Previous</li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 1">1</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 2">2</a></li>
            <li><a href="" className="c-pagination__item--current" aria-label="you are on result set 3">3</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 4">4</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 1000">1000</a></li>
            {/* If the result set is last in the recordset, then change the "Next" <a> tag to a <span> below: */}
            <li className="c-pagination__next"><a href="" aria-label="go to next result set">Next</a></li>
          </ul>
        </nav>

        <h2>Result Set Greater Than 5, Middle of Set</h2>
        <nav className="c-pagination--prev--next">
          <ul>
            {/*
            If the result set is first in the recordset, then change the "Previous" <a> tag to a <span>, as below:
            
            Note the aria-label text differences in each list item below:
            */}
            <li className="c-pagination__prev"><a href="" aria-label="go to previous result set">Previous</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 1">1</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 46">46</a></li>
            <li><a href="" className="c-pagination__item--current" aria-label="you are on result set 47">47</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 48">48</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 1000">1000</a></li>
            {/* If the result set is last in the recordset, then change the "Next" <a> tag to a <span> below: */}
            <li className="c-pagination__next"><a href="" aria-label="go to next result set">Next</a></li>
          </ul>
        </nav>
        
        <h2>Result Set Greater Than 5, End of Set</h2>
        <nav className="c-pagination--prev">
          <ul>
            {/*
            If the result set is first in the recordset, then change the "Previous" <a> tag to a <span>, as below:
            
            Note the aria-label text differences in each list item below:
            */}
            <li className="c-pagination__prev"><a href="" aria-label="go to previous result set">Previous</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 1">1</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 997">997</a></li>
            <li><a href="" className="c-pagination__item--current" aria-label="you are on result set 998">998</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 999">999</a></li>
            <li><a href="" className="c-pagination__item" aria-label="go to result set 1000">1000</a></li>
            {/* If the result set is last in the recordset, then change the "Next" <a> tag to a <span> below: */}
            <li className="c-pagination__next" aria-label="go to next result set">Next</li>
          </ul>
        </nav>
      </div>
    )
  }
}

module.exports = PaginationComp;
