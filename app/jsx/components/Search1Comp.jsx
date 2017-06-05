// ##### Search Component ##### //

import React from 'react'

class SearchComp1 extends React.Component {
  render() {
    return (
      <div className="c-search1">
        <div className="c-search1__form">
          <label className="c-search1__label" htmlFor="c-search1__field" aria-labelledby="c-search1__tagline">search</label>
          <input type="search" id="c-search1__field" className="c-search1__field" placeholder="Search for articles, books, theses, and more"/>
          <button className="c-search1__submit-button" aria-label="submit search"></button>
          <button className="c-search1__search-close-button" aria-label="close search field" onClick = {()=>this.props.onClose()}></button>
        </div>
        <div id="c-search1__tagline" className="c-search1__tagline">
          Open Access publications from the University of California
        </div>
      </div>
    )
  }
}

module.exports = SearchComp1;
