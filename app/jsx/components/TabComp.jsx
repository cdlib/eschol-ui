// ##### Breadcrumb Component ##### //

import React from 'react'

class TabComp extends React.Component {
  render() {
    return (
      <div className="c-tab">
        <div className="c-tab__list">
          <button aria-selected="true">Main Content</button>
          <button aria-selected="false">Supplemental material</button>
          <details className="c-tab__details">
            <summary>...</summary>
            <button aria-selected="false">Metrics</button>
            <button aria-selected="false">Author & Article Info</button>
            <button aria-selected="false">Comments (2)</button>
          </details>
        </div>
        <div className="c-tab__panel" aria-labelledby="">
          <h2>Main Content</h2>
          Main content here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptas accusamus provident suscipit at voluptatum quod eum, facere iure ratione quaerat ex laudantium perspiciatis saepe porro et fugit quisquam doloremque!
        </div>
        <div className="c-tab__panel" aria-labelledby="">
          <h2>Supplemental material</h2>
          Supplemental material here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque id aliquid obcaecati recusandae magnam ratione illo aspernatur at itaque. Sapiente nihil in officiis, soluta incidunt ab iusto maiores sit!
        </div>
        <div className="c-tab__panel" aria-labelledby="">
          <h2>Metrics</h2>
          Metrics here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe reiciendis at nihil in modi esse ipsam rem veritatis quasi eum facere similique, impedit asperiores illo error. Delectus, temporibus expedita.
        </div>
        <div className="c-tab__panel" aria-labelledby="">
          <h2>Author & Article Info</h2>
          Author & Article Info here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima labore illo expedita. Excepturi porro animi ipsam facilis dignissimos assumenda fugit quod ullam inventore, accusamus non beatae enim sunt eveniet eum.
        </div>
        <div className="c-tab__panel" aria-labelledby="">
          <h2>Comments</h2>
          Comments. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque provident, pariatur amet nobis facere deserunt, est suscipit adipisci dolorem. Esse laborum dolorem iusto, nostrum animi praesentium maxime minus temporibus blanditiis!
        </div>
      </div>
    )
  }
}

module.exports = TabComp;
