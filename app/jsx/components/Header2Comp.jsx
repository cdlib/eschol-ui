// ##### Header2 Component ##### //

import React from 'react'
import Search2Comp from '../components/Search2Comp.jsx'
import Breakpoints from '../../js/breakpoints.json'

class HeaderComp2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {searchActive: false}
  }
  render() {
    return (
      <header className="c-header">
        <a className="c-header__logo2" href="">
          <picture>
            <source srcSet="images/logo_eschol-small.svg" media={"(min-width: "+Breakpoints.screen3+")"}/>
            <img src="images/logo_eschol-mobile.svg" alt="escholarship"/>
          </picture>
          <div className="c-header__logo2-tagline">
            Open Access Publications from the University of California
          </div>
        </a>  
        <div className={this.state.searchActive ? "c-header__search--active" : "c-header__search"}>
          <Search2Comp onClose = {()=>this.setState({searchActive: false})} />
        </div>
        <button className="c-header__search-open-button" aria-label="open search field" onClick = {()=> this.setState({searchActive: true})}></button>
      </header>
    )
  }
}

module.exports = HeaderComp2;
