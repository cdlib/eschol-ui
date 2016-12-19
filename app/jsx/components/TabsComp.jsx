// ##### Tabs Component ##### //

import React from 'react'
import Breakpoints from '../../js/breakpoints.json'

class TabsComp extends React.Component {
  componentWillMount() {
    if (matchMedia) {
      this.mq = matchMedia("(min-width:"+Breakpoints.screen1+")")
      this.mq.addListener(this.widthChange)
      this.widthChange()
    }
  }
  widthChange = ()=> {
    this.setState({isOpen: this.mq.matches})
  }
  render() {
    return (
      <div className="c-tabs">
        <div className="c-tabs__list">
          <button id="c-tabs__main" aria-selected="true">Main Content</button>
          <button id="c-tabs__supp" aria-selected="false">Supplemental material</button>
          <details open={this.state.isOpen ? "open" : ""} className="c-tabs__details">
            <summary>...</summary>
            <div className="c-tabs__details-buttons">
              <button id="c-tabs__metrics" aria-selected="false">Metrics</button>
              <button id="c-tabs__author" aria-selected="false">Author & Article Info</button>
              <button id="c-tabs__comments" aria-selected="false">Comments (2)</button>
            </div>
          </details>
        </div>
        <div className="c-tabs__panel--active" aria-labelledby="c-tabs__main">
          <h2>Main Content</h2>
          Main content here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptas accusamus provident suscipit at voluptatum quod eum, facere iure ratione quaerat ex laudantium perspiciatis saepe porro et fugit quisquam doloremque!
        </div>
        <div className="c-tabs__panel" aria-labelledby="c-tabs__supp">
          <h2>Supplemental material</h2>
          Supplemental material here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque id aliquid obcaecati recusandae magnam ratione illo aspernatur at itaque. Sapiente nihil in officiis, soluta incidunt ab iusto maiores sit!
        </div>
        <div className="c-tabs__panel" aria-labelledby="c-tabs__metrics">
          <h2>Metrics</h2>
          Metrics here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe reiciendis at nihil in modi esse ipsam rem veritatis quasi eum facere similique, impedit asperiores illo error. Delectus, temporibus expedita.
        </div>
        <div className="c-tabs__panel" aria-labelledby="c-tabs__author">
          <h2>Author & Article Info</h2>
          Author & Article Info here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima labore illo expedita. Excepturi porro animi ipsam facilis dignissimos assumenda fugit quod ullam inventore, accusamus non beatae enim sunt eveniet eum.
        </div>
        <div className="c-tabs__panel" aria-labelledby="c-tabs__comments">
          <h2>Comments</h2>
          Comments. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque provident, pariatur amet nobis facere deserunt, est suscipit adipisci dolorem. Esse laborum dolorem iusto, nostrum animi praesentium maxime minus temporibus blanditiis!
        </div>
      </div>
    )
  }
}

module.exports = TabsComp;
