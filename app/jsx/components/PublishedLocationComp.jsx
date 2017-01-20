// ##### Published Location Component ##### //

import React from 'react'

class PublishedLocationComp extends React.Component {
  render() {
    return (
      <div className="c-publishedlocation">
        <div className="c-publishedlocation__location">
          <p><a className="o-textlink__secondary" href="">Published Web Location</a></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus rem ad sequi quia aut nisi, facilis harum ducimus eos itaque consequuntur! Ad esse aliquam voluptatibus ut eveniet optio, mollitia voluptas?</p>
        </div>
        <a href="" className="c-publishedlocation__license">
          <img src="../images/icon_cc-by-nc.svg" alt=""/>
        </a>
      </div>
    )
  }
}

module.exports = PublishedLocationComp;
