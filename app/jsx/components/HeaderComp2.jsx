// ##### Header2 Component ##### //

import React from 'react'
import SearchComp2 from '../components/SearchComp2.jsx'

class HeaderComp2 extends React.Component {
  constructor(props){
  	super(props)
  	this.state = {searchActive: false}
  }
  render() {
		return (
			<div className="c-header2">
				<div className="c-header2__logosearch">
					<a href="">
						<img src="images/logo_escholarship.svg" alt="escholarship"/>
					</a>	
					<div className={this.state.searchActive ? "c-header2__search--active" : "c-header2__search"}>
						<SearchComp2 onClose = {()=>this.setState({searchActive: false})} />
					</div>
					<button className="c-header2__search-open-button" aria-label="open search field" onClick = {()=> this.setState({searchActive: true})}></button>
				</div>
				<div className="c-header2__deposit">
					<button className="c-header2__deposit-button">Deposit/Publish</button>
				</div>
			</div>
		)
	}
}

module.exports = HeaderComp2;
