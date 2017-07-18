// ##### Search Component ##### //

import React from 'react'

class SearchComp2 extends React.Component {
  state={refineActive: false}
  makeActive = ()=> this.setState({refineActive: true})
  makeInactive = ()=> this.setState({refineActive: false})
  render() {
    return (
      <div className="c-search2">
        <div className="c-search2__inputs">
          <div className="c-search2__form">
            <label className="c-search2__label" htmlFor="global-search">Search eScholarship</label>
            <input type="search" id="global-search" className="c-search2__field" placeholder="Search" onFocus={this.makeActive} onBlur={this.makeInactive}/>
          </div>
          <fieldset>
            <legend>Refine Search</legend>
            <div className={this.state.refineActive ? "c-search2__refine--active" : "c-search2__refine"}>
              <input type="radio" name="search-refine" id="c-search2__refine-eschol" defaultChecked={true} onFocus={this.makeActive} onBlur={this.makeInactive}/>
              <label htmlFor="c-search2__refine-eschol">All of eScholarship</label>
              <input type="radio" name="search-refine" id="c-search2__refine-campus" onFocus={this.makeActive} onBlur={this.makeInactive}/>
              <label htmlFor="c-search2__refine-campus">This campus</label>
            </div>
          </fieldset>
        </div>
        <button className="c-search2__submit-button" aria-label="search"></button>
        <button className="c-search2__search-close-button" aria-label="close search field" onClick={()=>this.props.onClose()}></button>
      </div>
    )
  }
}

module.exports = SearchComp2;
