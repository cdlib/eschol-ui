// ##### Refine Component ##### //

import React from 'react'
import Breakpoints from '../../js/breakpoints.json'

class RefineComp extends React.Component {
  state={refineActive: false, drawerOpen: false}

  componentWillMount() {
    if (matchMedia) {
      this.mq = matchMedia("(min-width:"+Breakpoints.screen1+")")
      this.mq.addListener(this.widthChange)
      this.widthChange()
    }
  }
  widthChange = ()=> {
    this.setState({refineActive: this.mq.matches, drawerOpen: this.mq.matches})
  }

  render() {
    return (

      <div className={this.state.refineActive ? "c-refine" : "c-refine--active"}>
        <button className="c-refine__button--open" onClick={()=> this.setState({drawerOpen: true})} hidden={this.state.drawerOpen}>Refine Results</button>
        <button className="c-refine__button--close" onClick={()=> this.setState({drawerOpen: false})} hidden={!this.state.drawerOpen}>Back to Results</button>
        <div className={this.state.drawerOpen ? "c-refine__drawer--opened" : "c-refine__drawer--closed"}>
          [facets to go here]
          <ul>
            <li>Facet ipsum dolor sit amet.
            </li>
            <li>Facet maxime inventore animi, tempore.
            </li>
            <li>Facet ducimus commodi molestiae, unde.
            </li>
            <li>Facet quam suscipit consequatur saepe!
            </li>
            <li>Facet nemo et, assumenda veritatis.
            </li>
            <li>Facet quibusdam, cupiditate maxime velit.
            </li>
          </ul>
        </div>
        <div>Content after facets. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam provident commodi facere, sint incidunt nihil. Vitae rerum nemo tempora cupiditate! Facilis repellendus ullam eveniet repellat magni vitae ipsum mollitia facere perspiciatis aliquam eum rem corporis, itaque aspernatur modi repudiandae dolorem nobis, ipsa ipsam doloribus. Totam, quo. Perferendis quae rem, explicabo natus sapiente officiis quod at ratione. Perferendis minus perspiciatis nemo ipsum eos doloribus nam, officia quisquam odit in modi similique sit sapiente veniam pariatur sequi non molestias iusto eveniet quas? Dignissimos, quibusdam! Officiis in, officia placeat. Obcaecati vitae fuga repellat autem quaerat, et sint cupiditate odio, sapiente inventore consequuntur voluptatem.</div>
      </div>
    )
  }
}

module.exports = RefineComp;
