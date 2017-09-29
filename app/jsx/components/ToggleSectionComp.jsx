// ##### Toggle Section Component ##### //

import React from 'react'

class ToggleSectionComp extends React.Component {
  state={showMore: false}

  render() {
    return (
      <section className="c-togglesection">
        <header tabIndex="0" onClick={()=> this.setState({showMore: true})}>
          <h2>Toggle Section Heading</h2>
        </header>
        <div className="c-togglesection__content" hidden={!this.state.showMore}>
          Toggle Section Content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus temporibus expedita laudantium fugiat, ipsam, repellat labore, adipisci itaque est id optio corrupti. Quas laudantium nobis magnam dignissimos, autem incidunt optio?
        </div>
      </section>
    )
  }
}

module.exports = ToggleSectionComp;
