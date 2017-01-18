// ##### Navigation Sub-component ##### //

import React from 'react'

class NavSubComp extends React.Component {
  render() {
    return (
      <details className="c-nav3__sub" ref={(domNode)=> this.nav3__sub = domNode}>
        <summary className="c-nav3__sub-button" onClick = {(event)=> {this.props.onSubmenuChanged( !this.nav3__sub.open); console.log("click", !this.nav3__sub.open)}}>
          {this.props.name}
        </summary>
        <div className="c-nav3__sub-items">
          <button className="c-nav3__sub-items-button" aria-label="return to menu" onClick = {()=> { this.props.onSubmenuChanged(false); this.nav3__sub.open = false; }}>Main Menu</button>
          {this.props.children}
        </div>
      </details>
    )
  }
}

module.exports = NavSubComp;
