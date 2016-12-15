// ##### Breadcrumb Component ##### //

import React from 'react'

class TabComp extends React.Component {
  render() {
    return (
      <div className="c-tab">
        <details open>
          <summary>Main Content</summary>
          <div className="c-tab__content">
          Main content here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptas accusamus provident suscipit at voluptatum quod eum, facere iure ratione quaerat ex laudantium perspiciatis saepe porro et fugit quisquam doloremque!</div>
        </details>
        <details>
          <summary>Supplemental material</summary>
          <div className="c-tab__content">
          Supplemental Material here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere beatae quidem, eius accusantium officia in incidunt, hic totam eveniet vero, quam veniam nulla iure nesciunt non modi quaerat repellendus delectus.</div>
        </details>
        <details>
          <summary>Metrics</summary>
          <div className="c-tab__content">
          Metrics here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia architecto qui numquam, id, maxime molestiae autem officia deleniti magnam adipisci, suscipit a laborum quaerat cumque, vel minima! Sunt autem, illo.</div>
        </details>
        <details>
          <summary>Author & Article Info</summary>
          <div className="c-tab__content">
          Author & Article Info here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores voluptatibus, nihil maiores voluptates nulla reiciendis, nam vitae. Sit, adipisci voluptatibus totam nemo quod, repellat deserunt. Hic officia a incidunt eaque.</div>
        </details>
        <details>
          <summary>Comments (2)</summary>
          <div className="c-tab__content">
          Contents here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quam, explicabo enim deserunt iure, in nesciunt libero facere architecto maxime pariatur, consequuntur at cumque quos praesentium, mollitia nostrum recusandae eaque.</div>
        </details>
      </div>
    )
  }
}

module.exports = TabComp;
