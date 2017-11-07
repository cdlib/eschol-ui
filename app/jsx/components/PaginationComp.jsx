// ##### Pagination Component ##### //

import React from 'react'

class PaginationComp extends React.Component {
  render() {
    return (
      <div className="c-pagination">
        {/* If the result set is "1", then the "Previous" button should be disabled */}
        <button disabled className="c-pagination__prevnext">Previous</button>
        {/* Note the <span>, not <button> for the current result set, with the aria-label containing 'current' text */}
        <span className="c-pagination__item--current" aria-label="2 current">1</span>
        <button className="c-pagination__item">2</button>

        <button className="c-pagination__item">3</button>
        <span className="c-pagination__ellipses">&hellip;</span>
        <button className="c-pagination__item">342</button>
        {/* If the result set is the last in the recordset, then the "Next" button should be disabled */}
        <button className="c-pagination__prevnext">Next</button>
      </div>
    )
  }
}

module.exports = PaginationComp;
