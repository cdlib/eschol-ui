// ##### Toggle Content Component ##### //

import React from 'react'
import faker from 'faker/locale/en'

class ToggleContentComp extends React.Component {
  render() {
    return (
      <details className="c-togglecontent" open>
        <summary>Main Content</summary>
        <p>{faker.fake("{{lorem.paragraphs}}")}</p>
      </details>
    )
  }
}

module.exports = ToggleContentComp;
