// ##### Search Component ##### //

import React from 'react'

class SearchComp2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {refineActive: false}
  }
  render() {
    return (
      <div className="c-search2">
        <div className="c-search2__inputs">
          <div className="c-search2__form">
            <label className="c-search2__label" htmlFor="global-search">Search eScholarship</label>
            <input type="search" id="global-search" className="c-search2__field" placeholder="Search" onFocus = {()=> this.setState({refineActive: true})} onBlur = {()=> this.setState({refineActive: false})}/>
          </div>
          <div className={this.state.refineActive ? "c-search2__refine--active" : "c-search2__refine"}>
            <input type="radio" name="search-refine" id="c-search2__refine-eschol" defaultChecked={true}/>
            <label htmlFor="c-search2__refine-eschol">All of eScholarship</label>
            <input type="radio" name="search-refine" id="c-search2__refine-campus"/>
            <label htmlFor="c-search2__refine-campus">This campus</label>
          </div>
        </div>
        <button className="c-search2__submit-button" aria-label="search"></button>
        <button className="c-search2__search-close-button" aria-label="close search field" onClick = {()=>this.props.onClose()}></button>
      </div>
    )
  }
}

module.exports = SearchComp2;
