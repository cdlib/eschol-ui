// ##### Description List Component ##### //

// The <dt>s use linked text in the example below but the <dd>s can instead use linked text depending on the design requirement

import React from 'react'

class DescriptionListComp extends React.Component {
  render() {
    return (
      <dl className="c-descriptionlist">
        <dt><a href="">UC Berkeley</a></dt>
        <dd>17,280 Publications, 74 Units, 26 Journals</dd>
        <dt><a href="">UC Davis</a></dt>
        <dd>17,280 Publications, 74 Units, 26 Journals</dd>
        <dt><a href="">UC Irvine</a></dt>
        <dd>17,280 Publications, 74 Units, 26 Journals</dd>
        <dt><a href="">UCLA</a></dt>
        <dd>17,280 Publications, 74 Units, 26 Journals</dd>
        <dt><a href="">UC Merced</a></dt>
        <dd>17,280 Publications, 74 Units, 26 Journals</dd>
      </dl>
    )
  }
}

module.exports = DescriptionListComp;
