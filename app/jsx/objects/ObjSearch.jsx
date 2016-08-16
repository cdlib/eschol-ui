// ##### Search Object ##### //

class ObjSearch extends React.Component {
  render() {
		return (
			<div className="o-search">
				<form action="">
					<label htmlFor="global-search">Search eScholarship</label>
					<input type="search" id="global-search" className="o-search__label" />
				</form>
			</div>
		)
	}
}

module.exports = ObjSearch;
