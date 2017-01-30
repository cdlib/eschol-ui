// ##### Tab 1 Component ##### //

import React from 'react'
import ItemActionsComp from '../components/ItemActionsComp.jsx'
import AuthorListComp from '../components/AuthorListComp.jsx'
import PublishedLocationComp from '../components/PublishedLocationComp.jsx'
import ToggleContentComp from '../components/ToggleContentComp.jsx'

class Tab1Comp extends React.Component {
  render() {
    return (
      <div className="c-tab1">
        <ItemActionsComp />
        <h1>From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</h1>
          <AuthorListComp />
          <PublishedLocationComp />
          <ToggleContentComp />
      </div>
    )
  }
}

module.exports = Tab1Comp;
