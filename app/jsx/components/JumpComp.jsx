// ##### Jump Component ##### //

import React from 'react'
import Breakpoints from '../../js/breakpoints.json'

class JumpComp extends React.Component {

  componentWillMount() {
    if (matchMedia) {
      this.mq = matchMedia("(min-width:"+Breakpoints.screen2+")")
      this.mq.addListener(this.widthChange)
      this.widthChange()
    }
  }

  widthChange = ()=> {
    this.setState({show: this.mq.matches})
  }

  render() {
    return (
      <section className="o-columnbox1" hidden={!this.state.show}>
        <header>
          <h2>Jump To</h2>
        </header>
        <div className="c-jump">
          <a id="c-jump__label" href="">Article</a>
          <ul className="c-jump__tree" aria-labelledby="c-jump__label">
            <li><a href="">Abstract</a></li>
            <li><a href="">Main Content</a></li>
            <li><a href="">References</a></li>
            <li><a href="">Author Response</a></li>
          </ul>
          <ul className="c-jump__siblings">
            <li><a href="">Supplemental Material</a></li>
            <li><a href="">Metrics</a></li>
            <li><a href="">Author & Article Info</a></li>
            <li><a href="">Comments</a></li>
          </ul>
        </div>
      </section>
    )
  }
}

module.exports = JumpComp;
