// ##### Header1 Component ##### //

import React from 'react'
import Search1Comp from '../components/Search1Comp.jsx'
import Breakpoints from '../../js/breakpoints.json'

class HeaderComp1 extends React.Component {
  constructor(props){
    super(props)
    this.state = {searchActive: false}
  }
  render() {
    return (
      <header id="#top" className="c-header">
        <a className="c-header__logo1" href="">
          <picture>
            <source srcSet="images/logo_escholarship.svg" media={"(min-width: "+Breakpoints.screen3+")"}/>
            <img src="images/logo_eschol-mobile.svg" alt="escholarship"/>
          </picture>
        </a>
        <div className={this.state.searchActive ? "c-header__search--active" : "c-header__search"}>
          <Search1Comp onClose = {()=>this.setState({searchActive: false})} />
        </div>
        <button className="c-header__search-open-button" aria-label="open search field" onClick = {()=> this.setState({searchActive: true})}></button>
      </header>
    )
  }
}

module.exports = HeaderComp1;
