// ##### Content Well Component ##### //

import React from 'react'
import faker from 'faker/locale/en'

class WellComp extends React.Component {
  render() {
    return (
      <div className="c-well">
        {faker.fake("{{lorem.paragraph}}") + ' '}
        <a href="">{faker.fake("{{lorem.sentence}}") + ' '}</a>
        {faker.fake("{{lorem.paragraph}}")}
      </div>
    )
  }
}

module.exports = WellComp;
