// ##### Breadcrumb Component ##### //

import React from 'react'

class TabComp extends React.Component {
  render() {
    return (
      <div className="c-tab">
        <div className="c-tab__bar">
          <details>
            <summary>Main Content</summary>
            <div className="c-tab__content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptas accusamus provident suscipit at voluptatum quod eum, facere iure ratione quaerat ex laudantium perspiciatis saepe porro et fugit quisquam doloremque!</div>
          </details>
          <details>
            <summary>Supplemental Material</summary>
            <div className="c-tab__content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere beatae quidem, eius accusantium officia in incidunt, hic totam eveniet vero, quam veniam nulla iure nesciunt non modi quaerat repellendus delectus.</div>
          </details>
          <details>
            <summary>Metrics</summary>
            <div className="c-tab__content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia architecto qui numquam, id, maxime molestiae autem officia deleniti magnam adipisci, suscipit a laborum quaerat cumque, vel minima! Sunt autem, illo.</div>
          </details>
          <details>
            <summary>Author & Article Info</summary>
            <div className="c-tab__content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores voluptatibus, nihil maiores voluptates nulla reiciendis, nam vitae. Sit, adipisci voluptatibus totam nemo quod, repellat deserunt. Hic officia a incidunt eaque.</div>
          </details>
          <details>
            <summary>Comments (2)</summary>
            <div className="c-tab__content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quam, explicabo enim deserunt iure, in nesciunt libero facere architecto maxime pariatur, consequuntur at cumque quos praesentium, mollitia nostrum recusandae eaque.</div>
          </details>
        </div>
      </div>
    )
  }
}

module.exports = TabComp;
