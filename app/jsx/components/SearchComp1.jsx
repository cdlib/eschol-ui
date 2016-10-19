// ##### Search Component ##### //

import React from 'react'

class SearchComp1 extends React.Component {
  render() {
		return (
			<form action="" className="c-search">
				<div className="c-search__form">
					<label className="c-search__label" htmlFor="global-search">Search eScholarship</label>
					<input type="search" id="global-search" className="c-search__field" placeholder="Search eScholarship"/>
					<button type="submit" className="c-search__submit-button" aria-label="search"></button>
					<button className="c-search__search-close-button" aria-label="close search field" onClick = {()=>this.props.onClose()}></button>
				</div>
				<div className="c-search__tagline">
					Open Access publications from the University of California
				</div>
			</form>
		)
	}
}

module.exports = SearchComp1;
