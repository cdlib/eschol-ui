// ##### Tabs Component ##### //

import React from 'react'
import TabMainComp from '../components/TabMainComp.jsx'
import TabSupplementalComp from '../components/TabSupplementalComp.jsx'
import TabMetricsComp from '../components/TabMetricsComp.jsx'
import TabAuthorComp from '../components/TabAuthorComp.jsx'
import TabCommentsComp from '../components/TabCommentsComp.jsx'
import $ from 'jquery'

class TabsComp extends React.Component {
  constructor(props){
    super(props)
    this.state = {currentTab: 1, moreTabs: false}
  }
  tabFocus(tabNumber) {
    // For keyboard users, jump to heading within the tab.
    // setTimeout(()=>$(".c-tabcontent__heading").focus(), 0)
    this.setState({currentTab: tabNumber})
  }
  render() {
    return (
      <div className={this.state.moreTabs ? "c-tabs--show-all" : "c-tabs"}>
        <details className="c-tabs__details">
          <summary className={this.state.currentTab === 1 ? "c-tabs__summary--active" : "c-tabs__summary"} onClick = {()=> this.tabFocus(1)}>Main Content</summary>
          <div className="c-tabs__tabpanel">
            {this.state.currentTab === 1 ? <TabMainComp /> : null}
          </div>
        </details>
        <details className="c-tabs__details">
          <summary className={this.state.currentTab === 2 ? "c-tabs__summary--active" : "c-tabs__summary"} onClick = {()=> this.tabFocus(2)}>Supplemental material</summary>
          <div className="c-tabs__tabpanel">
            {this.state.currentTab === 2 ? <TabSupplementalComp /> : null}
          </div>
        </details>
        <details className="c-tabs__details">
          <summary className={this.state.currentTab === 3 ? "c-tabs__summary--active" : "c-tabs__summary"} onClick = {()=> this.tabFocus(3)}>Metrics</summary>
          <div className="c-tabs__tabpanel">
            {this.state.currentTab === 3 ? <TabMetricsComp /> : null}
          </div>
        </details>
        <details className="c-tabs__details">
          <summary className={this.state.currentTab === 4 ? "c-tabs__summary--active" : "c-tabs__summary"} onClick = {()=> this.tabFocus(4)}>Author & Article Info</summary>
          <div className="c-tabs__tabpanel">
            {this.state.currentTab === 4 ? <TabAuthorComp /> : null}
          </div>
        </details>
        <details className="c-tabs__details">
          <summary className={this.state.currentTab === 5 ? "c-tabs__summary--active" : "c-tabs__summary"} onClick = {()=> this.tabFocus(5)}>Comments</summary>
          <div className="c-tabs__tabpanel">
            {this.state.currentTab === 5 ? <TabCommentsComp /> : null}
          </div>
        </details>
        <button className="c-tabs__button" onClick = {()=> this.setState({moreTabs: !this.state.moreTabs})} aria-label="Show all tabs">...</button>
      </div>
    )
  }
}

module.exports = TabsComp;
