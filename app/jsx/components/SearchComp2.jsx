// ##### Search Component ##### //

import React from 'react'

class SearchComp2 extends React.Component {
  render() {
		return (
			<form action="" className="c-search">
				<div className="c-search__thesearch">
					<div className="c-search__form">
						<label className="c-search__label" htmlFor="global-search">Search eScholarship</label>
						<input type="search" id="global-search" className="c-search__field" placeholder="Search eScholarship"/>
					</div>
					<div className="c-search__refine">
						<input type="radio" name="search-refine" id="c-search__refine-eschol"/>
						<label htmlFor="c-search__refine-eschol">All of eScholarship</label>
						<input type="radio" name="search-refine" id="c-search__refine-campus"/>
						<label htmlFor="c-search__refine-campus">This campus</label>
					</div>
				</div>
				<div className="c-search__buttons">
					<button type="submit" className="c-search__submit-button" aria-label="search"></button>
					<button className="c-search__search-close-button" aria-label="close search field" onClick = {()=>this.props.onClose()}></button>
				</div>
			</form>
		)
	}
}

module.exports = SearchComp2;
