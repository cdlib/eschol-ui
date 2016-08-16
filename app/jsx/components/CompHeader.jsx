// ##### Header Component ##### //

var ObjSearch = require('../objects/ObjSearch.jsx');

class CompHeader extends React.Component {
  render() {
		return (
			<div className="c-header">
				<a href="">
					<img src="/images/logo_escholarship.svg" alt="escholarship"/>
				</a>
				<ObjSearch />
			</div>
		)
	}
}

module.exports = CompHeader;
