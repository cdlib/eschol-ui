// ##### Toggle List Sub Component ##### //

import React from 'react'

class ToggleListSubComp extends React.Component {
  constructor(props){
    super(props)
    this.state = {open: false, date: new Date()}
  }
  render() {
    return (
      <details className="c-togglelist__sublist" open={this.props.override.date > this.state.date ? this.props.override.open : this.state.open}>
        <summary onClick={event => this.setState({open: !event.target.open})}>{this.props.title}</summary>
        <ul>
          {this.props.children}
        </ul>
      </details>
    )
  }
}

module.exports = ToggleListSubComp;
