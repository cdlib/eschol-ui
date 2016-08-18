// ##### Header Component ##### //

var ObjSearch = require('../objects/ObjSearch.jsx');

class CompHeader extends React.Component {
  render() {
		return (
			<div className="c-header">
				<div className="c-header__logosearch">
					<a href="">
						<img src="/images/logo_escholarship.svg" alt="escholarship"/>
					</a>
					<div className="c-header__search">
						<ObjSearch />
					</div>
					<button className="c-header__search-button">X</button>
				</div>
				<div className="c-header__deposit">
					<button className="c-header__deposit-button">Deposit/Publish</button>
				</div>
			</div>
		)
	}
}

module.exports = CompHeader;
