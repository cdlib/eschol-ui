// ##### Tabs Component ##### //

import React from 'react'
import Tab1Comp from '../components/Tab1Comp.jsx'
import Tab2Comp from '../components/Tab2Comp.jsx'
import Tab3Comp from '../components/Tab3Comp.jsx'
import Tab4Comp from '../components/Tab4Comp.jsx'
import Tab5Comp from '../components/Tab5Comp.jsx'

class TabsComp extends React.Component {
  constructor(props){
    super(props)
    this.state = {currentTab: 1, moreTabs: false}
  }
  render() {
    return (
      <div className="c-tabs">
        <div className={this.state.moreTabs ? "c-tabs__tabs--show-all" : "c-tabs__tabs"}>
          <button className="c-tabs__button-more" onClick = {()=> this.setState({moreTabs: true})} aria-label="Show all tabs">...</button>
          <button className={this.state.currentTab === 1 ? "c-tabs__button--active" : "c-tabs__button"} onClick = {()=> this.setState({currentTab: 1})}>Main Content</button>
          <button className={this.state.currentTab === 2 ? "c-tabs__button--active" : "c-tabs__button"} onClick = {()=> this.setState({currentTab: 2})}>Supplemental material</button>
          <button className={this.state.currentTab === 3 ? "c-tabs__button--active" : "c-tabs__button"} onClick = {()=> this.setState({currentTab: 3})}>Metrics</button>
          <button className={this.state.currentTab === 4 ? "c-tabs__button--active" : "c-tabs__button"} onClick = {()=> this.setState({currentTab: 4})}>Author & Article Info</button>
          <button className={this.state.currentTab === 5 ? "c-tabs__button--active" : "c-tabs__button"} onClick = {()=> this.setState({currentTab: 5})}>Comments (2)</button>
        </div>
        <div className="c-tabs__panel">
          {this.state.currentTab === 1 ? <Tab1Comp /> : null}
          {this.state.currentTab === 2 ? <Tab2Comp /> : null}
          {this.state.currentTab === 3 ? <Tab3Comp /> : null}
          {this.state.currentTab === 4 ? <Tab4Comp /> : null}
          {this.state.currentTab === 5 ? <Tab5Comp /> : null}
        </div>
      </div>
    )
  }
}

module.exports = TabsComp;
