// ##### Teaser Component ##### //

import React from 'react'

class TeaserComp extends React.Component {
  render() {
    return (
      <div className="c-teaser">
        <section>
          <header>
            <h2>eScholarship Repository</h2>
            <p>Illum officiis eos animi blanditiis dolores aliquam quia eum expedita beatae iste alias.
            </p>
            <a href="">Learn more</a>
          </header>
        </section>
        <section>
          <header>
            <h2>eScholarship Publishing</h2>
            <p>Quod dolorem, nostrum ad quas quam doloribus labore quia a modi officiis unde natus.
            </p>
            <a href="">Learn more</a>
          </header>
        </section>
      </div>
    )
  }
}

module.exports = TeaserComp;
