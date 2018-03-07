// ##### Tab Main Content Component ##### //

import React from 'react'
import WellComp from '../components/WellComp.jsx'
import ToggleContentComp from '../components/ToggleContentComp.jsx'
import faker from 'faker/locale/en'

class TabMainComp extends React.Component {
  render() {
    return (
      <div className="c-tabcontent">
        <details className="c-togglecontent" open>
          <summary>Abstract</summary>
          <p>{faker.fake("{{lorem.paragraphs}}")}</p>
          <WellComp />
        </details>
        <ToggleContentComp heading="Main Content" />
      </div>
    )
  }
}

module.exports = TabMainComp;
