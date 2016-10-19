// ##### Header Component ##### //

import React from 'react'
import SearchComp1 from '../components/SearchComp1.jsx'

class HeaderComp3 extends React.Component {
  constructor(props){
  	super(props)
  	this.state = {searchActive: false}
  }
  render() {
		return (
			<div className="c-header">
				<div className="c-header__logosearch">
					<a href="">
						<img src="images/logo_escholarship.svg" alt="escholarship"/>
					</a>	
					<div className={this.state.searchActive ? "c-header__search--active" : "c-header__search"}>
						<SearchComp1 onClose = {()=>this.setState({searchActive: false})} />
					</div>
					<button className="c-header__search-open-button" aria-label="open search field" onClick = {()=> this.setState({searchActive: true})}></button>
				</div>
				<div className="c-header__deposit">
					<button className="c-header__deposit-button">Deposit/Publish</button>
				</div>
			</div>
		)
	}
}

module.exports = HeaderComp3;
