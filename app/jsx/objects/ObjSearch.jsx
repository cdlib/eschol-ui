// ##### Search Object ##### //

class ObjSearch extends React.Component {
  render() {
		return (
			<div className="o-search">
				<form action="" className="o-search__form">
					<label className="o-search__label" htmlFor="global-search">Search eScholarship</label>
					<input type="search" id="global-search" className="o-search__field" placeholder="Search eScholarship" />
					<button type="submit" className="o-search__submit-button">Search</button>
					<button className="o-search__close-button" aria-label="close"></button>
				</form>
			</div>
		)
	}
}

module.exports = ObjSearch;
