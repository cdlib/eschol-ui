// ##### Search Component ##### //

import React from 'react'

class SearchComp1 extends React.Component {
  render() {
    return (
      <div className="c-search1">
        <div className="c-search1__form">
          <label className="c-search1__label" htmlFor="global-search">Search eScholarship</label>
          <input type="search" id="global-search" className="c-search1__field" placeholder="Search"/>
          <button className="c-search1__submit-button" aria-label="search"></button>
          <button className="c-search1__search-close-button" aria-label="close search field" onClick = {()=>this.props.onClose()}></button>
        </div>
        <div className="c-search1__tagline">
          Open Access publications from the University of California
        </div>
      </div>
    )
  }
}

module.exports = SearchComp1;
