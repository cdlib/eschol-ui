// ##### Header Component ##### //

var ObjSearch = require('../objects/ObjSearch.jsx');

class CompHeader extends React.Component {
  constructor(props){
  	super(props)
  	this.state = {searchActive: false}
  }
  render() {
		return (
			<div className="c-header">
				<div className="c-header__logosearch">
					<a href="">
						<img src="/images/logo_escholarship.svg" alt="escholarship"/>
					</a>
					<div className={this.state.searchActive ? "c-header__search--active" : "c-header__search"}>
						<ObjSearch />
					</div>
					<button className="c-header__search-button" onClick={()=> this.setState({searchActive: !this.state.searchActive})}>X</button>
				</div>
				<div className="c-header__deposit">
					<button className="c-header__deposit-button">Deposit/Publish</button>
				</div>
			</div>
		)
	}
}

module.exports = CompHeader;
