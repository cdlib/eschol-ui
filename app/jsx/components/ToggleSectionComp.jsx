// ##### Toggle Section Component ##### //

import React from 'react'

class ToggleSectionComp extends React.Component {
  state={showContent: true}

  render() {
    return (
      <section className="c-togglesection">
        <header className={this.state.showContent ? 'c-togglesection__header--open' : 'c-togglesection__header'} onClick={()=> this.setState({showContent: !this.state.showContent})} tabIndex="0">
          <h2>Toggle Section Heading</h2>
        </header>
        <div className="c-togglesection__content" hidden={!this.state.showContent}>
          Toggle Section Content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus temporibus expedita laudantium fugiat, ipsam, repellat labore, adipisci itaque est id optio corrupti. Quas laudantium nobis magnam dignissimos, autem incidunt optio?
        </div>
      </section>
    )
  }
}

module.exports = ToggleSectionComp;
