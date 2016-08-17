// ##### Search Object ##### //

class ObjSearch extends React.Component {
  render() {
		return (
			<form action="" className="o-search">
				<label className="o-search__label" htmlFor="global-search">Search eScholarship</label>
				<input type="search" id="global-search" className="o-search__field" placeholder="Search eScholarship" />
				<button type="submit" className="o-search__submit-button">Search</button>
			</form>
		)
	}
}

module.exports = ObjSearch;
