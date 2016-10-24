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
        <a href="">
          <img className="c-header2__logo" src="images/logo_temp-eschol-small.png" alt="escholarship"/>
        </a>  
        <div className={this.state.searchActive ? "c-header2__search--active" : "c-header2__search"}>
          <SearchComp2 onClose = {()=>this.setState({searchActive: false})} />
        </div>
        <button className="c-header2__search-open-button" aria-label="open search field" onClick = {()=> this.setState({searchActive: true})}></button>
      </div>
    )
  }
}

module.exports = HeaderComp2;
